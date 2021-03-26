import React, { useEffect, useRef } from "react";

import "./slide.styles.scss";

const Slide = (props) => {
  const {
    selectedSlideIndex,
    currentIndex,
    updatedSlideOrder,
    originalSlideOrder,
    slide,
  } = props;

  const activeSlideRef = useRef();

  //!🛸 Attach event listner to ACTIVE slide for tilting effect when hovering
  useEffect(() => {
    if (selectedSlideIndex !== currentIndex) return;

    const activeSlideDOM = activeSlideRef.current;

    const handleMouseMove = (e) => {
      e.preventDefault();

      const state = {
        rect: null,
        clientX: null,
        clientY: null,
      };

      if (!state.rect) {
        state.rect = activeSlideDOM.getBoundingClientRect();
      }

      state.clientX = e.clientX;
      state.clientY = e.clientY;

      const tiltX = (state.clientX - state.rect.left) / state.rect.width;
      const tiltY = (state.clientY - state.rect.top) / state.rect.height;

      console.log("🍊 DOMElstate:", tiltX, tiltY); // 0 - 1 value

      activeSlideDOM.style.setProperty("--tiltX", tiltX);
      activeSlideDOM.style.setProperty("--tiltY", tiltY);
    };

    activeSlideDOM.addEventListener("mousemove", handleMouseMove);

    return () => {
      activeSlideDOM.removeEventListener("mousemove", handleMouseMove);
    };
  }, [selectedSlideIndex, currentIndex]);

  return (
    <div
      ref={activeSlideRef}
      className={
        selectedSlideIndex === currentIndex ? "slide slide--active" : "slide"
      }
      style={{
        "--slideOrder": updatedSlideOrder,
        "--tiltDirection":
          updatedSlideOrder === 0 ? 0 : updatedSlideOrder > 0 ? 1 : -1,
        "--zIndex": (updatedSlideOrder + 10) * 10,
        backgroundImage: `url(${slide.image})`,
      }}
    >
      <div className="slide__content">
        <h5 className="slide__title">{slide.title}</h5>
        <h6 className="slide__subtitle">{slide.subtitle}</h6>
        <p>{updatedSlideOrder}</p>
      </div>
    </div>
  );
};

export default Slide;
