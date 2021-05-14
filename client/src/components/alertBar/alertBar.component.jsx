import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";

import { clearError } from "../../redux/user/user.actions.js";

import "./alertBar.styles.scss";

const AlertBar = ({ errorFromUser, clearError }) => {
  const barRef = useRef();

  useEffect(() => {
    if (!errorFromUser) return;

    const barDOM = barRef.current;
    // console.log("👾 ", errorFromUser?.message, barDOM);

    barDOM.classList.remove("hidden");

    setTimeout(() => {
      barDOM.classList.add("hidden");
      clearError();
    }, 5000);
  }, [errorFromUser, clearError]);

  return (
    <div ref={barRef} className={`alert hidden`}>
      {errorFromUser?.message}
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
  errorFromUser: state.users.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertBar);
