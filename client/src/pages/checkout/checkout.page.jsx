import React from "react";
import { Route } from "react-router-dom";

import CheckoutItems from "../../components/checkoutItems/checkoutItems.component";
import CheckoutPrice from "../../components/checkoutPrice/checkoutPrice.component";

import "./checkout.styles.scss";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__container">
        <CheckoutItems />
        <CheckoutPrice />
        {/* <Route path="/success"></Route> */}
      </div>
    </div>
  );
};

export default Checkout;
