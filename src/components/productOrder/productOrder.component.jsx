import React, { useEffect, useRef } from "react";

import Button from "../../components/button/button.component";

import ThumbnailSlider from "../../components/thumbnailSlider/thumbnailSlider.component";

import { connect } from "react-redux";

import "./productOrder.styles.scss";

const ProductOrder = ({ planet, thumbnailIndex }) => {
  console.log(thumbnailIndex);

  const imageRef = useRef();

  useEffect(() => {
    const imageDOM = imageRef.current;
    imageDOM.src = planet.thumbnails[thumbnailIndex];
  }, [thumbnailIndex, planet.thumbnails]);

  return (
    <section className="productOrder">
      <div className="product__thumbnail">
        <div className="square">
          <img
            ref={imageRef}
            alt="product thumbnail"
            src={planet.thumbnails[0]}
          />
        </div>
      </div>
      <div className="product__info">
        <h1>{planet.subtitle}</h1>
        <h2>{planet.title}</h2>
        <h3>Entrance Fee: ${planet.price}</h3>
        <p>{planet.description}</p>
        <ThumbnailSlider planet={planet} />
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
