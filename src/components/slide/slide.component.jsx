import React from "react";
import { connect } from "react-redux";
import { nextSlide, previousSlide } from "../../redux/slide/slide.actions";

import "./slide.styles.scss";

const Slide = (props) => {
  const { slides, moveToNextSlide, moveToPreviousSlide, slideIndex } = props;

  const sortedSlides = [
    ...slides.slice(slideIndex),
    ...slides.slice(0, slideIndex),
  ];

  console.log("index:", sortedSlides);
  // translateX((-100 * slideIndex )%)
  return (
    <div className="slider">
      {console.log("index inside: ", slideIndex * 100)}
      {console.log(("🍏 sortedSlides", sortedSlides))}
      {sortedSlides.map((slide, i, arr) => {
        return (
          <div
            key={`slide-${i}`}
            className={slideIndex === i ? "slide slide--active" : "slide"}
            style={{ "--offset": slideIndex - i }}
          >
            {/* <div
            key={`slide-${i}`}
            className={slideIndex === i ? "slide slide--active" : "slide"}
            style={
              i === slideIndex
                ? { transform: `translateX(100%)` }
                : Math.abs(slideIndex - i) === 1
                ? { transform: `translateX(200%)` }
                : { transform: `translateX(-100%)` }
            }
          > */}
            <img alt="slide.title" src={slide.image} />
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
