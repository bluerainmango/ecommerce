import React from "react";

import "./slide.styles.scss";

const Slide = (props) => {
  const { SelectedSlideIndex, currentIndex, updatedSlideOrder, slide } = props;

  return (
    <div
      className={
        SelectedSlideIndex === currentIndex ? "slide slide--active" : "slide"
      }
      style={{
        "--slideOrder": updatedSlideOrder,
        "--tiltDirection":
          updatedSlideOrder === 0 ? 0 : updatedSlideOrder > 0 ? 1 : -1,
        backgroundImage: `url(${slide.image})`,
      }}
    ></div>
  );
};

export default Slide;
