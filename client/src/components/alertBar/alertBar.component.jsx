import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";

import { clearError } from "../../redux/user/user.actions.js";

import "./alertBar.styles.scss";

const AlertBar = ({ errorMessage, successMessage, clearError }) => {
  const barRef = useRef();

  useEffect(() => {
    if (!errorMessage && !successMessage) return;

    const barDOM = barRef.current;
    console.log("👾 message:", errorMessage, successMessage);

    barDOM.innerText = "";
    barDOM.classList.remove("hidden");
    barDOM.innerText = errorMessage || successMessage;

    setTimeout(() => {
      barDOM.classList.add("hidden");
      clearError();
    }, 5000);
  }, [errorMessage, clearError, successMessage]);

  return (
    <div ref={barRef} className={`alert hidden`}>
      {/* {errorMessage}
      {successMessage} */}
      {/* "Password and username are not correct. Please try again." */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearError: () => {
    dispatch(clearError());
  },
});

const mapStateToProps = (state) => ({
  errorMessage: state.users.errorMessage,
  successMessage: state.users.successMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertBar);
