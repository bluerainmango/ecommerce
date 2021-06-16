import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
import AlertBar from "../alertBar/alertBar.component";

import { deleteUserStart } from "../../redux/user/user.actions";

import "./setting.styles.scss";

const Setting = ({ deleteUserStart }) => {
  const [settingInfo, setSettingInfo] = useState({
    currentPassword: "",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    setSettingInfo({ ...settingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("🐦 sumitted pwd: ", settingInfo.currentPassword);
    deleteUserStart(settingInfo.currentPassword);
  };

  return (
    <div className="setting">
      <AlertBar />
      <div className="setting__container">
        <form
          id="form--setting"
          className="form--setting"
          onSubmit={handleSubmit}
        >
          <h2 className="setting__title">Delete Account</h2>
          <h3 className="setting__description">
            Delete all your registered information from our database. Enter your
            current password to proceed.
          </h3>
          <FormInput
            id="confirmCurrentPassword"
            name="currentPassword"
            label="Current Password"
            value={settingInfo.currentPassword}
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
            form="form--setting"
            content={[
              {
                text: "Delete",
                type: "submit",
                // linkTo: "/",
              },
            ]}
            style={{
              // "--bg-color": "red",
              "--font-color-hover": "black",
            }}
          />
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteUserStart: (password) => dispatch(deleteUserStart(password)),
});

export default connect(null, mapDispatchToProps)(Setting);
