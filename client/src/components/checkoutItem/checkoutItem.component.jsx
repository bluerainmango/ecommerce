import React from "react";
import { ReactComponent as StarshipIcon } from "../../assets/icons/rocket-outline.svg";
import { ReactComponent as PlanetIcon } from "../../assets/icons/planet-outline.svg";
import { ReactComponent as DateIcon } from "../../assets/icons/calendar-outline.svg";

import CheckoutProduct from "../checkoutProduct/checkoutProduct.component";
import CheckoutDatePerson from "../checkoutDatePerson/checkoutDatePerson.component";
// import starshipImg from "../../assets/starship1.png";

// import Button from "../button/button.component";
// import CheckoutItem from "../checkoutItem/checkoutItem.component";

import "./checkoutItem.styles.scss";

const CheckoutItem = ({ type }) => {
  return (
    <div className="checkout__item">
      <div className="checkout__icon">
        {type === "starship" ? (
          <StarshipIcon />
        ) : type === "planet" ? (
          <PlanetIcon />
        ) : (
          <DateIcon />
        )}
      </div>
      <div className="checkout__contentBox">
        {type === "dateAndPerson" ? (
          <CheckoutDatePerson />
        ) : (
          <CheckoutProduct />
        )}
      </div>
    </div>
  );
};

export default CheckoutItem;
