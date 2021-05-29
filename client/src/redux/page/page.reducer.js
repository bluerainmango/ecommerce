import pageTypes from "./page.types";

const INITIAL_STATE = {
  hideNavbar: false,
  thumbnailIndex: 0,
  isLoading: false,
};

const pageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pageTypes.UPDATE_HIDE_BANER:
      console.log("hideNavbar", state.hideNavbar);

      return {
        ...state,
        hideNavbar: !state.hideNavbar,
      };

    //* action.payload: number of thumbnails
    case pageTypes.NEXT_THUMBNAIL:
      return {
        ...state,
        thumbnailIndex: (state.thumbnailIndex + 1) % action.payload,
      };

    case pageTypes.DEFAULT_THUMBNAIL:
      return {
        ...state,
        thumbnailIndex: 0,
      };

    case pageTypes.TOGGLE_ISLOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    default:
      return state;
  }
};

export default pageReducer;
