import React from "react";
import { useHistory, Link } from "react-router-dom";

import "./button.styles.scss";

const Button = (props) => {
  const { text, style, linkTo } = props;
  const history = useHistory();

  //   console.log(text);
  return (
    <div className="btn-container">
      {text.map((el) => (
        <button
          className="btn"
          style={style}
          key={el}
          onClick={() => history.push(linkTo)}
        >
          <span>{el}</span>
          <div className="btn-anim" />
        </button>
      ))}
    </div>
  );
};

export default Button;
