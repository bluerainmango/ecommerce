import React, { useState } from "react";
// import FormInput from "../formInput/formInput.component";
import { formattedDate } from "../../util/util";

import "./checkoutDatePerson.styles.scss";

const CheckoutDatePerson = () => {
  // const [departureDate, setDepartureDate] = useState("");

  const [reservationInfo, setReservationInfo] = useState({
    departureDate: formattedDate(),
    numOfTravelers: 1,
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    console.log("🐱", name, value);

    setReservationInfo({
      ...reservationInfo,
      [name]: value,
    });
  };
  return (
    <div className="checkout__date-person">
      <form className="checkout__form">
        <div className="input-group">
          <label htmlFor="date">Departure Date</label>
          <input
            id="date"
            name="departureDate"
            type="date"
            value={reservationInfo.reservedDate}
            onChange={handleChange}
            className="checkout__date"
          />
        </div>

        <div className="input-group">
          <label htmlFor="numOfTravelers">Number of Travelers</label>
          <input
            id="numOfTravelers"
            name="numOfTravelers"
            type="number"
            min="0"
            max="6"
            size="100000"
            value={reservationInfo.numOfTravelers}
            onChange={handleChange}
            className="checkout__person"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default CheckoutDatePerson;
