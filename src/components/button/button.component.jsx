import React from "react";

import "./button.styles.scss";

const Button = (props) => {
  const { text } = props;
  //   console.log(text);
  return (
    <div className="btn-container">
      {text.map((el) => (
        <div className="btn" key={el}>
          <span>{el}</span>
        </div>
      ))}
    </div>
  );
};

export default Button;
