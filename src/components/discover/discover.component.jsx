import React from "react";
import home from "../../assets/discover-home.jpeg";
import astronaut from "../../assets/discover-ast.jpeg";
import human from "../../assets/discover-human.jpeg";

import "./discover.styles.scss";

const Discover = () => {
  return (
    <div className="discover">
      <h3 className="discover__title">WHY SPACE Y</h3>
      <div className="discover__content">
        <div className="discover__content--left">
          <img
            alt="discover-Best homes in userverse"
            src={home}
            className="discover__img"
          />
          <h4 className="discover__headline">Best homes in universe</h4>
          <p className="discover__text">
            Anim irure nulla officia mollit aute est.
          </p>
        </div>
        <div className="discover__content--right">
          <img
            alt="discover-Best space developers"
            src={astronaut}
            className="discover__img"
          />
          <h4 className="discover__headline">
            First and best space developers
          </h4>
          <p className="discover__text">
            Labore consectetur nostrud exercitation veniam aliqua.
          </p>

          <img
            alt="discover-Secure payment"
            src={human}
            className="discover__img"
          />
          <h4 className="discover__headline">Secure processing system</h4>
          <p className="discover__text">
            Dolore est amet ea Lorem pariatur reprehenderit ex velit ipsum sunt
            ullamco aliqua in.
          </p>
        </div>
        <div className="discover__content--3"></div>
      </div>
    </div>
  );
};

export default Discover;
