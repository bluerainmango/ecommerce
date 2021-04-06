import React from "react";

import "./productOrder.styles.scss";

const ProductOrder = ({ planet }) => {
  return (
    <section className="productOrder">
      <div className="product__thumbnail">
        <div className="thumbnail-slider" />
        <img alt="product thumbnail" src={planet.image_800} />
      </div>
      <div className="product__info">
        <h1>{planet.subtitle}</h1>
        <h2>subtitle</h2>
        <h3>price</h3>
        <button>add to your journey</button>
      </div>
    </section>
  );
};

export default ProductOrder;
