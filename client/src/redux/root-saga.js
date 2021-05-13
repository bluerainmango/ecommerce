import { call, all } from "redux-saga/effects";

import planetSaga from "./planet/planet.sagas";
import starshipSaga from "./starship/starship.sagas";
import userSaga from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(planetSaga), call(starshipSaga), call(userSaga)]);
}
