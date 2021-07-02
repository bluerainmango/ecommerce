import React from "react";
import { connect } from "react-redux";

import { deleteBookingStart } from "../../redux/booking/booking.actions";

import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
import CartPopupItem from "../cartPopupItem/cartPopupItem.component";
import CartPopupItemContent from "../CartPopupItemContent/CartPopupItemContent.component";

import "./bookingEl.styles.scss";

const BookingEl = ({ booking, deleteBookingStart, isExpired }) => {
  const handleSubmit = (e) => {
    // console.log("🐼 submitted with booking ID: ", booking._id);
    e.preventDefault();
    deleteBookingStart(booking._id);
  };

  const createdDateInLocal = new Date(booking.createdAt).toLocaleDateString();

  // console.log("🐡", booking.createdAt, createdDateInLocal);

  return (
    booking && (
      <form
        id={`form--booking--${booking._id}`}
        className={
          isExpired ? "form--booking booking--expired" : "form--booking"
        }
        onSubmit={handleSubmit}
      >
        <h2 className="booking__title">Booking</h2>
        <div className="title__line" />
        <h3 className="booking__createdDate">{createdDateInLocal}</h3>
        <div className="booking__group">
          <FormInput
            id={`departureDate--${booking._id}`}
            name="departureDate"
            label="Departure Date"
            type="date"
            className="form-input departureDate"
            value={booking.departureDate?.slice(0, 10)}
            placeholder=" "
            required
            readOnly
          />

          <FormInput
            id={`numOfPerson--${booking._id}`}
            name="numOfPerson"
            label="Travelers"
            type="number"
            className="form-input numOfPerson"
            value={booking.numOfPerson}
            placeholder=" "
            required
            readOnly
          />
          <FormInput
            id={`totalPrice--${booking._id}`}
            name="totalPrice"
            label="Total Price"
            type="text"
            className="form-input totalPrice"
            value={`$${booking.price}`}
            placeholder=" "
            required
            readOnly
          />
        </div>
        <h3 className="booking__subtitle">Planet & Starship</h3>
        <div className="booking__group">
          <CartPopupItem>
            <CartPopupItemContent props={booking.planet} />
          </CartPopupItem>
          <CartPopupItem>
            <CartPopupItemContent props={booking.starship} />
          </CartPopupItem>
        </div>
        <Button
          className="form__btn"
          form="form--booking"
          content={[
            {
              text: isExpired ? "Delete Record" : "Cancel",
              type: "submit",
              // linkTo: "/",
            },
          ]}
          style={{
            "--bg-color": "rgb(12, 12, 12)",
            "--font-color-hover": "black",
          }}
        />
      </form>
    )
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteBookingStart: (bookingId) => dispatch(deleteBookingStart(bookingId)),
});

export default connect(null, mapDispatchToProps)(BookingEl);
