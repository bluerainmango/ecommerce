import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
import CartPopupItem from "../cartPopupItem/cartPopupItem.component";

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
    <form id="form--profile" className="form--profile" onSubmit={handleSubmit}>
      <h2>Booking</h2>
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

      {/* <div className="booking__planet">
        <img
          src={`${process.env.REACT_APP_API_BASE_URL}/`}
          alt="booked planet"
        />
      </div> */}
      <CartPopupItem>
        <Link to={`/starships/${bookingInfo.starship.slug}`}>
          <div className="item__block--start">
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}/${bookingInfo.starship.collectionThumb}`}
              alt={`bookingInfo item ${bookingInfo.starship.title}`}
            />
          </div>
        </Link>
        <div className="item__block--middle">
          <h4>{bookingInfo.starship.title}</h4>
          <span>${bookingInfo.starship.price}</span>
        </div>
      </CartPopupItem>
      <CartPopupItem>
        <Link to={`/starships/${bookingInfo.planet.slug}`}>
          <div className="item__block--start">
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}/${bookingInfo.planet.collectionThumb}`}
              alt={`bookingInfo item ${bookingInfo.planet.title}`}
            />
          </div>
        </Link>
        <div className="item__block--middle">
          <h4>{bookingInfo.planet.title}</h4>
          <span>${bookingInfo.planet.price}</span>
        </div>
      </CartPopupItem>
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
