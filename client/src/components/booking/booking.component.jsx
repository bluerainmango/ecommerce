import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import BookingEl from "../bookingElement/bookingEl.component";
import { getBookingStart } from "../../redux/booking/booking.actions";
import AlertBar from "../alertBar/alertBar.component";

import "./booking.styles.scss";

const Booking = ({ getBookingStart, bookingList }) => {
  useEffect(() => {
    // if (bookingInfo.departureDate) return;
    getBookingStart();
  }, [getBookingStart]);

  return (
    <div className="profile">
      <AlertBar />
      <div className="profile__container">
        {console.log("bookingList:", bookingList)}
        {/* Render once getBookingStart() is completed and bookingList is updated with populated data */}
        {bookingList.length === 0 ? (
          <h2 className="profile__empty">"There is no booking."</h2>
        ) : (
          ""
        )}
        {bookingList[0]?._id &&
          bookingList.map((booking) => (
            <BookingEl booking={booking} key={booking._id} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookingList: state.bookings.bookingList,
});

const mapDispatchToProps = (dispatch) => ({
  getBookingStart: () => dispatch(getBookingStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
