import React from "react";

import "./presentation.styles.scss";

const Presentation = ({ planet }) => {
  // console.log(planet);
  return (
    <section className="presentation">
      {planet?.presentation.map((img, i) => {
        return (
          <div
            key={`presentation-${i}`}
            className={`presentation__img`}
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_BASE_URL}/${img})`,
            }}
          />
        );
      })}
    </section>
  );
};

export default Presentation;
