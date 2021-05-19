import React from "react";
import { connect } from "react-redux";

import Button from "../button/button.component";

import "./checkoutPrice.styles.scss";

const CheckoutPrice = ({ cart, numOfPerson }) => {
  return (
    <div className="checkout__price">
      <div className="price__detail">
        <h2>Cost per person</h2>
        <div className="price__detail--planet">
          <h3>Planet Entrance Fee</h3>
          <span>{cart.planet?.price ? `$${cart.planet.price}` : "-"}</span>
        </div>
        <div className="price__detail--starship">
          <h3>Starship Rental</h3>
          <span>{cart.starship?.price ? `$${cart.starship.price}` : "-"}</span>
        </div>
      </div>
      <div className="price__travelers">
        <h2>Number of travelers</h2>
        {/* {console.log("🐥", numOfPerson, cart)} */}
        <span>x{numOfPerson}</span>
      </div>
      <div className="price__date">
        <h2>Depareture Date</h2>
        <span>{cart.departureDate.replaceAll("--", "/")}</span>
      </div>
      <div className="price__total">
        <h2>Total</h2>
        <span>${cart.totalPrice}</span>
      </div>
      <Button
        content={[
          {
            text: "Proceed to purchase",
            type: "link",
            linkTo: "/purchase",
          },
        ]}
        style={{
          width: "100%",
          // "--bg-color": "rgb(255, 72, 0)",
        }}
        // style={{ width: "100%", backgroundColor: "rgb(0, 81, 255)" }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  numOfPerson: state.cart.numOfPerson,
});

export default connect(mapStateToProps)(CheckoutPrice);
