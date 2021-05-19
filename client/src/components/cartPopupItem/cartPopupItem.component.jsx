import React from "react";

import "./cartPopupItem.styles.scss";

const CartPopup = ({ children }) => {
  return (
    <div className="cartPopup__item">
      {/* <div>
        <h3>Planet</h3>
        <img />
      </div>
      <div>
        <h4>Kepler</h4>
        <span>$124</span>
      </div> */}
      {children}
    </div>
  );
};

export default CartPopup;
