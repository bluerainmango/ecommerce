import axios from "axios";

import BOOKING_TYPES from "./booking.types";
import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  getBookingSuccess,
  getBookingFail,
  // deleteBooking,
  createBookingFail,
  createBookingSuccess,
  addBookingSuccess,
  addBookingFail,
} from "./booking.action";

//* Get populdated booking arr
function* getBooking() {
  try {
    const res = yield axios(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/bookings/me`,
      { withCredentials: true }
    );

    console.log("🐤 my booking arr: ", res.data.data);
    yield put(getBookingSuccess(res.data.data));
  } catch (err) {
    console.log("👹 err: ", err);
    yield put(getBookingFail(err));
  }
}

//* 1. Create new booking
function* createBooking({ payload }) {
  try {
    // console.log("🤓 querylink: ", payload);

    const res = yield axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/bookings${payload}`,
      null,
      { withCredentials: true }
    );

    const newBooking = res.data.data;
    console.log("🤓 new booking: ", newBooking);

    yield put(createBookingSuccess(newBooking));
    yield addNewBooking(newBooking._id);
  } catch (err) {
    console.log("👹 err: ", err);
    yield put(createBookingFail(err));
  }
}

//* 2. Add new booking to user DB & redux bookings
function* addNewBooking(newBookingId) {
  try {
    // a. Add new booking to user DB
    const res = yield axios.patch(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/mybooking`,
      { booking: newBookingId },
      { withCredentials: true }
    );

    console.log("🐥 updated my booking list:", res);
    const updatedBookingArr = res.data.data.user.booking;

    // b. Update new booking list in Redux bookings
    yield put(addBookingSuccess(updatedBookingArr));
  } catch (err) {
    console.log("👹 err: ", err);
    yield put(addBookingFail(err));
  }
}

function* onCreateBookingStart() {
  yield takeLatest(BOOKING_TYPES.CREATE_BOOKING_START, createBooking);
}

function* onGetBookingStart() {
  yield takeLatest(BOOKING_TYPES.GET_BOOKING_START, getBooking);
}

export default function* bookingSaga() {
  yield all([call(onGetBookingStart), call(onCreateBookingStart)]);
}
