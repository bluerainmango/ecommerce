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

export const signupSuccess = (result) => ({
  type: UserTypes.SIGN_UP_SUCCESS,
  payload: result,
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

export const clearError = () => ({
  type: UserTypes.CLEAR_ERROR,
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

//! Get me
export const getMeStart = () => ({
  type: UserTypes.GET_ME_START,
});
export const getMeSuccess = (user) => ({
  type: UserTypes.GET_ME_SUCCESS,
  payload: user,
});
export const getMeFail = (err) => ({
  type: UserTypes.GET_ME_FAIL,
  payload: err,
});

//! Update me
export const updateMeStart = (usernameAndEmail) => ({
  type: UserTypes.UPDATE_ME_START,
  payload: usernameAndEmail,
});
export const updateMeSuccess = (userAndResult) => ({
  type: UserTypes.UPDATE_ME_SUCCESS,
  payload: userAndResult,
});
export const updateMeFail = (err) => ({
  type: UserTypes.UPDATE_ME_FAIL,
  payload: err,
});

//! Update password
export const updatePasswordStart = (newPasswordInfo) => ({
  type: UserTypes.UPDATE_PASSWORD_START,
  payload: newPasswordInfo,
});
export const updatePasswordSuccess = (message) => ({
  type: UserTypes.UPDATE_PASSWORD_SUCCESS,
  payload: message,
});
export const updatePasswordFail = (err) => ({
  type: UserTypes.UPDATE_PASSWORD_FAIL,
  payload: err,
});

//! Delete user
export const deleteUserStart = (password) => ({
  type: UserTypes.DELETE_USER_START,
  payload: password,
});
export const deleteUserSuccess = (successMessage) => ({
  type: UserTypes.DELETE_USER_SUCCESS,
  payload: successMessage,
});
export const deleteUserFail = (errorMessage) => ({
  type: UserTypes.DELETE_USER_FAIL,
  payload: errorMessage,
});
