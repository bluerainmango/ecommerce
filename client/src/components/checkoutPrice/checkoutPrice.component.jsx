import React from "react";

import Button from "../button/button.component";

import "./checkoutPrice.styles.scss";

const CheckoutPrice = () => {
  return (
    <div className="checkout__price">
      <div className="price__detail">
        <h2>Cost per person</h2>
        <div className="price__detail--planet">
          <h3>Planet Entrance Fee</h3>
          <span>$75</span>
        </div>
        <div className="price__detail--starship">
          <h3>Starship Rental</h3>
          <span>$725</span>
        </div>
      </div>
      <div className="price__travelers">
        <h2>Number of travelers</h2>
        <span>X2</span>
      </div>
      <div className="price__total">
        <h2>Total</h2>
        <span>$1239</span>
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

export default CheckoutPrice;
