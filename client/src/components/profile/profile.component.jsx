import React, { useState } from "react";

import { connect } from "react-redux";

import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
import AlertBar from "../alertBar/alertBar.component";

import { ReactComponent as PersonIcon } from "../../assets/icons/person-circle-outline.svg";

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
    photo,
    updateMeStart,
    updateMeFail,
    updatePasswordFail,
    updatePasswordStart,
  } = props;

  const [profileInfo, setProfileInfo] = useState({
    username: user.username,
    email: user.email,
    // photo: photo,
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
    // console.log("🐈 e", e.target.elements);

    if (e.target.id === "form--profile") {
      //* Get current info
      const { username, email } = profileInfo;
      const currentUsername = user.username;
      const currentEmail = user.email;
      const newPhoto = e.target.elements.photo.files[0];
      console.log("🐈 new photo", newPhoto);

      if (currentUsername === username && currentEmail === email && !newPhoto)
        return updateMeFail(
          "Please provide new username or email or photo to update."
        );

      //* Create form data to send
      const form = new FormData();
      if (currentUsername !== username) form.set("username", username);
      if (currentEmail !== email) form.set("email", email);
      if (newPhoto) {
        form.set("photo", newPhoto);
      }

      // for (let [name, value] of form) {
      //   console.log(`${name} = ${value}`); // key1 = value1, then key2 = value2
      // }

      updateMeStart(form);
    } else {
      const { currentPassword, newPassword, newPasswordConfirm } = passwordInfo;

      // console.log("🐈 passwordInfo", passwordInfo);

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
          <div className="profile__photo">
            {photo ? (
              <img
                className="profile__photo-preview"
                // src={`/users/${photo}`}
                src={photo}
                alt="user profile"
              />
            ) : (
              <PersonIcon />
            )}

            <input
              type="file"
              id="photo"
              name="photo"
              className="photoUploader"
              accept="image/*"
            />
          </div>

          <FormInput
            id="username"
            name="username"
            label="Username"
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
            label="Email"
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
                text: "Update Profile",
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
            label="Current Password"
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
            label="New Password"
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
            label="Confirm New Password"
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
                text: "Change Password",
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
  photo: state.users.currentUser.photo,
});

const mapDispatchToProps = (dispatch) => ({
  updateMeStart: (profileInfo) => dispatch(updateMeStart(profileInfo)),
  updateMeFail: (errMessage) => dispatch(updateMeFail(errMessage)),
  updatePasswordStart: (passwordInfo) =>
    dispatch(updatePasswordStart(passwordInfo)),
  updatePasswordFail: (errMessage) => dispatch(updatePasswordFail(errMessage)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
