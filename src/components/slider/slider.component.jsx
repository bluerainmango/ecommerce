import React from "react";

import { connect } from "react-redux";
import {
  nextSlide,
  previousSlide,
  updateActiveSlideInfo,
} from "../../redux/slide/slide.actions";

import Slide from "../slide/slide.component";

import "./slider.styles.scss";

const Slider = (props) => {
  const {
    slides,
    moveToNextSlide,
    moveToPreviousSlide,
    selectedSlideIndex,
  } = props;

  return (
    <div className="slider">
      <h2 className="slider__title">Explore your dream place</h2>
      {slides.map((slide, i, arr) => {
        //! 1. Slide order # that each slide will have
        let slideOrder = i - selectedSlideIndex;

        //! 2. Max slide order: max and standard # to keep slides in center
        const maxSlideOrder = Math.ceil(arr.length / 2);

        //! 3. Whenever each slide's slideOrder # > maxSlideOrder #,
        //! => move the slide to the opposite side so the slides locate in center at all times.
        const calSlideOrder = (slideOrder, maxSlideOrder, arr) => {
          //* a. less than max => no change to slideOrder
          if (Math.abs(slideOrder) < maxSlideOrder) {
            return slideOrder;
          }

          //* b. more than max(+num) => move the slide to leftside
          if (slideOrder > 0) {
            return slideOrder - arr.length;
          }

          //* c. more than max(-num) => move the slide to rightside
          if (slideOrder < 0) {
            return slideOrder + arr.length;
          }
        };

        const updatedSlideOrder = calSlideOrder(slideOrder, maxSlideOrder, arr);

        return (
          <Slide
            key={`slide-${i}`}
            slide={slide}
            updatedSlideOrder={updatedSlideOrder}
          />
        );
      })}

      <button className="slider__btn--prev" onClick={moveToPreviousSlide}>
        &lang;
      </button>
      <button className="slider__btn--next" onClick={moveToNextSlide}>
        &rang;
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  slides: state.slides.slides,
  selectedSlideIndex: state.slides.slideIndex,
});

const mapDispatchToProps = (dispatch) => ({
  moveToNextSlide: () => {
    dispatch(nextSlide());
  },
  moveToPreviousSlide: (info) => {
    dispatch(previousSlide());
    dispatch(updateActiveSlideInfo(info));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
