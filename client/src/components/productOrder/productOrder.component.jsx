import React, { useEffect, useRef } from "react";

import Button from "../../components/button/button.component";

import ThumbnailSlider from "../../components/thumbnailSlider/thumbnailSlider.component";

import { connect } from "react-redux";

import "./productOrder.styles.scss";

const ProductOrder = ({ product, thumbnailIndex }) => {
  // console.log(thumbnailIndex);

  const imageRef = useRef();

  useEffect(() => {
    const imageDOM = imageRef.current;
    imageDOM.src = `${process.env.REACT_APP_API_BASE_URL}/${product.thumbnails[thumbnailIndex]}`;
  }, [thumbnailIndex, product.thumbnails]);

  return (
    <section className="productOrder">
      <div className="product__thumbnail">
        <div className="square">
          <img
            ref={imageRef}
            alt="product thumbnail"
            src={`${process.env.REACT_APP_API_BASE_URL}/${product.thumbnails[0]}`}
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
          text={["add to cart"]}
          style={{
            "--bg-color": "rgb(12, 12, 12)",
            "--font-color-hover": "black",
          }}
        />

        {/* <div className="thumbnail-slider" /> */}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  thumbnailIndex: state.pages.thumbnailIndex,
});

export default connect(mapStateToProps)(ProductOrder);
