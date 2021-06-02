import BOOKING_TYPES from "./booking.types";

export const getBookingStart = () => ({
  type: BOOKING_TYPES.GET_BOOKING_START,
});

export const getBookingSuccess = (booking) => ({
  type: BOOKING_TYPES.GET_BOOKING_SUCCESS,
  payload: booking,
});

export const getBookingFail = () => ({
  type: BOOKING_TYPES.GET_BOOKING_FAIL,
});

export const deleteBooking = () => ({
  type: BOOKING_TYPES.DELETE_BOOKING,
});
