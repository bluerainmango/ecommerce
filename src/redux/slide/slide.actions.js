import slideTypes from "./slide.types";

export const getSlides = () => ({
  type: slideTypes.GET_SLIDES,
});

export const nextSlide = () => ({
  type: slideTypes.NEXT_SLIDE,
});

export const previousSlide = () => ({
  type: slideTypes.PREVIOUS_SLIDE,
});
