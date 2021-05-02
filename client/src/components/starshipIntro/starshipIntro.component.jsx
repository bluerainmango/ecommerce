import React from "react";

import "./starshipIntro.styles.scss";

const StarshipIntro = ({ starship }) => {
  return (
    <section className="starshipIntro">
      <div className="starshipIntro__bg" />
      <div className="starshipIntro__textbox">
        <h1>{starship.title}</h1>
        <h2>{starship.subtitle}</h2>
      </div>
      <div className="gradient"></div>
    </section>
  );
};

export default StarshipIntro;
