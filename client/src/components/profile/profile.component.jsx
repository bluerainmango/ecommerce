import React, { useState } from "react";

import { connect } from "react-redux";

import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
import AlertBar from "../alertBar/alertBar.component";

import {
  updateMeStart,
  updateMeSuccess,
  updateMeFail,
  updatePasswordStart,
  updatePasswordSuccess,
  updatePasswordFail,
} from "../../redux/user/user.actions";

import "./profile.styles.scss";

const Profile = ({ user, updateMeStart, updateMeFail }) => {
  const [profileInfo, setProfileInfo] = useState({
    username: user.username,
    email: user.email,
  });

  const [passwordInfo, setPasswordInfo] = useState({
    confirmCurrentPassword: "",
    newPassword: "",
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
    // console.log(("🐈 e", e.target));

    if (e.target.id === "form--profile") {
      const { username, email } = profileInfo;
      const currentUsername = user.username;
      const currentEmail = user.email;

      const infoToUpdate = {};

      if (currentUsername !== username) infoToUpdate.username = username;
      if (currentEmail !== email) infoToUpdate.email = email;

      console.log(("😍 submitted", infoToUpdate));

      if (Object.keys(infoToUpdate).length === 0)
        return updateMeFail("Please provide new username or email to update.");

      updateMeStart(infoToUpdate);
    } else {
      updatePasswordStart(passwordInfo);
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
          <h2>Change Profile</h2>
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
          <h2>Change Password</h2>
          {/* <FormInput
            id="password"
            name="password"
            label="current password"
            value={passwordInfo.currentPassword}
            type="password"
            className="form-input"
            placeholder=" "
            required
            readOnly
            onChange={handleChange}
          /> */}
          <FormInput
            id="confirmPassword"
            name="confirmPassword"
            label="confirm current password"
            value={passwordInfo.confirmCurrentPassword}
            type="password"
            className="form-input"
            placeholder=" "
            required
            readOnly
            onChange={handleChange}
          />
          <FormInput
            id="newpassword"
            name="newpassword"
            label="new password"
            value={profileInfo.newPassword}
            type="password"
            className="form-input"
            placeholder=" "
            required
            readOnly
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
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
