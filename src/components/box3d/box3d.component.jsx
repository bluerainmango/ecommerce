import React from "react";

import Button from "../button/button.component";

import "./box3d.styles.scss";

const Box3d = ({ props }) => {
  console.log("🍋 box3d props:", props);

  return (
    <div>
      <div className="box3d__wrapper">
        <div className="box3d__card">
          <div className="front">
            <h1>{props.title}</h1>
            <p>
              {props.subtitle}
              {/* <span>2018</span> */}
            </p>
            <p className="price">${props.price}</p>
          </div>
          <div className="right">
            {/* <h2>{props.title}</h2> */}
            <ul>
              {props.feature.map((el) => (
                <li>{el.subject}</li>
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
        <div className="img-wrapper">
          <img
            src={props.collectionThumb}
            alt={`${props.title}-collection-thumb`}
          />
        </div>
      </div>
    </div>
  );
};

export default Box3d;
