import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
import CartPopupItem from "../cartPopupItem/cartPopupItem.component";
import CartPopupItemContent from "../CartPopupItemContent/CartPopupItemContent.component";

import "./bookingEl.styles.scss";

const BookingEl = ({ booking }) => {
  const [bookingInfo, setBookingInfo] = useState({
    departureDate: booking.departureDate.slice(0, 10),
    numOfPerson: booking.numOfPerson,
    planet: booking.planet,
    starship: booking.starship,
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    setBookingInfo({ ...bookingInfo, [name]: value });
  };

  const handleSubmit = () => {};

  return (
    <form id="form--booking" className="form--booking" onSubmit={handleSubmit}>
      <h2>Booking</h2>
      <div className="booking__group">
        <FormInput
          id="departureDate"
          name="departureDate"
          label="Departure Date"
          type="date"
          className="form-input"
          value={bookingInfo.departureDate}
          placeholder=" "
          required
          readOnly
          onChange={handleChange}
        />

        <FormInput
          id="numOfPerson"
          name="numOfPerson"
          label="Number of Person"
          type="number"
          className="form-input"
          value={bookingInfo.numOfPerson}
          placeholder=" "
          required
          readOnly
          onChange={handleChange}
        />
      </div>
      <div className="booking__group">
        <CartPopupItem>
          <CartPopupItemContent props={bookingInfo.starship} />
        </CartPopupItem>
        <CartPopupItem>
          <CartPopupItemContent props={bookingInfo.planet} />
        </CartPopupItem>
      </div>
      <Button
        className="form__btn"
        form="form--booking"
        content={[
          {
            text: "Cancel",
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
  );
};

export default BookingEl;
