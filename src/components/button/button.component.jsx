import React from "react";

import "./button.styles.scss";

const Button = (props) => {
  const { text } = props;
  //   console.log(text);
  return (
    <div class="btn-container">
      {text.map((el) => (
        <div class="btn" key={el}>
          <span>{el}</span>
        </div>
      ))}
    </div>
  );
};

export default Button;
