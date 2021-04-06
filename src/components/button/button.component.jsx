import React from "react";

import "./button.styles.scss";

const Button = (props) => {
  const { text, style } = props;
  //   console.log(text);
  return (
    <div className="btn-container">
      {text.map((el) => (
        <div className="btn" style={style} key={el}>
          <span>{el}</span>
          <div className="btn-anim" />
        </div>
      ))}
    </div>
  );
};

export default Button;
