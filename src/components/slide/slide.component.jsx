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
        let slideOrder = i - slideIndex;
        const maxSlideOrder = Math.ceil(arr.length / 2);

        console.log("index", slideIndex);
        console.log("before", slideOrder);

        {
          /* slideOrder =
          slideOrder >= maxSlideOrder ? slideOrder - arr.length : slideOrder; */
        }

        const calSlideOrder = (slideOrder, maxSlideOrder, arr) => {
          if (Math.abs(slideOrder) < maxSlideOrder) {
            console.log("🍌 no problem: ", slideOrder);
            return slideOrder;
          }

          if (slideOrder > 0) {
            console.log("🍎 over 3 so become:", slideOrder - arr.length);
            return slideOrder - arr.length;
          }
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
              "--maxSliderOrder": maxSlideOrder,
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
