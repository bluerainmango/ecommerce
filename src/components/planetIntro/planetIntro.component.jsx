import React, { useEffect, useRef } from "react";

import PlanetIntro1 from "./planet1/planetIntro-1.component";
import PlanetIntro2 from "./planet2/planetIntro-2.component";

import { useLocation } from "react-router-dom";
import "./planetIntro.styles.scss";

const PlanetIntro = ({ planet }) => {
  const pathname = useLocation().pathname;
  const textRef = useRef();

  //* Add text design effect
  useEffect(() => {
    let textEffect;

    switch (pathname) {
      case "/planets/kepler":
        textEffect = "neon";
        break;

      case "/planets/k2":
        textEffect = "cloud";
        break;

      default:
        textEffect = "";
    }

    textRef.current.classList.add(textEffect);
  }, [pathname]);

  return (
    <section className="planetIntro">
      {/* <PlanetIntro1 /> */}
      <PlanetIntro2 />

      <div className="planetIntro__content">
        <h1 ref={textRef} className={`planetIntro__title`}>
          {planet?.title}
        </h1>
      </div>
    </section>
  );
};

export default PlanetIntro;
