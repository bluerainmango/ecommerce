import axios from "axios";
import { takeLatest, call, all, put } from "redux-saga/effects";

import UserTypes from "./user.types";
import {
  signinSuccess,
  signinFail,
  signupSuccess,
  signupFail,
  forgotPasswordSuccess,
  forgotPasswordFail,
  logoutSuccess,
  logoutFail,
} from "./user.actions";

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

function* signUpWithEmail({ payload }) {
  try {
    const { username, email, password, passwordConfirm } = payload;

    const res = yield axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/signup`,
      {
        username,
        email,
        password,
        passwordConfirm,
      }
    );

    const user = res.data.data.user;
    console.log("🤡 new user:", user);

    yield put(signupSuccess(user));
  } catch (err) {
    yield put(signupFail(err));
  }
}

function* forgotPassword(payload) {
  try {
    const { email } = payload;

    const res = yield axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/forgotpassword`,
      {
        email,
      }
    );

    const result = res.data.data;
    console.log("🥶 forgot pwd:", result);

    yield put(forgotPasswordSuccess(result));
  } catch (err) {
    yield put(forgotPasswordFail(err));
  }
}

function* logout() {
  try {
    const res = yield axios(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/logout`
    );

    const result = res.data.data;
    console.log(("🥵 logout:", result));

    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFail());
  }
}

function* onEmailSignInStart() {
  yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onSignUpStart() {
  yield takeLatest(UserTypes.SIGN_UP_START, signUpWithEmail);
}

function* onForgotPasswordStart() {
  yield takeLatest(UserTypes.FORGOT_PASSWORD_START, forgotPassword);
}

function* onLogoutStart() {
  yield takeLatest(UserTypes.LOGOUT_START, logout);
}

export default function* userSaga() {
  yield all([
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onForgotPasswordStart),
    call(onLogoutStart),
  ]);
}
