import axios from "axios";
import { takeLatest, call, all, put } from "redux-saga/effects";

import PlanetTypes from "./planet.types";
import { fetchPlanetsSuccess, fetchPlanetsFail } from "./planet.actions";

import { getSlides } from "../slide/slide.actions";

function* fetchPlanetsAsync() {
  try {
    yield console.log("🔥 fetch planets async is fired!");

    const planets = yield axios(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/planets`
    );

    console.log("🧚🏼‍♀️ planets:", planets);

    yield put(fetchPlanetsSuccess(planets.data.data));
    yield put(getSlides(planets.data.data));
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
