import React from "react";
import "./planet.styles.scss";

const Planet = ({ props }) => {
  return (
    <div className="planet">
      <div className="planet__content">
        <img className={props.name} alt={props.name} src={props.image} />
        <h3 className="planet__text">{props.name}</h3>
      </div>
    </div>
  );
};

export default Planet;
