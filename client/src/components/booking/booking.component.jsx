import React, { useEffect } from "react";
import { connect } from "react-redux";

import BookingEl from "../bookingElement/bookingEl.component";
import { getBookingStart } from "../../redux/booking/booking.action";

import "./booking.styles.scss";

const Booking = ({ getBookingStart, bookingList }) => {
  useEffect(() => {
    // if (bookingInfo.departureDate) return;
    getBookingStart();
  }, [getBookingStart]);

  return (
    <div className="profile">
      <div className="profile__container">
        {console.log("bookingList:", bookingList)}
        {bookingList.map((booking) => (
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
