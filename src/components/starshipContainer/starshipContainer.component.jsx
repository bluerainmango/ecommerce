import React, { useEffect, useRef, createRef } from "react";

import StarshipIntro from "../starshipIntro/starshipIntro.component";
import Benefit from "../benefit/benefit.component";
import Highlight from "../highlight/highlight.component";

import "./starshipContainer.styles.scss";

const StarshipContainer = ({ starship }) => {
  //   const highlightRef = useRef();
  const starshipRef = useRef();
  const highlightRef = createRef();
  const containerRef = useRef();

  useEffect(() => {
    console.log(
      "🧄 starshipRef",
      starshipRef.current,
      "🥝 highlightRef",
      highlightRef.current
    );

    const backToTop = (entries, observer) => {
      const [entry] = entries;

      //   if (!entry.isIntersecting) return;
      console.log("🍒", entry);

      //   observer.unobserve()

      const topToEl = entry.boundingClientRect.top;
      const bottomToEl =
        entry.rootBounds.height - entry.boundingClientRect.bottom;

      console.log("🧄 top", topToEl, "🍠 bottom", bottomToEl);
      //   if (topHeight === bottomHeight) console.log("🥕 center");
    };

    const starshipObserver = new IntersectionObserver(backToTop, {
      root: highlightRef.current,
      threshold: 0,
    });

    console.log("🍇 observer", starshipObserver);

    starshipObserver.observe(starshipRef.current);
  }, [highlightRef]);

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

//   useEffect(() => {
//     const backToTop = (entries, observer) => {
//       const [entry] = entries;

//       //   if (!entry.isIntersecting) return;
//       console.log(entry);

//       //   observer.unobserve()

//       const topToEl = entry.boundingClientRect.top;
//       const bottomToEl =
//         entry.rootBounds.height - entry.boundingClientRect.bottom;

//       console.log("🧄 top", topToEl, "🍠 bottom", bottomToEl);
//       //   if (topHeight === bottomHeight) console.log("🥕 center");
//     };

//     const options = { root: null, threshold: 1 };

//     const starshipObserver = new IntersectionObserver(backToTop, options);
//     console.log("🍇 observer", starshipObserver);

//     starshipObserver.observe(highlightRef.current);
//   }, []);
