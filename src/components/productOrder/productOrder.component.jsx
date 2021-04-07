import React from "react";

import Button from "../../components/button/button.component";

import ThumbnailSlider from "../../components/thumbnailSlider/thumbnailSlider.component";

import "./productOrder.styles.scss";

const ProductOrder = ({ planet }) => {
  return (
    <section className="productOrder">
      <div className="product__thumbnail">
        <div className="square">
          <img alt="product thumbnail" src={planet.image} />
        </div>
      </div>
      <div className="product__info">
        <h1>{planet.subtitle}</h1>
        <h2>{planet.title}</h2>
        <h3>${planet.price}</h3>
        <p>{planet.description}</p>
        <Button
          text={["add to cart"]}
          style={{
            "--bg-color": "rgb(12, 12, 12)",
            "--font-color-hover": "black",
          }}
        />
        <ThumbnailSlider planet={planet} />
        {/* <div className="thumbnail-slider" /> */}
      </div>
    </section>
  );
};

export default ProductOrder;
