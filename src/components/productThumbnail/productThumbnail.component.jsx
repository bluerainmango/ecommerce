import React from "react";
import "./productThumbnail.styles.scss";

import { Link, useRouteMatch } from "react-router-dom";

const ProductThumbnail = ({ props }) => {
  const match = useRouteMatch();

  console.log(match.url, props);
  return (
    <div className="product-thumb">
      <Link
        to={`${match.url}/${props.slug}`}
        className="product-thumb__content"
      >
        <img className={props.name} alt={props.name} src={props.image} />
        <h3 className="product-thumb__text">{props.name}</h3>
      </Link>
    </div>
  );
};

export default ProductThumbnail;
