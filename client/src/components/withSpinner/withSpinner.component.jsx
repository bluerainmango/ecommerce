import React from "react";

import Spinner from "../spinner/spinner.component";

const WithSpinner = (WrappedComponent) => ({
  isLoading,
  style,
  ...otherProps
}) => {
  return isLoading ? (
    <Spinner style={style} />
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
