import React, { useState } from "react";

import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";

import "./profile.styles.scss";

const Profile = ({ user }) => {
  const [profileInfo, setProfileInfo] = useState({
    username: user.username,
    email: user.email,
    password: user.password,
    newPassword: "",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const handleSubmit = () => {};

  return (
    <div className="profile">
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
          <FormInput
            id="password"
            name="password"
            label="current password"
            value={profileInfo.password}
            type="password"
            className="form-input"
            placeholder=" "
            required
            readOnly
            onChange={handleChange}
          />
          <FormInput
            id="confirmPassword"
            name="confirmPassword"
            label="confirm current password"
            value={profileInfo.newPassword}
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

export default Profile;
