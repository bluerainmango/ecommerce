import React, { useEffect, useRef } from "react";

import PlanetIntro1 from "./planet1/planetIntro-1.component";
import PlanetIntro2 from "./planet2/planetIntro-2.component";
import PlanetIntro3 from "./planet3/planetIntro-3.component";

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

      case "/planets/luyten":
        textEffect = "cloud";
        break;

      default:
        textEffect = "sky";
    }

    textRef.current.classList.add(textEffect);
  }, [pathname]);

  return (
    <section className="planetIntro">
      {pathname === "/planets/kepler" ? (
        <PlanetIntro1 />
      ) : pathname === "/planets/luyten" ? (
        <PlanetIntro2 />
      ) : (
        <PlanetIntro3 />
      )}

      <div className="planetIntro__content">
        <h1 ref={textRef} className="planetIntro__title">
          {planet?.title}
        </h1>
      </div>
    </section>
  );
};

export default PlanetIntro;
