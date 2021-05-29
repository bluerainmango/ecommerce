import React from "react";

import Spinner from "../spinner/spinner.component";

import "./withSpinner.styles.scss";

const WithSpinner = (isLoading) => (WrappedComponent) => (props) => {
  return isLoading ? <Spinner /> : <WrappedComponent />;
};

export default WithSpinner;
