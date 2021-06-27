import React from "react";

import Button from "../button/button.component";
// import Slider from "../slider/slider.component";

import "./popup.styles.scss";

const Popup = ({ text }) => {
  return (
    <div className="popup">
      <div className="popup__box">
        <div className="popup__content">
          {/* <Slider /> */}
          <h1 className="popup__title">{text}</h1>
          <Button
            text={["close"]}
            style={{
              "--bg-color": "rgb(12, 12, 12)",
              "--font-color-hover": "black",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
