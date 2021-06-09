import React, { forwardRef } from "react";

import "./cartPopupItem.styles.scss";

const CartPopup = forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className="cartPopup__item">
      {children}
    </div>
  );
});

export default CartPopup;
