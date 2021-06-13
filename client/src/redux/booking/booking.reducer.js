import BOOKING_TYPES from "./booking.types";

const INIT_STATE = {
  bookingList: [],
  errorMessage: null,
  successMessage: null,
  isLoading: true,
};

const bookingReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case BOOKING_TYPES.CREATE_BOOKING_SUCCESS:
    case BOOKING_TYPES.ADD_NEW_BOOKING_TO_LIST_SUCCESS:
      return { ...state, bookingList: action.payload };

    case BOOKING_TYPES.GET_BOOKING_SUCCESS:
      return { ...state, bookingList: action.payload, isLoading: false };

    case BOOKING_TYPES.DELETE_BOOKING_SUCCESS:
      return { ...state, successMessage: action.payload };

    case BOOKING_TYPES.GET_BOOKING_FAIL:
    case BOOKING_TYPES.CREATE_BOOKING_FAIL:
    case BOOKING_TYPES.ADD_NEW_BOOKING_TO_LIST_FAIL:
    case BOOKING_TYPES.DELETE_BOOKING_FAIL:
      return { ...state, errorMessage: action.paylod };

    case BOOKING_TYPES.CLEAR_ERROR:
      return {
        ...state,
        errorMessage: null,
        successMessage: null,
      };
    // case BOOKING_TYPES.DELETE_BOOKING:
    // return { ...state, bookingList: null };

    default:
      return state;
  }
};

export default bookingReducer;
