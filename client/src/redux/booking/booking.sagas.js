import axios from "axios";

import BOOKING_TYPES from "./booking.types";
import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  getBookingSuccess,
  getBookingFail,
  deleteBooking,
  createBookingFail,
  createBookingSuccess,
} from "./booking.action";

function* getBooking() {
  try {
    const res = yield axios(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/bookings/me`,
      { withCredentials: true }
    );
    console.log("🐤 my booking arr: ", res.data.data);
  } catch (err) {
    yield put(getBookingFail(err));
  }
}

function* createBooking({ payload }) {
  try {
    // console.log("🤓 querylink: ", payload);

    const res = yield axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/bookings${payload}`,
      null,
      { withCredentials: true }
    );

    console.log("🤓 res from creatingBooking: ", res);

    yield put(createBookingSuccess());
  } catch (err) {
    console.log("👹 err: ", err);
    yield put(createBookingFail(err));
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
