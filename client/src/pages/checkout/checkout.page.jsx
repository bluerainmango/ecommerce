import React from "react";

import CheckoutItems from "../../components/checkoutItems/checkoutItems.component";
import CheckoutPrice from "../../components/checkoutPrice/checkoutPrice.component";

import "./checkout.styles.scss";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__container">
        <CheckoutItems />
        <CheckoutPrice />
      </div>
    </div>
  );
};

export default Checkout;
