import React from "react";
import { Link } from "react-router-dom";

const CartPopupItemContent = ({ props }) => {
  return (
    <>
      <Link to={`/planets/${props.slug}`}>
        <div className="item__block--start">
          <img
            src={`${process.env.REACT_APP_API_BASE_URL}/${props.collectionThumb}`}
            alt={`cart item ${props.title}`}
          />
        </div>
      </Link>
      <div className="item__block--middle">
        <h4>{props.title}</h4>
        <span> ${props.price}</span>
      </div>
    </>
  );
};

export default CartPopupItemContent;
