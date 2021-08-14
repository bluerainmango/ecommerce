import React from "react";
import { connect } from "react-redux";

import BookingEl from "../bookingElement/bookingEl.component";
import "./bookingContent.styles.scss";

const BookingContent = ({ bookingList }) => {
  return (
    <div className="booking__container">
      <h3 className="booking__description">
        You can manage your bookings here. Once the departure date has passed,
        your booking will expires.
      </h3>

      {console.log("📕 bookingList:", bookingList)}

      {bookingList.length === 0 ? (
        <h2 className="profile__empty">"There is no booking."</h2>
      ) : (
        bookingList.map((booking) => {
          const dDateArr = booking.departureDate?.split("-");
          const DepartureTimeStamp = new Date(
            dDateArr[0] * 1,
            dDateArr[1] * 1 - 1, // month starts from 0
            dDateArr[2] * 1
          ).getTime();

          const isExpired = DepartureTimeStamp < Date.now();

          {
            /* const isExpired =
  new Date(booking.departureDate).getTime() < Date.now(); */
          }

          console.log("😎 is expired: ", isExpired);

          return (
            <BookingEl
              booking={booking}
              key={booking._id}
              isExpired={isExpired}
            />
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookingList: state.bookings.bookingList,
});

export default connect(mapStateToProps)(BookingContent);
