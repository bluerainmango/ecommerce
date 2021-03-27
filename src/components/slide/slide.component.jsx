import React, { useEffect, useRef } from "react";

import { connect } from "react-redux";
import {
  updateActiveSlideInfo,
  toggleSlideInfo,
} from "../../redux/slide/slide.actions";

import "./slide.styles.scss";

const Slide = (props) => {
  const {
    selectedSlideIndex,
    currentIndex,
    updatedSlideOrder,
    slide,
    updateActiveSlideInfo,
    toggleSlideInfo,
  } = props;

  const activeSlideRef = useRef();
  const activeSlideTextRef = useRef();

  //! 🛸 Attach event listner to ACTIVE slide for tilting effect when hovering
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

  //! 📄 Store current active slide into Redux
  useEffect(() => {
    if (currentIndex !== selectedSlideIndex) return;

    updateActiveSlideInfo(slide);
  }, [selectedSlideIndex, slide, currentIndex, updateActiveSlideInfo]);

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
      onClick={selectedSlideIndex === currentIndex ? toggleSlideInfo : ""}
    >
      <div ref={activeSlideTextRef} className="slide__content">
        <h5 className="slide__title">{slide.title}</h5>
        <h6 className="slide__subtitle">{slide.subtitle}</h6>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   slideInfo: state.slides.activeSlideInfo,
// });

const mapDispatchToProps = (dispatch) => ({
  updateActiveSlideInfo: (info) => {
    dispatch(updateActiveSlideInfo(info));
  },
  toggleSlideInfo: () => {
    dispatch(toggleSlideInfo());
  },
});

export default connect(null, mapDispatchToProps)(Slide);
