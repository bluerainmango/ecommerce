import React, { useEffect } from "react";
import { connect } from "react-redux";

import AlertBar from "../alertBar/alertBar.component";
import BookingContent from "../bookingContent/bookingContent.component";
import WithSpinner from "../withSpinner/withSpinner.component";

import { getBookingStart } from "../../redux/booking/booking.actions";

import "./booking.styles.scss";

const BookingContentWithSpinner = WithSpinner(BookingContent);

const Booking = ({ getBookingStart, bookingList, isLoading }) => {
  useEffect(() => {
    // if (bookingInfo.departureDate) return;
    getBookingStart();
  }, [getBookingStart]);

  return (
    <div className="booking">
      <AlertBar />
      {console.log("bookingList:", bookingList)}
      {/* Render once getBookingStart() is completed and bookingList is updated with populated data */}
      {/* isFetching ===true : spiner, isFetch===false && length===0 : no booking, rendering bookings */}
      {/* <BookingContent /> */}
      <BookingContentWithSpinner
        isLoading={isLoading}
        style={{ "--colorSpinner": "#008cff", "--colorText": "#008cff" }}
        // bookingList={bookingList}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookingList: state.bookings.bookingList,
  isLoading: state.bookings.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getBookingStart: () => dispatch(getBookingStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
