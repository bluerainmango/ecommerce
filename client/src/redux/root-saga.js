import { call, all } from "redux-saga/effects";

import planetSaga from "./planet/planet.sagas";
import starshipSaga from "./starship/starship.sagas";
import userSaga from "./user/user.sagas";
import cartSaga from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([
    call(planetSaga),
    call(starshipSaga),
    call(userSaga),
    call(cartSaga),
  ]);
}
