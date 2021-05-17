import React from "react";

import starshipImg from "../../assets/starship1.png";

import Button from "../button/button.component";

import "./checkoutProduct.styles.scss";

const CheckoutProduct = ({ type, product }) => {
  return (
    <div className="checkout__product">
      <div className="itemBox__photo">
        {!product ? (
          <div />
        ) : (
          <img
            src={`${process.env.REACT_APP_API_BASE_URL}/${product?.collectionThumb}`}
            alt={`checkout`}
          />
        )}
      </div>
      <div className="itemInfo">
        <h2 className="itemBox__name">
          {type.toUpperCase() || `${product?.title}`}
        </h2>
        <h3 className="itemBox__price">{"-" || `${product?.price}`}</h3>
      </div>
      <div className="itemBtns">
        {!product ? (
          ""
        ) : (
          <Button
            content={[
              {
                type:
                  product.category === "planets"
                    ? "removePlanet"
                    : "removeStarship",
                text: "remove",
                itemToDispatch: product,
              },
            ]}
          />
        )}
        <Button
          content={[
            {
              type: "link",
              text: `${!product ? "add" : "change"}`,
              linkTo: "/change",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CheckoutProduct;
