import React from "react";

import "./headline.styles.scss";

const Headline = ({ planet }) => {
  // console.log("🌽", planet);
  return (
    <section className="headline">
      <div className="headline__content">
        <h2>{planet.headline}</h2>
      </div>
    </section>
  );
};

export default Headline;
