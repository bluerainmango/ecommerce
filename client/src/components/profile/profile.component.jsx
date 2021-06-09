import React, { useState } from "react";

import { connect } from "react-redux";

import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
import AlertBar from "../alertBar/alertBar.component";

import {
  updateMeStart,
  updateMeFail,
  updatePasswordStart,
  updatePasswordFail,
} from "../../redux/user/user.actions";

import "./profile.styles.scss";

const Profile = (props) => {
  const {
    user,
    updateMeStart,
    updateMeFail,
    updatePasswordFail,
    updatePasswordStart,
  } = props;

  const [profileInfo, setProfileInfo] = useState({
    username: user.username,
    email: user.email,
  });

  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    if (name === "username" || name === "email") {
      setProfileInfo({ ...profileInfo, [name]: value });
    } else {
      setPasswordInfo({ ...passwordInfo, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("🐈 e", e.target);

    if (e.target.id === "form--profile") {
      const { username, email } = profileInfo;
      const currentUsername = user.username;
      const currentEmail = user.email;

      const infoToUpdate = {};

      if (currentUsername !== username) infoToUpdate.username = username;
      if (currentEmail !== email) infoToUpdate.email = email;

      console.log("😍 submitted", infoToUpdate);

      if (Object.keys(infoToUpdate).length === 0)
        return updateMeFail("Please provide new username or email to update.");

      updateMeStart(infoToUpdate);
    } else {
      const { currentPassword, newPassword, newPasswordConfirm } = passwordInfo;

      console.log("🐈 passwordInfo", passwordInfo);

      if (currentPassword === newPassword)
        return updatePasswordFail(
          "The typed new password is the same as current password."
        );

      if (newPassword !== newPasswordConfirm)
        return updatePasswordFail("Please confirm the correct new password.");

      updatePasswordStart(passwordInfo);
      setPasswordInfo({
        currentPassword: "",
        newPassword: "",
        newPasswordConfirm: "",
      });
    }
  };

  return (
    <div className="profile">
      <AlertBar />
      <div className="profile__container">
        <form
          id="form--profile"
          className="form--profile"
          onSubmit={handleSubmit}
        >
          <h2 className="account__title">Change Profile</h2>
          <FormInput
            id="username"
            name="username"
            label="username"
            type="text"
            className="form-input"
            value={profileInfo.username}
            maxLength="15"
            placeholder=" "
            required
            // autoFocus
            onChange={handleChange}
          />

          <FormInput
            id="email"
            name="email"
            label="email"
            type="text"
            className="form-input"
            value={profileInfo.email}
            maxLength="15"
            placeholder=" "
            required
            // autoFocus
            onChange={handleChange}
          />

          <Button
            className="form__btn"
            form="form--profile"
            content={[
              {
                text: "Update",
                type: "submit",
                // linkTo: "/",
              },
            ]}
            style={{
              "--bg-color": "rgb(12, 12, 12)",
              "--font-color-hover": "black",
            }}
          />
        </form>
        <form
          id="form--password"
          className="form--password"
          onSubmit={handleSubmit}
        >
          <h2 className="account__title">Change Password</h2>
          <FormInput
            id="confirmCurrentPassword"
            name="currentPassword"
            label="current password"
            value={passwordInfo.currentPassword}
            type="password"
            className="form-input"
            placeholder=" "
            minLength="3"
            maxLength="15"
            required
            onChange={handleChange}
          />
          <FormInput
            id="newPassword"
            name="newPassword"
            label="new password"
            value={passwordInfo.newPassword}
            type="password"
            className="form-input"
            placeholder=" "
            minLength="3"
            maxLength="15"
            required
            onChange={handleChange}
          />
          <FormInput
            id="confirmNewPassword"
            name="newPasswordConfirm"
            label="confirm new password"
            value={passwordInfo.newPasswordConfirm}
            type="password"
            className="form-input"
            placeholder=" "
            minLength="3"
            maxLength="15"
            required
            onChange={handleChange}
          />
          <Button
            className="form__btn"
            form="form--profile"
            content={[
              {
                text: "Update",
                type: "submit",
                // linkTo: "/",
              },
            ]}
            style={{
              "--bg-color": "rgb(12, 12, 12)",
              "--font-color-hover": "black",
            }}
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateMeStart: (profileInfo) => dispatch(updateMeStart(profileInfo)),
  updateMeFail: (errMessage) => dispatch(updateMeFail(errMessage)),
  updatePasswordStart: (passwordInfo) =>
    dispatch(updatePasswordStart(passwordInfo)),
  updatePasswordFail: (errMessage) => dispatch(updatePasswordFail(errMessage)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
