import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
import CartPopupItem from "../cartPopupItem/cartPopupItem.component";

import "./booking.styles.scss";

const Booking = () => {
  const [bookingInfo, setBookingInfo] = useState({
    reservedDate: "2021-07-23",
    numOfPerson: 2,
    planet: {
      slug: "kepler",
      collectionThumb: "sdf",
      title: "kese",
      price: 123,
    },
    starship: "he231",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    setBookingInfo({ ...bookingInfo, [name]: value });
  };

  const handleSubmit = () => {};

  return (
    <div className="profile">
      <div className="profile__container">
        <form
          id="form--profile"
          className="form--profile"
          onSubmit={handleSubmit}
        >
          <h2>Booking</h2>
          <FormInput
            id="reservedDate"
            name="reservedDate"
            label="Reserved Date"
            type="date"
            className="form-input"
            value={bookingInfo.reservedDate}
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

          <div className="booking__planet">
            {/* <img
              src={`${process.env.REACT_APP_API_BASE_URL}/`}
              alt="booked planet"
            /> */}
          </div>
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
      </div>
    </div>
  );
};

export default Booking;
