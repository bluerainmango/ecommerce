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

  //! Slides revealing animation on scrolling
  useEffect(() => {
    const revealSlide = (entries, observer) => {
      const [entry] = entries;
      const entryDOM = entry.target;

      if (!entry.isIntersecting) return;
      // console.log("🐼 ", entry.target);

      //* Reveal slide
      entryDOM.classList.remove("slide--hidden");

      //! Lazy loading
      //? This comp is using backgound image not <img> tag so will use Image()'s onload event instead of addEventListener('load',cb)
      const imageLoader = new Image();
      const url = `${process.env.REACT_APP_API_BASE_URL}/${slide.image2.replace(
        "_100px",
        ""
      )}`;
      imageLoader.src = url; // start download high res img

      // finish download
      imageLoader.onload = () => {
        console.log("🐌 imageloader is loaded");

        entryDOM.style.backgroundImage = `url("${url}")`; // add bg img
        entryDOM.classList.remove("lazy-img"); // remove blur effect
      };

      observer.unobserve(entryDOM);
    };

    const option = {
      root: null,
      rootmargin: "0px 0px 0px 0px",
      threshold: 0.5,
    };

    const slideObserver = new IntersectionObserver(revealSlide, option);

    slideObserver.observe(activeSlideRef.current);
  }, [updatedSlideOrder, slide.image2]);

  return (
    <div
      ref={activeSlideRef}
      className={
        !updatedSlideOrder
          ? "slide slide--hidden lazy-img slide--active"
          : "slide slide--hidden lazy-img"
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
