import React from "react";

import star from "../../../assets/star.png";
import "./planetIntro-3.styles.scss";

const PlanetIntro3 = () => {
  return (
    <div className="fallingStar">
      <img className="star" src={star} alt="star" />
      {/* <div className="gradient" /> */}
    </div>
  );
};

export default PlanetIntro3;
