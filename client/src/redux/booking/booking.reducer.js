import BOOKING_TYPES from "./booking.types";

const INIT_STATE = {
  bookingList: [],
  error: null,
};

const bookingReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case BOOKING_TYPES.GET_BOOKING_SUCCESS:
    case BOOKING_TYPES.CREATE_BOOKING_SUCCESS:
    case BOOKING_TYPES.ADD_NEW_BOOKING_TO_LIST_SUCCESS:
      return { ...state, bookingList: action.payload };

    case BOOKING_TYPES.GET_BOOKING_FAIL:
    case BOOKING_TYPES.CREATE_BOOKING_FAIL:
    case BOOKING_TYPES.ADD_NEW_BOOKING_TO_LIST_FAIL:
      return { ...state, error: action.paylod };

    case BOOKING_TYPES.DELETE_BOOKING:
      return { ...state, bookingList: null };

    default:
      return state;
  }
};

export default bookingReducer;
