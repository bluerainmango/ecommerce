import React from "react";
import Planet from "../planet/planet.component";
// import data from "./planets.data.js";

import { connect } from "react-redux";

import "./collection.styles.scss";

const Collection = ({ planets }) => {
  return (
    <div className="collection">
      <h2 className="collection__title">Planets</h2>
      <div className="collection__content">
        {planets.map((planet) => (
          <Planet key={planet.id} props={planet} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  planets: state.planets.planets,
});

export default connect(mapStateToProps)(Collection);
