import UserTypes from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserTypes.SET_CURRENT_USER,
  payload: user,
});

//* Sign in
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

//* Sign up
export const signupStart = (signupInfo) => ({
  type: UserTypes.SIGN_UP_START,
  payload: signupInfo,
});

export const signupSuccess = (user) => ({
  type: UserTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signupFail = (err) => ({
  type: UserTypes.SIGN_UP_FAIL,
  payload: err,
});

//* Forgot password
export const forgotPasswordStart = (signupInfo) => ({
  type: UserTypes.FORGOT_PASSWORD_START,
  payload: signupInfo,
});

export const forgotPasswordSuccess = (user) => ({
  type: UserTypes.FORGOT_PASSWORD_SUCCESS,
  payload: user,
});

export const forgotPasswordFail = (err) => ({
  type: UserTypes.FORGOT_PASSWORD_FAIL,
  payload: err,
});

export const clearError = (err) => ({
  type: UserTypes.CLEAR_ERROR,
  payload: err,
});

//* Log out
export const logoutStart = () => ({
  type: UserTypes.LOGOUT_START,
});

export const logoutSuccess = () => ({
  type: UserTypes.LOGOUT_SUCESS,
});

export const logoutFail = (err) => ({
  type: UserTypes.LOGOUT_FAIL,
  payload: err,
});
