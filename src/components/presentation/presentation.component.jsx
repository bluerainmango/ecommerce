import React from "react";

import "./presentation.styles.scss";

const Presentation = ({ planet }) => {
  console.log(planet);
  return (
    <div className="presentation">
      {planet?.presentation.map((img, i) => {
        return (
          <div
            key={`presentation-${i}`}
            className={`presentation__img`}
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Presentation;
