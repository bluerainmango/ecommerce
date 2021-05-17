import React from "react";

import CheckoutItem from "../checkoutItem/checkoutItem.component";

import "./checkoutItems.styles.scss";

const CheckoutItems = () => {
  return (
    <div className="checkout__items">
      <CheckoutItem type="starship" />
      <CheckoutItem type="planet" />
      <CheckoutItem type="dateAndPerson" />
      {/* <CheckoutDatePerson /> */}
    </div>
  );
};

export default CheckoutItems;
