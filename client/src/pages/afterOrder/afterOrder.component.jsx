import React from "react";

import { Link } from "react-router-dom";
import "./afterOrder.styles.scss";

const AfterOder = () => {
  return (
    <div className="afterOrder">
      <div className="afterOrder__container">
        <h1>Successfully completed your booking!</h1>
        <h2>
          Thank you for your reservation. You can check your booking anytime{" "}
          <Link to="/account#booking">here</Link>
        </h2>
      </div>
    </div>
  );
};

export default AfterOder;
