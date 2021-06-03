import UserTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null, // errorMessage message
  successMessage: null, // success message
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SIGN_IN_SUCCESS:
    case UserTypes.SIGN_UP_SUCCESS:
    case UserTypes.GET_ME_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
      };

    case UserTypes.FORGOT_PASSWORD_SUCCESS:
    case UserTypes.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        successMessage: action.payload.message || action.payload,
      };

    case UserTypes.UPDATE_ME_SUCCESS:
      return {
        ...state,
        successMessage: action.payload.message,
        currentUser: action.payload.user,
      };

    case UserTypes.SIGN_IN_FAIL:
    case UserTypes.SIGN_UP_FAIL:
    case UserTypes.FORGOT_PASSWORD_FAIL:
    case UserTypes.LOGOUT_FAIL:
    case UserTypes.UPDATE_ME_FAIL:
    case UserTypes.UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        errorMessage: action.payload.response?.data.message || action.payload,
      };

    case UserTypes.LOGOUT_SUCESS:
      return {
        ...state,
        currentUser: null,
      };

    case UserTypes.CLEAR_ERROR:
      return {
        ...state,
        errorMessage: null,
        successMessage: null,
      };

    default:
      return state;
  }
};

export default userReducer;
