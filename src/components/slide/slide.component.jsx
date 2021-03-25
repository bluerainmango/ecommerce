import React from "react";
import { connect } from "react-redux";
import { nextSlide, previousSlide } from "../../redux/slide/slide.actions";

import "./slide.styles.scss";

const Slide = (props) => {
  const { slides, moveToNextSlide, moveToPreviousSlide, slideIndex } = props;

  //   const sortedSlides = [
  //     ...slides.slice(slideIndex),
  //     ...slides.slice(0, slideIndex),
  //   ];

  //   console.log("index:", sortedSlides);

  return (
    <div className="slider">
      {slides.map((slide, i, arr) => {
        //! 1. slide order # that each slide will have
        let slideOrder = i - slideIndex;
        //! 2. max slide order: max and standard # to keep slides in center
        const maxSlideOrder = Math.ceil(arr.length / 2);

        //! 3. whenever each slide's slideOrder # is over maxSlideOrder #, move the slide to the opposite side so the slides locate in center at all times.
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

        return (
          <div
            key={`slide-${i}`}
            className={slideIndex === i ? "slide slide--active" : "slide"}
            style={{
              "--slideOrder": calSlideOrder(slideOrder, maxSlideOrder, arr),
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* <img alt="slide.title" src={slide.image} /> */}
            <p>{slide.title}</p>
            <p>{slideOrder}</p>
          </div>
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
  slideIndex: state.slides.slideIndex,
});

const mapDispatchToProps = (dispatch) => ({
  moveToNextSlide: () => {
    dispatch(nextSlide());
  },
  moveToPreviousSlide: () => {
    dispatch(previousSlide());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Slide);

//! transform 초기 값
// translateX((-100 * slideIndex )%)

/*{ <div
  key={`slide-${i}`}
  className={slideIndex === i ? "slide slide--active" : "slide"}
  style={
    i === slideIndex
      ? { transform: `translateX(100%)` }
      : Math.abs(slideIndex - i) === 1
      ? { transform: `translateX(200%)` }
      : { transform: `translateX(-100%)` }
  }
> } */
