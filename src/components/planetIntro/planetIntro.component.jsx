import React from "react";

import "./planetIntro.styles.scss";

const PlanetIntro = ({ planet }) => {
  return (
    <section className="planetIntro">
      <div className="planetIntro__content">
        <h1>{planet.title}</h1>
        <h2>The most technically advanced city in universe</h2>
      </div>
    </section>
  );
};

export default PlanetIntro;
