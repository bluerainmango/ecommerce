import React, { useEffect, useRef } from "react";

import Button from "../../components/button/button.component";

import ThumbnailSlider from "../../components/thumbnailSlider/thumbnailSlider.component";

import { connect } from "react-redux";

import "./productOrder.styles.scss";

const ProductOrder = ({ product, thumbnailIndex }) => {
  // console.log(thumbnailIndex);
  // console.log("🐽 ", product);
  const imageRef = useRef();

  useEffect(() => {
    const imageDOM = imageRef.current;
    imageDOM.src = `/${product.thumbnails[thumbnailIndex]}`;
  }, [thumbnailIndex, product.thumbnails]);

  return (
    <section className="productOrder">
      <div className="product__thumbnail">
        <div className="square">
          <img
            ref={imageRef}
            alt="product thumbnail"
            src={`/${product.thumbnails[0]}`}
          />
        </div>
      </div>
      <div className="product__info">
        <h1>{product.subtitle}</h1>
        <h2>{product.title}</h2>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
        <ThumbnailSlider product={product} />
        <Button
          content={[
            {
              type:
                product.category === "planets" ? "addPlanet" : "addStarship",
              text: "add to journey",
              itemToDispatch: product,
            },
          ]}
          style={{
            "--bg-color": "rgb(12, 12, 12)",
            "--font-color-hover": "black",
          }}
        />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  thumbnailIndex: state.pages.thumbnailIndex,
});

export default connect(mapStateToProps)(ProductOrder);
