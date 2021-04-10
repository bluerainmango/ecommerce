import React from "react";

import "./planetIntro.styles.scss";

const PlanetIntro = ({ planet }) => {
  return (
    <section className="planetIntro glitch">
      <div className="glitch__item" />
      <div className="glitch__item" />
      <div className="glitch__item" />
      <div className="glitch__item" />
      {/* <div className="glitch__item" /> */}
      <div className="planetIntro__content">
        <h1 className="">{planet.title}</h1>
        {/* <h2>The most technically advanced city in universe</h2> */}
      </div>
      <div className="gradient" />
    </section>
  );
};

export default PlanetIntro;
