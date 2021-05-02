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

export const updateActiveSlideInfo = (info) => ({
  type: slideTypes.UPDATE_ACTIVE_SLIDE_INFO,
  payload: info,
});

export const toggleSlideInfo = () => ({
  type: slideTypes.TOGGLE_SLIDE_INFO,
});
