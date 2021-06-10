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

export const createBookingStart = (queryLink) => ({
  type: BOOKING_TYPES.CREATE_BOOKING_START,
  payload: queryLink,
});

export const createBookingSuccess = (bookingObj) => ({
  type: BOOKING_TYPES.CREATE_BOOKING_SUCCESS,
  payload: bookingObj,
});

export const createBookingFail = () => ({
  type: BOOKING_TYPES.CREATE_BOOKING_FAIL,
});

// export const addBookingStart = (newBookingId) => ({
//   type: BOOKING_TYPES.ADD_NEW_BOOKING_TO_LIST_START,
//   payload: newBookingId,
// });

export const addBookingSuccess = (updatedBookingArr) => ({
  type: BOOKING_TYPES.ADD_NEW_BOOKING_TO_LIST_SUCCESS,
  payload: updatedBookingArr,
});

export const addBookingFail = (errMessage) => ({
  type: BOOKING_TYPES.ADD_NEW_BOOKING_TO_LIST_FAIL,
  payload: errMessage,
});

export const deleteBookingStart = (bookingId) => ({
  type: BOOKING_TYPES.DELETE_BOOKING_START,
  payload: bookingId,
});

export const deleteBookingSuccess = (successMessage) => ({
  type: BOOKING_TYPES.DELETE_BOOKING_SUCCESS,
  payload: successMessage,
});

export const deleteBookingFail = (errMessage) => ({
  type: BOOKING_TYPES.DELETE_BOOKING_FAIL,
  payload: errMessage,
});

export const clearError = () => ({
  type: BOOKING_TYPES.CLEAR_ERROR,
});
