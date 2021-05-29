import React from "react";

import Spinner from "../spinner/spinner.component";

import "./withSpinner.styles.scss";

const WithSpinner = (isLoading) => (WrappedComponent) => {
  const SpinnerOrComp = (props) => {
    return isLoading ? <Spinner /> : <WrappedComponent />;
  };

  return SpinnerOrComp;
};

export default WithSpinner;
