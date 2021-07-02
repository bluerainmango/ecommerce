import axios from "axios";

import BOOKING_TYPES from "./booking.types";
import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  getBookingSuccess,
  getBookingFail,
  createBookingFail,
  createBookingSuccess,
  addBookingSuccess,
  addBookingFail,
  deleteBookingSuccess,
  deleteBookingFail,
} from "./booking.actions";

//* Get populdated booking arr
function* getBooking() {
  try {
    const res = yield axios(`/api/v1/bookings/me`, { withCredentials: true });

    console.log("🐤 my booking arr: ", res.data.data);
    yield put(getBookingSuccess(res.data.data));
  } catch (err) {
    console.log("👹 err: ", err);
    yield put(getBookingFail(err.response.data.message));
  }
}

//* 1. Create new booking
function* createBooking({ payload }) {
  try {
    // console.log("🤓 querylink: ", payload);

    const res = yield axios.post(`/api/v1/bookings${payload}`, null, {
      withCredentials: true,
    });

    const newBooking = res.data.data;
    console.log("🤓 new booking: ", newBooking);

    yield put(createBookingSuccess(newBooking));
    yield addNewBooking(newBooking._id);
  } catch (err) {
    console.log("👹 err: ", err);
    yield put(createBookingFail(err.response.data.message));
  }
}

//* 2. Add new booking to user DB & redux bookings
function* addNewBooking(newBookingId) {
  try {
    // a. Add new booking to user DB
    const res = yield axios.patch(
      `/api/v1/users/mybooking`,
      { booking: newBookingId },
      { withCredentials: true }
    );

    console.log("🐥 updated my booking list:", res);
    const updatedBookingArr = res.data.data.user.booking;

    // b. Update new booking list in Redux bookings
    yield put(addBookingSuccess(updatedBookingArr));
  } catch (err) {
    console.log("👹 err: ", err);
    yield put(addBookingFail(err.response.data.message));
  }
}

function* deleteBooking({ payload }) {
  try {
    const res = yield axios.delete(`/api/v1/bookings/${payload}`, {
      withCredentials: true,
    });

    //* 1. Delete one booking
    yield put(deleteBookingSuccess(res.data.message));

    //* 2. Get updated booking list again
    yield getBooking();
  } catch (err) {
    console.log("👹 err: ", err);
    yield put(deleteBookingFail(err.response.data.message));
  }
}

function* onCreateBookingStart() {
  yield takeLatest(BOOKING_TYPES.CREATE_BOOKING_START, createBooking);
}

function* onGetBookingStart() {
  yield takeLatest(BOOKING_TYPES.GET_BOOKING_START, getBooking);
}

function* onDeleteBookingStart() {
  yield takeLatest(BOOKING_TYPES.DELETE_BOOKING_START, deleteBooking);
}
export default function* bookingSaga() {
  yield all([
    call(onGetBookingStart),
    call(onCreateBookingStart),
    call(onDeleteBookingStart),
  ]);
}
