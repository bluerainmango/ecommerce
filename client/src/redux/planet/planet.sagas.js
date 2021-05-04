import axios from "axios";
import { takeLatest, call, all, put } from "redux-saga/effects";

import PlanetTypes from "./planet.types";
import {
  fetchPlanetsStart,
  fetchPlanetsSuccess,
  fetchPlanetsFail,
} from "./planet.actions";

function* fetchPlanetsAsync() {
  try {
    yield console.log("🔥 fetch planets async is fired!");

    const planets = yield axios(`http://localhost:4000/api/v1/planets`);
    console.log("🧚🏼‍♀️ planets:", planets);

    // yield put(fetchPlanetsSuccess(planets));
  } catch (err) {
    console.log("🥸 fetch planets fail...:", err);
    yield put(fetchPlanetsFail());
  }
}

function* onFetchPlanetsStart() {
  yield takeLatest(PlanetTypes.FETCH_PLANETS_START, fetchPlanetsAsync);
}

export function* planetSaga() {
  yield all([call(onFetchPlanetsStart)]);
}
