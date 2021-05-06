import React from "react";

import Button from "../button/button.component";

import "./box3d.styles.scss";

const Box3d = ({ props }) => {
  // console.log("🍋 box3d props:", props);

  return (
    <div>
      <div className="box3d__wrapper">
        <div
          className={`box3d__card ${
            props.category === "starships" ? "card__starship" : ""
          }`}
        >
          <div className="front">
            <h1>{props.title}</h1>
            <p>
              {props.subtitle}
              {/* <span>2018</span> */}
            </p>
            <p className="price">${props.price}</p>
            <div className="img-wrapper">
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/${props.collectionThumb}`}
                alt={`${props.title}-collection-thumb`}
              />
            </div>
          </div>

          <div
            className="right"
            style={{
              backgroundImage: `linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.219) 0%,
                rgba(0, 0, 0, 0) 100%
              ),url(${process.env.REACT_APP_API_BASE_URL}/${props.featureImage})`,
            }}
          >
            {/* <h2>{props.title}</h2> */}
            <ul>
              {props.feature?.map((el) => (
                <li key={`list-${el.subject}`}>{el.subject}</li>
              ))}
            </ul>
            <Button
              text={["Learn more"]}
              // style={{
              //   "--bg-color": "rgb(12, 12, 12)",
              //   "--font-color-hover": "black",
              // }}
            />
          </div>
        </div>
        {/* <div className="img-wrapper">
          <img
            src={props.collectionThumb}
            alt={`${props.title}-collection-thumb`}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Box3d;
