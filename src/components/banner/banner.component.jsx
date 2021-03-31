import React, { useEffect, useRef } from "react";

import astronaut from "../../assets/astronaut.png";
import planets from "../../assets/planets.png";
// import starship1 from "../../assets/starship2.png";
import starship6 from "../../assets/starship6.png";

import "./banner.styles.scss";

const Banner = () => {
  const bannerImg1 = useRef();
  const bannerImg2 = useRef();

  useEffect(() => {
    const revealBanner = (entries, observer) => {
      const [entry] = entries;
      console.log("🍔 entries", entry);

      if (!entry.isIntersecting) return;

      entry.target.classList.remove("banner--hidden");
      observer.unobserve(entry.target);
    };

    const bannerObserver = new IntersectionObserver(revealBanner, {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.5,
    });

    bannerObserver.observe(bannerImg1.current);
    bannerObserver.observe(bannerImg2.current);
  }, []);

  return (
    <div>
      <div className="banner banner--first ">
        <div ref={bannerImg1} className="banner__img banner--hidden">
          <img
            src={astronaut}
            alt="astronaut"
            className="banner__photo--astronaut"
          />
          <img src={planets} alt="planets" className="banner__photo--planets" />
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
            className="banner__photo--astronaut"
          />
          <img
            src={starship6}
            alt="planets"
            className="banner__photo--planets"
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
    </div>
  );
};

export default Banner;
