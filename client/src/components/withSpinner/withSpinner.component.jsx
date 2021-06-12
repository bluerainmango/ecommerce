import React from "react";

import Spinner from "../spinner/spinner.component";

// import "./withSpinner.styles.scss";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
