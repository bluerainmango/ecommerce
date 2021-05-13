import UserTypes from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserTypes.SET_CURRENT_USER,
  payload: user,
});

export const emailSigninStart = (usernameAndPassword) => ({
  type: UserTypes.EMAIL_SIGN_IN_START,
  payload: usernameAndPassword,
});

export const signinSuccess = (user) => ({
  type: UserTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signinFail = (err) => ({
  type: UserTypes.SIGN_IN_FAIL,
  payload: err,
});
