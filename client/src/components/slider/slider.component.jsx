import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import {
  nextSlide,
  previousSlide,
  // updateActiveSlideInfo,
} from "../../redux/slide/slide.actions";
import Slide from "../slide/slide.component";
import { fetchPlanetsStart } from "../../redux/planet/planet.actions";

import "./slider.styles.scss";

const Slider = (props) => {
  const {
    slides,
    moveToNextSlide,
    moveToPreviousSlide,
    selectedSlideIndex,
    fetchPlanetsStart,
    // planets,
  } = props;

  const sliderRef = useRef();

  useEffect(() => {
    fetchPlanetsStart();
  }, [fetchPlanetsStart]);

  return (
    <div ref={sliderRef} className="slider">
      <h2 className="slider__title">Explore your next destination</h2>
      {/* {console.log("🤑 planets from redux-saga: ", planets)} */}
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
  // planets: state.planets.planets,
});

const mapDispatchToProps = (dispatch) => ({
  moveToNextSlide: () => {
    dispatch(nextSlide());
  },
  moveToPreviousSlide: (info) => {
    dispatch(previousSlide());
  },
  fetchPlanetsStart: () => dispatch(fetchPlanetsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
