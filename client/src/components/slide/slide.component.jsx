import React, { useEffect, useRef } from "react";

import { connect } from "react-redux";
import {
  updateActiveSlideInfo,
  toggleSlideInfo,
} from "../../redux/slide/slide.actions";

import "./slide.styles.scss";

const Slide = (props) => {
  const {
    updatedSlideOrder,
    slide,
    updateActiveSlideInfo,
    toggleSlideInfoAndScroll,
    stateToggleSlideInfo,
  } = props;

  const activeSlideRef = useRef();
  const activeSlideTextRef = useRef();
  const scrollToSliderRef = useRef();
  // const slideRef = useRef();

  //! Attach event listner to ACTIVE slide for tilting effect when hovering
  useEffect(() => {
    if (updatedSlideOrder) return;

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

      // 0 - 1 value
      const tiltX = (state.clientX - state.rect.left) / state.rect.width;
      const tiltY = (state.clientY - state.rect.top) / state.rect.height;

      activeSlideDOM.style.setProperty("--tiltX", tiltX);
      activeSlideDOM.style.setProperty("--tiltY", tiltY);
    };

    activeSlideDOM.addEventListener("mousemove", handleMouseMove);

    return () => {
      activeSlideDOM.removeEventListener("mousemove", handleMouseMove);
    };
  }, [updatedSlideOrder]);

  //! Store current active slide into Redux
  useEffect(() => {
    if (updatedSlideOrder) return;

    updateActiveSlideInfo(slide);
  }, [updatedSlideOrder, slide, updateActiveSlideInfo]);

  //! Scroll animation
  useEffect(() => {
    const revealSlide = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.remove("slide--hidden");
      observer.unobserve(entry.target);
    };

    const option = {
      root: null,
      rootmargin: "0px 0px 0px 0px",
      threshold: 0.5,
    };

    const slideObserver = new IntersectionObserver(revealSlide, option);

    slideObserver.observe(activeSlideRef.current);
  }, [updatedSlideOrder]);

  return (
    <div
      ref={activeSlideRef}
      className={
        !updatedSlideOrder
          ? "slide slide--hidden slide--active"
          : "slide slide--hidden"
      }
      style={{
        "--slideOrder": updatedSlideOrder,
        "--tiltDirection":
          updatedSlideOrder === 0 ? 0 : updatedSlideOrder > 0 ? 1 : -1,
        "--zIndex": (updatedSlideOrder + 10) * 10,
        backgroundImage: `url(${process.env.REACT_APP_API_BASE_URL}/${slide.image2})`,
      }}
      onClick={toggleSlideInfoAndScroll(
        updatedSlideOrder,
        scrollToSliderRef,
        stateToggleSlideInfo
      )}
    >
      <div className="scrollTo--slider" ref={scrollToSliderRef} />
      <div ref={activeSlideTextRef} className="slide__content">
        <h5 className="slide__title">{slide.title}</h5>
        <h6 className="slide__subtitle">{slide.subtitle}</h6>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stateToggleSlideInfo: state.slides.toggleSlideInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateActiveSlideInfo: (info) => {
    dispatch(updateActiveSlideInfo(info));
  },
  toggleSlideInfoAndScroll: (order, ref, toggle) => {
    //* If current slide is not an active one(not 0), return.
    if (order) return;

    return () => {
      //* Dispatch Action(toggle slide info - true/false)
      dispatch(toggleSlideInfo());

      //* Smooth Scroll to slider top(when only opening)
      if (toggle) return;
      const scrollToSliderDOM = ref.current;
      scrollToSliderDOM?.scrollIntoView({ behavior: "smooth" });
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Slide);
