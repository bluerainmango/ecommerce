import React, { useRef, useEffect } from "react";

import PlanetIntro1 from "./planet1/planetIntro-1.component";

import "./planetIntro.styles.scss";

const PlanetIntro = ({ planet }) => {
  return (
    <section className="planetIntro">
      <PlanetIntro1 />

      <div className="planetIntro__content">
        <h1 className="planetIntro__title neon">{planet.title}</h1>
      </div>
    </section>
  );
};

export default PlanetIntro;
