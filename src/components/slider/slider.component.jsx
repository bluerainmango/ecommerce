import React, { useRef, useEffect } from "react";

import { connect } from "react-redux";
import { nextSlide, previousSlide } from "../../redux/slide/slide.actions";

import Slide from "../slide/slide.component";

import "./slider.styles.scss";

const Slider = (props) => {
  const {
    slides,
    moveToNextSlide,
    moveToPreviousSlide,
    SelectedSlideIndex,
  } = props;

  // const activeSlideRef = useRef();

  //! Attach event listner to ACTIVE slide
  useEffect(() => {}, []);

  return (
    <div className="slider">
      {slides.map((slide, i, arr) => {
        //! 1. Slide order # that each slide will have
        let slideOrder = i - SelectedSlideIndex;

        //! 2. Max slide order: max and standard # to keep slides in center
        const maxSlideOrder = Math.ceil(arr.length / 2);

        //! 3. Whenever each slide's slideOrder # > maxSlideOrder #,
        //! => move the slide to the opposite side so the slides locate in center at all times.
        const calSlideOrder = (slideOrder, maxSlideOrder, arr) => {
          //* a. less than max => no change to slideOrder
          if (Math.abs(slideOrder) < maxSlideOrder) {
            console.log("🍌 no problem: ", slideOrder);
            return slideOrder;
          }

          //* b. more than max(+num) => move the slide to leftside
          if (slideOrder > 0) {
            console.log("🍎 over 3 so become:", slideOrder - arr.length);
            return slideOrder - arr.length;
          }

          //* c. more than max(-num) => move the slide to rightside
          if (slideOrder < 0) {
            console.log("🍏 less 3 so become:", slideOrder + arr.length);
            return slideOrder + arr.length;
          }
        };

        const updatedSlideOrder = calSlideOrder(slideOrder, maxSlideOrder, arr);

        return (
          <Slide
            key={`slide-${i}`}
            slide={slide}
            currentIndex={i}
            selectedSlideIndex={SelectedSlideIndex}
            updatedSlideOrder={updatedSlideOrder}
            // ref={activeSlideRef}
          >
            {/* <img alt="slide.title" src={slide.image} /> */}
            <p>{slide.title}</p>
            <p>{slideOrder}</p>
          </Slide>
        );
      })}
      <button className="slider__btn--prev" onClick={moveToPreviousSlide}>
        Previous
      </button>
      <button className="slider__btn--next" onClick={moveToNextSlide}>
        Next
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  slides: state.slides.slides,
  SelectedSlideIndex: state.slides.slideIndex,
});

const mapDispatchToProps = (dispatch) => ({
  moveToNextSlide: () => {
    dispatch(nextSlide());
  },
  moveToPreviousSlide: () => {
    dispatch(previousSlide());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
