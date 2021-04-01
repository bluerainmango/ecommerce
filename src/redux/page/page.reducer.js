import pageTypes from "./page.types";

const INITIAL_STATE = {
  isPassedHomeBanner: false,
};

const pageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pageTypes.IS_PASSED_HOME_BANNER:
      return {
        ...state,
        isPassedHomeBanner: !state.isPassedHomeBanner,
      };

    default:
      return state;
  }
};

export default pageReducer;
