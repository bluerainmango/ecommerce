import pageTypes from "./page.types";

export const updateHideNavbar = () => ({
  type: pageTypes.UPDATE_HIDE_BANER,
});

export const nextThumbnail = (numOfThumbnails) => ({
  type: pageTypes.NEXT_THUMBNAIL,
  payload: numOfThumbnails,
});

export const defaultThumbnail = () => ({
  type: pageTypes.DEFAULT_THUMBNAIL,
});
