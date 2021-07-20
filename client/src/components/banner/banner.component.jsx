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

  //! Banner images reveal animation + lazy loading
  useEffect(() => {
    let removeBlur;
    let imgArr = [];

    const revealBanner = (entries, observer) => {
      const [entry] = entries;
      // console.log("🍔 entries", entry);

      if (!entry.isIntersecting) return;

      const imgArr = entry.target.querySelectorAll("img[data-src]");

      //* Show banners(animation)
      entry.target.classList.remove("banner--hidden");

      //* Start loading high res imgs
      imgArr.forEach((el) => {
        el.src = el.dataset.src;

        removeBlur = () => {
          // console.log("🐣 img loaded");
          el.classList.remove("lazy-img");
        };

        el.addEventListener("load", removeBlur);
      });

      observer.unobserve(entry.target);
    };

    const bannerObserver = new IntersectionObserver(revealBanner, {
      root: null,
      threshold: 0,
    });

    [bannerImgs1, bannerImgs2].forEach((group) => {
      // console.log("🐰 ", group.current.querySelectorAll("img[data-src]"));

      imgArr = [...imgArr, ...group.current.querySelectorAll("img[data-src]")];
      bannerObserver.observe(group.current);
    });

    return () => {
      imgArr.forEach((el) => {
        el.removeEventListener("load", removeBlur);
      });
    };
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

  return (
    <section ref={sectionBanner} id="section-banner">
      <div className="banner banner--first ">
        <div ref={bannerImgs1} className="banner__img banner--hidden">
          <img
            // src={astronaut}
            src="/astronaut_200px.png"
            data-src="/astronaut.png"
            alt="astronaut"
            className="banner__photo banner__photo--astronaut lazy-img"
          />
          <img
            // src={planets}
            src="/planets_200px.png"
            data-src="/planets.png"
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
            src="/starship6_200px.png"
            data-src="/starship6.png"
            alt="starship--back"
            className="banner__photo banner__photo--starship--1 lazy-img"
          />
          <img
            // src={starship6}
            src="/starship6_200px.png"
            data-src="/starship6.png"
            alt="starship--front"
            className="banner__photo banner__photo--starship--2 lazy-img"
          />
        </div>
        <div className="banner__context">
          <h2 className="banner__pretitle">High-tech</h2>
          <h3 className="banner__title">Starships</h3>
          <p className="banner__paragraph">
            Comfort yourself in the universe with ease of mind
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
