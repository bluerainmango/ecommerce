import axios from "axios";
import { takeLatest, call, all, put } from "redux-saga/effects";

import UserTypes from "./user.types";
import { signinSuccess, signinFail } from "./user.actions";

function* signInWithEmail({ payload: { username, password } }) {
  try {
    const res = yield axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/signin`,
      {
        username,
        password,
      }
    );

    const user = res.data.data.user;
    console.log("🤠 user:", user);

    yield put(signinSuccess(user));
  } catch (err) {
    yield put(signinFail(err));
  }
}

function* onEmailSignInStart() {
  yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export default function* userSaga() {
  yield all([call(onEmailSignInStart)]);
}
