import React, { useEffect, useRef } from "react";

import { connect } from "react-redux";
import { updateActiveSlideInfo } from "../../redux/slide/slide.actions";

import SlideInfo from "../slideInfo/slideInfo.component";

import "./slide.styles.scss";

const Slide = (props) => {
  const {
    selectedSlideIndex,
    currentIndex,
    updatedSlideOrder,
    slide,
    updateActiveSlideInfo,
  } = props;

  const activeSlideRef = useRef(null);
  const activeSlideTextRef = useRef(null);

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

  useEffect(() => {
    if (currentIndex !== selectedSlideIndex) return;

    updateActiveSlideInfo(slide);
  }, [selectedSlideIndex, slide]);

  // useEffect(() => {
  //   console.log("useEffect of update active");
  //   if (selectedSlideIndex !== currentIndex) return;

  //   updateActiveSlideInfo(slide);
  // }, [slide, updateActiveSlideInfo, slideInfo]);

  // useEffect(() => {
  //   if (selectedSlideIndex !== currentIndex) return;

  //   const textDOM = activeSlideTextRef.current;
  //   console.log(textDOM);

  //   const html = `<h5 className="text__title">${selectedSlideIndex}</h5>
  //   <h6 className="text__subtitle">${slide.subtitle}</h6>
  //   `;

  //   textDOM.insertAdjacentHTML("afterbegin", html);
  // }, [selectedSlideIndex, currentIndex]);

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
        "--textAnimation": 2,
      }}
    >
      {console.log("🍅 slide reredner")}
      <div ref={activeSlideTextRef} className="slide__content">
        <h5 className="slide__title">{slide.title}</h5>
        <h6 className="slide__subtitle">{slide.subtitle}</h6>
      </div>
      {/* <SlideInfo
        selectedSlideIndex={selectedSlideIndex}
        currentIndex={currentIndex}
        updatedSlideOrder={updatedSlideOrder}
      /> */}
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
});

export default connect(null, mapDispatchToProps)(Slide);
