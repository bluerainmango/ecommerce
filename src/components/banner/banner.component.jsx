import React, { useEffect, useRef } from "react";

import astronaut from "../../assets/astronaut.png";
import planets from "../../assets/planets.png";
// import starship1 from "../../assets/starship2.png";
import starship6 from "../../assets/starship6.png";

import { connect } from "react-redux";
import { updateIsPassedHomeBanner } from "../../redux/page/page.action";

import "./banner.styles.scss";

const Banner = (props) => {
  const { updateIsPassedHomeBanner } = props;

  const bannerImg1 = useRef();
  const bannerImg2 = useRef();
  const sectionBanner = useRef();

  //! Banner images reveal animation
  useEffect(() => {
    const revealBanner = (entries, observer) => {
      const [entry] = entries;
      // console.log("🍔 entries", entry);

      if (!entry.isIntersecting) return;

      entry.target.classList.remove("banner--hidden");
      observer.unobserve(entry.target);
    };

    const bannerObserver = new IntersectionObserver(revealBanner, {
      root: null,
      threshold: 0,
    });

    [bannerImg1, bannerImg2].forEach((img) => {
      bannerObserver.observe(img.current);
    });
  }, []);

  //! Detect section and update redux state for Nav bar reveal
  useEffect(() => {
    const sectionDOM = sectionBanner.current;

    const detectSection = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;
      updateIsPassedHomeBanner();
      observer.unobserve(sectionDOM);
    };

    const isPassedObserver = new IntersectionObserver(detectSection, {
      root: null,
      threshold: 0.5,
      // rootMargin: "-90%",
    });

    isPassedObserver.observe(sectionDOM);
  }, [updateIsPassedHomeBanner]);

  return (
    <section ref={sectionBanner}>
      <div className="banner banner--first ">
        <div ref={bannerImg1} className="banner__img banner--hidden">
          <img
            src={astronaut}
            alt="astronaut"
            className="banner__photo banner__photo--astronaut"
          />
          <img
            src={planets}
            alt="planets"
            className="banner__photo banner__photo--planets"
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
        <div ref={bannerImg2} className="banner__img banner--hidden">
          <img
            src={starship6}
            alt="astronaut"
            className="banner__photo banner__photo--starship--1"
          />
          <img
            src={starship6}
            alt="planets"
            className="banner__photo banner__photo--starship--2"
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
//   isPassedHomeBanner: state.pages.isPassedHomeBanner,
// });

const mapDispatchToProps = (dispatch) => ({
  updateIsPassedHomeBanner: () => {
    dispatch(updateIsPassedHomeBanner());
  },
});

export default connect(null, mapDispatchToProps)(Banner);
