import React, { useEffect, useRef } from "react";

// import astronaut from "../../assets/astronaut.png";
// import planets from "../../assets/planets.png";
// import starship1 from "../../assets/starship2.png";
// import starship6 from "../../assets/starship6.png";

import { connect } from "react-redux";
import { updateHideNavbar } from "../../redux/page/page.action";

import "./banner.styles.scss";

const Banner = (props) => {
  const { updateHideNavbar } = props;

  const bannerImgs1 = useRef();
  const bannerImgs2 = useRef();
  const sectionBanner = useRef();
  const img1 = useRef();

  //! Banner images reveal animation
  useEffect(() => {
    const revealBanner = (entries, observer) => {
      const [entry] = entries;
      // console.log("🍔 entries", entry);

      if (!entry.isIntersecting) return;

      const imgArr = entry.target.querySelectorAll("img[data-src]");
      console.log("🐠 ", imgArr);

      entry.target.classList.remove("banner--hidden");

      imgArr.forEach((el) => {
        console.log("🐯", el);
        el.src = el.dataset.src;

        el.addEventListener("load", () => {
          console.log("🐣 img loaded");
          el.classList.remove("lazy-img");
        });
      });

      observer.unobserve(entry.target);
    };

    const bannerObserver = new IntersectionObserver(revealBanner, {
      root: null,
      threshold: 0,
    });

    [bannerImgs1, bannerImgs2].forEach((img) => {
      bannerObserver.observe(img.current);
    });
  }, []);

  //! Detect section and update redux state for Nav bar reveal
  useEffect(() => {
    const sectionDOM = sectionBanner.current;

    const detectSection = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      updateHideNavbar();
      observer.unobserve(sectionDOM);
    };

    const isPassedObserver = new IntersectionObserver(detectSection, {
      root: null,
      threshold: 0.5,
      // rootMargin: "-90%",
    });

    isPassedObserver.observe(sectionDOM);
  }, [updateHideNavbar]);

  // useEffect(() => {
  //   const loadHighResImg = (entries, observer) => {
  //     const [entry] = entries;
  //     console.log(entry);

  //     if (!entry.isIntersecting) return;

  //     entry.target.src = entry.target.dataset.src;

  //     entry.target.addEventListner("load", (e) => {
  //       entry.target.classList.remove("lazy-img");
  //     });
  //   };

  //   const imgObserver = new IntersectionObserver(loadHighResImg, {
  //     root: null,
  //     threshold: 0,
  //     rootMargin: "200px",
  //   });

  //   imgObserver.observe(img1.current);
  // }, []);

  return (
    <section ref={sectionBanner} id="section-banner">
      <div className="banner banner--first ">
        <div ref={bannerImgs1} className="banner__img banner--hidden">
          <img
            // src={astronaut}
            ref={img1}
            src={`${process.env.REACT_APP_API_BASE_URL}/astronaut_200px.png`}
            data-src={`${process.env.REACT_APP_API_BASE_URL}/astronaut.png`}
            alt="astronaut"
            className="banner__photo banner__photo--astronaut lazy-img"
          />
          <img
            // src={planets}
            src={`${process.env.REACT_APP_API_BASE_URL}/planets_200px.png`}
            data-src={`${process.env.REACT_APP_API_BASE_URL}/planets.png`}
            alt="planets"
            className="banner__photo banner__photo--planets lazy-img"
          />
        </div>
        <div className="banner__context">
          <h2 className="banner__pretitle">Your first ever</h2>
          <h3 className="banner__title">Space travel</h3>
          <p className="banner__paragraph">
            Experience the incredible adventure in the universe
          </p>
        </div>
      </div>
      <div className="banner banner--second">
        <div ref={bannerImgs2} className="banner__img banner--hidden">
          <img
            // src={starship6}
            src={`${process.env.REACT_APP_API_BASE_URL}/starship6_200px.png`}
            data-src={`${process.env.REACT_APP_API_BASE_URL}/starship6.png`}
            alt="starship--back"
            className="banner__photo banner__photo--starship--1 lazy-img"
          />
          <img
            // src={starship6}
            src={`${process.env.REACT_APP_API_BASE_URL}/starship6_200px.png`}
            data-src={`${process.env.REACT_APP_API_BASE_URL}/starship6.png`}
            alt="starship--front"
            className="banner__photo banner__photo--starship--2 lazy-img"
          />
        </div>
        <div className="banner__context">
          <h2 className="banner__pretitle">High-tech</h2>
          <h3 className="banner__title">Starships</h3>
          <p className="banner__paragraph">
            Comfort yourself in universe with ease-mind.
          </p>
        </div>
      </div>
    </section>
  );
};

// const mapStateToProps = (state) => ({
//  hideNavbar: state.pages.hideNavbar,
// });

const mapDispatchToProps = (dispatch) => ({
  updateHideNavbar: () => {
    dispatch(updateHideNavbar());
  },
});

export default connect(null, mapDispatchToProps)(Banner);
