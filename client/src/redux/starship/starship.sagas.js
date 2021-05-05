import axios from "axios";
import { takeLatest, call, all, put } from "redux-saga/effects";

import StarshipTypes from "./starship.types";
import { fetchStarshipsSuccess, fetchStarshipsFail } from "./starship.actions";

function* fetchStarshipsAsync() {
  try {
    const res = yield axios(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/starships`
    );

    const starships = res.data.data;
    console.log("👻 starships:", starships);

    yield put(fetchStarshipsSuccess(starships));
  } catch (err) {
    yield put(fetchStarshipsFail(err));
  }
}

function* onFetchStarshipsStart() {
  yield takeLatest(StarshipTypes.FETCH_STARSHIPS_START, fetchStarshipsAsync);
}

export default function* starshipSaga() {
  yield all([call(onFetchStarshipsStart)]);
}
