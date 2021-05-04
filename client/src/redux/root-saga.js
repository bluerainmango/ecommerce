import { call, all } from "redux-saga/effects";

import { planetSaga } from "./planet/planet.sagas";

export default function* rootSaga() {
  yield all([call(planetSaga)]);
}
