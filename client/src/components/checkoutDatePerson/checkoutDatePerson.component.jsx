import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  updateDepartureDate,
  updatePerson,
} from "../../redux/cart/cart.action";

import { formattedDate } from "../../util/util";

import "./checkoutDatePerson.styles.scss";

const CheckoutDatePerson = (props) => {
  const { updateDepartureDate, updatePerson } = props;

  const [reservationInfo, setReservationInfo] = useState({
    departureDate: formattedDate(),
    numOfPerson: 1,
  });

  useEffect(() => {
    updateDepartureDate(reservationInfo.departureDate);
  }, [reservationInfo.departureDate, updatePerson, updateDepartureDate]);

  useEffect(() => {
    updatePerson(reservationInfo.numOfPerson * 1);
  }, [reservationInfo.numOfPerson, updatePerson, updateDepartureDate]);

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
          <label htmlFor="numOfPerson">Number of Travelers</label>
          <input
            id="numOfPerson"
            name="numOfPerson"
            type="number"
            min="1"
            max="10"
            value={reservationInfo.numOfPerson}
            onChange={handleChange}
            className="checkout__person"
          ></input>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateDepartureDate: (date) => dispatch(updateDepartureDate(date)),
  updatePerson: (numOfPerson) => dispatch(updatePerson(numOfPerson)),
});

export default connect(null, mapDispatchToProps)(CheckoutDatePerson);
