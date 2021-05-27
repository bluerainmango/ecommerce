import React from "react";

import "./missing.styles.scss";

const MissingPage = () => {
  return (
    <div className="missingPage">
      <div className="missingPage__container">
        <h1>Page not found!</h1>
        <h2>Sorry, but the page you were looking for could not be found.</h2>
      </div>
    </div>
  );
};

export default MissingPage;
