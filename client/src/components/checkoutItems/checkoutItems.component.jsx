import React from "react";
import { connect } from "react-redux";

import CheckoutItem from "../checkoutItem/checkoutItem.component";

import "./checkoutItems.styles.scss";

const CheckoutItems = ({ cart }) => {
  return (
    <div className="checkout__items">
      <CheckoutItem type="planet" product={cart.planet} />
      <CheckoutItem type="starship" product={cart.starship} />
      <CheckoutItem type="dateAndPerson" />
      {/* <CheckoutDatePerson /> */}
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CheckoutItems);
