import React, { useEffect, useRef, createRef } from "react";

import StarshipIntro from "../starshipIntro/starshipIntro.component";
import Benefit from "../benefit/benefit.component";
import Highlight from "../highlight/highlight.component";

import "./starshipContainer.styles.scss";

const StarshipContainer = ({ starship }) => {
  const starshipRef = useRef();
  const highlightRef = createRef();
  const containerRef = useRef();

  //* When starship hits highlight comp, it goes back to header(remove fixed).
  useEffect(() => {
    const backToTop = (entries, observer) => {
      const [entry] = entries;
      const starshipDOM = starshipRef.current;

      if (!entry.isIntersecting) return;
      //   console.log("🍒", entry);

      starshipDOM.style.setProperty("position", "absolute");

      observer.unobserve(entry.target);
    };

    const starshipObserver = new IntersectionObserver(backToTop, {
      root: null,
      threshold: 0.6,
      rootMargin: "-250px 0px -250px 0px",
    });

    starshipObserver.observe(highlightRef.current);
  }, [highlightRef, starshipRef]);

  return (
    <div ref={containerRef} className="starshipContainer">
      <div className="starship__imgbox">
        <img
          ref={starshipRef}
          className="starship__img"
          src={starship.image}
          alt="starship"
        />
      </div>
      <StarshipIntro starship={starship} />
      <Benefit starship={starship} />
      <Highlight ref={highlightRef} starship={starship} />
    </div>
  );
};

export default StarshipContainer;
