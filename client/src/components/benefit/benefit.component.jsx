import React from "react";

import "./benefit.styles.scss";

const Benefit = ({ starship }) => {
  return (
    <section className="benefit">
      {starship.benefit.map((el, i) => (
        <div
          key={`benefit-${i}`}
          className={`benefit__list benefit__list--${i}`}
        >
          {el}
        </div>
      ))}
    </section>
  );
};

export default Benefit;
