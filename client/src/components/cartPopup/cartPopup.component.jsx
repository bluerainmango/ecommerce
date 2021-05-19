import React from "react";

import CartPopupItem from "../cartPopupItem/cartPopupItem.component";
import Button from "../button/button.component";

import Planet from "../../assets/planet-1_800_trans.png";
import Starship from "../../assets/starship1.png";
import "./cartPopup.styles.scss";

const CartPopup = () => {
  return (
    <div className="cartPopup">
      <h3>PLANET</h3>
      <CartPopupItem>
        <div className="item__block--start">
          <img src={Planet} />
        </div>
        <div className="item__block--middle">
          <h4>Kepler</h4>
          <span>$124</span>
        </div>
      </CartPopupItem>
      <h3>STARSHIP</h3>
      <CartPopupItem>
        <div className="item__block--start">
          <img src={Starship} />
        </div>
        <div className="item__block--middle">
          <h4>Kepler</h4>
          <span>$124</span>
        </div>
      </CartPopupItem>
      <h3>DATE & TRAVLERS</h3>
      <CartPopupItem>
        <div className="cartPopup__start">
          <h4>Depareture</h4>
          <span>2021-05-21</span>
        </div>
        <div className="cartPopup__middle">
          <h4>Travlers</h4>
          <span>3</span>
        </div>
      </CartPopupItem>
      <Button
        content={[{ text: "fly now", type: "link", linkTo: "/checkout" }]}
      />
    </div>
  );
};

export default CartPopup;
