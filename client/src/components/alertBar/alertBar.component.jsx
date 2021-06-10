import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";

import { clearError as userClearError } from "../../redux/user/user.actions.js";
import { clearError as bookingClearError } from "../../redux/booking/booking.actions";

import "./alertBar.styles.scss";

const AlertBar = ({
  userErrorMessage,
  userSuccessMessage,
  bookingErrorMessage,
  bookingSuccessMessage,
  userClearError,
  bookingClearError,
}) => {
  const barRef = useRef();

  useEffect(() => {
    if (
      !userErrorMessage &&
      !userSuccessMessage &&
      !bookingErrorMessage &&
      !bookingSuccessMessage
    )
      return;

    const barDOM = barRef.current;
    console.log(
      "👾 message:",
      userErrorMessage,
      userSuccessMessage,
      bookingErrorMessage,
      bookingSuccessMessage
    );

    barDOM.innerText = "";
    barDOM.innerText =
      userErrorMessage ||
      userSuccessMessage ||
      bookingErrorMessage ||
      bookingSuccessMessage;

    barDOM.classList.remove("hidden", "alert--error", "alert--success");

    if (userErrorMessage || bookingErrorMessage)
      barDOM.classList.add("alert--error");
    if (userSuccessMessage || bookingSuccessMessage)
      barDOM.classList.add("alert--success");

    setTimeout(() => {
      barDOM.classList.add("hidden");
      userClearError();
      bookingClearError();
    }, 5000);
  }, [
    userErrorMessage,
    bookingErrorMessage,
    bookingSuccessMessage,
    userClearError,
    userSuccessMessage,
    bookingClearError,
  ]);

  return (
    <div ref={barRef} className={`alert hidden`}>
      {/* {errorMessage}
      {successMessage} */}
      {/* "Password and username are not correct. Please try again." */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  userClearError: () => dispatch(userClearError()),
  bookingClearError: () => dispatch(bookingClearError()),
});

const mapStateToProps = (state) => ({
  userErrorMessage: state.users.errorMessage,
  userSuccessMessage: state.users.successMessage,
  bookingErrorMessage: state.bookings.errorMessage,
  bookingSuccessMessage: state.bookings.successMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertBar);
