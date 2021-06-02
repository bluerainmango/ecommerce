import axios from "axios";

import BOOKING_TYPES from "./booking.types";
import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  getBookingSuccess,
  getBookingFail,
  deleteBooking,
} from "./booking.action";

function* getBooking() {
  try {
    const res = yield axios(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/bookings`,
      { withCredentials: true }
    );
    console.log("🐤 res: ", res);
  } catch (err) {
    yield put(getBookingFail(err));
  }
}

function* onGetBookingStart() {
  yield takeLatest(BOOKING_TYPES.GET_BOOKING_START, getBooking);
}

export default function* bookingSaga() {
  yield all([call(onGetBookingStart)]);
}
