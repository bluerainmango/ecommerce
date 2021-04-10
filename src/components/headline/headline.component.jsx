import React from "react";

import "./headline.styles.scss";

const Headline = ({ planet }) => {
  console.log("🌽", planet);
  return (
    <div className="headline">
      <div className="headline__content">
        <h2>{planet.headline}</h2>
      </div>
    </div>
  );
};

export default Headline;
