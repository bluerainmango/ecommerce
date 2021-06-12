import React from "react";

import "./spinner.styles.scss";

const Spinner = ({ style }) => (
  <div className="loader__box" style={style}>
    <div className="loader__inner">
      <div className="loader" />
      <h3 className="loader__text">Loading...</h3>
    </div>
  </div>
);

export default Spinner;
