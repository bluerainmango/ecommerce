import React from "react";
import { connect } from "react-redux";

import BookingEl from "../bookingElement/bookingEl.component";

const BookingContent = ({ bookingList }) => {
  return (
    <div className="booking__container">
      {console.log("📕 bookingList:", bookingList)}
      {bookingList.length === 0 ? (
        <h2 className="profile__empty">"There is no booking."</h2>
      ) : (
        bookingList.map((booking) => (
          <BookingEl booking={booking} key={booking._id} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookingList: state.bookings.bookingList,
});

export default connect(mapStateToProps)(BookingContent);
