import React from "react";

import StarshipIntro from "../starshipIntro/starshipIntro.component";
import Benefit from "../benefit/benefit.component";

import "./starshipContainer.styles.scss";

const StarshipContainer = ({ starship }) => {
  console.log("🧄 container inside's starship", starship);

  return (
    <div className="starshipContainer">
      <div className="starship__imgbox">
        <img className="starship__img" src={starship.image} alt="starship" />
      </div>
      <StarshipIntro starship={starship} />
      <Benefit starship={starship} />
    </div>
  );
};

export default StarshipContainer;
