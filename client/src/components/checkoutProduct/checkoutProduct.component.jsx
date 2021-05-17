import React from "react";

import starshipImg from "../../assets/starship1.png";

import Button from "../button/button.component";

import "./checkoutProduct.styles.scss";

const CheckoutProduct = ({ type }) => {
  return (
    <div className="checkout__product">
      <div className="itemBox__photo">
        <img src={starshipImg} alt={`checkout`} />
      </div>
      <div className="itemInfo">
        <h2 className="itemBox__name">Vinus</h2>
        <h3 className="itemBox__price">$233</h3>
      </div>
      <div className="itemBtns">
        <Button text={["remove"]} />
        <Button text={["change"]} />
      </div>
    </div>
  );
};

export default CheckoutProduct;
