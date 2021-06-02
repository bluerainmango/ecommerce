import BOOKING_TYPES from "./booking.types";

const INIT_STATE = {
  booking: null,
  error: null,
};

const bookingReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case BOOKING_TYPES.GET_BOOKING_SUCCESS:
      return { ...state, booking: action.payload };

    case BOOKING_TYPES.GET_BOOKING_FAIL:
      return { ...state, error: action.paylod };

    case BOOKING_TYPES.DELETE_BOOKING:
      return { ...state, booking: null };

    default:
      return state;
  }
};

export default bookingReducer;
