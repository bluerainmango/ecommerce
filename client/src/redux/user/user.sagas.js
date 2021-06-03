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
  getMeFail,
  getMeSuccess,
  updateMeSuccess,
  updateMeFail,
  updatePasswordSuccess,
  updatePasswordFail,
} from "./user.actions";

function* signInWithEmail({ payload: { username, password } }) {
  try {
    const res = yield axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/signin`,
      {
        username,
        password,
      },
      { withCredentials: true }
    );

    const user = res.data.data.user;
    // console.log("🤠 user:", user);

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
      },
      { withCredentials: true }
    );

    const user = res.data.data.user;
    // console.log("🤡 new user:", user);

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
    // console.log("🥶 forgot pwd:", result);

    yield put(forgotPasswordSuccess(result));
  } catch (err) {
    yield put(forgotPasswordFail(err));
  }
}

//! To delete cookie, don't forget to add widthCrendentials option as well.
function* logout() {
  try {
    yield axios(`${process.env.REACT_APP_API_BASE_URL}/api/v1/users/logout`, {
      withCredentials: true,
    });

    // const result = res.data.data;
    // console.log(("🥵 logout:", result));

    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFail());
  }
}

function* getMe() {
  try {
    // console.log("🦧 get me start triggered");

    const res = yield axios(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/me`,
      { withCredentials: true }
    );

    const user = res.data.data;
    // console.log("🥵 get me:", user);

    yield put(getMeSuccess(user));
  } catch (err) {
    yield put(getMeFail());
  }
}

function* updateMe({ payload }) {
  // console.log("🐙 payload:", payload);

  try {
    const res = yield axios.patch(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/me`,
      payload,
      { withCredentials: true }
    );

    const messageAndUserObj = res.data.data;
    // console.log("🤐 update me:", messageAndUserObj);

    yield put(updateMeSuccess(messageAndUserObj));
  } catch (err) {
    yield put(updateMeFail(err));
  }
}

function* updatePassword({ payload }) {
  try {
    yield axios.patch(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/updatepassword`,
      payload,
      { withCredentials: true }
    );

    // console.log("🤠 updated. message:", res.data.message);

    yield put(updatePasswordSuccess("Successfully changed your password."));
  } catch (err) {
    yield put(updatePasswordFail(err));
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

function* onGetMeStart() {
  yield takeLatest(UserTypes.GET_ME_START, getMe);
}

function* onUpdateMeStart() {
  yield takeLatest(UserTypes.UPDATE_ME_START, updateMe);
}

function* onUpdatePasswordStart() {
  yield takeLatest(UserTypes.UPDATE_PASSWORD_START, updatePassword);
}

export default function* userSaga() {
  yield all([
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onForgotPasswordStart),
    call(onLogoutStart),
    call(onGetMeStart),
    call(onUpdateMeStart),
    call(onUpdatePasswordStart),
  ]);
}
