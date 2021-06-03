import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import Button from "../button/button.component";
import AlertBar from "../alertBar/alertBar.component";
import FormInput from "../formInput/formInput.component";

import { signupStart } from "../../redux/user/user.actions";

import "./signup.styles.scss";

const Signup = ({ signupStart, currentUser }) => {
  const [userSignupInfo, setUserSignupInfo] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const history = useHistory();

  const { username, email, password, passwordConfirm } = userSignupInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    signupStart(userSignupInfo);

    //* if suceeded in login, redirect to homepage
    if (currentUser) history.push("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserSignupInfo({
      ...userSignupInfo,
      [name]: value,
    });
  };

  // throw new Error("made error");

  return (
    <div className="form__container">
      <AlertBar />
      <h2 className="form__title">Sign up</h2>
      <span className="form__sub">Sign up with your email and password.</span>

      <form className="form--signup" onSubmit={handleSubmit}>
        <FormInput
          id="username"
          name="username"
          label="username"
          type="text"
          className="form-input"
          value={username}
          maxLength="15"
          required
          // autoFocus
          onChange={handleChange}
        />

        <FormInput
          id="email"
          name="email"
          label="email"
          type="email"
          className="form-input"
          value={email}
          required
          onChange={handleChange}
        />

        <FormInput
          id="password"
          name="password"
          label="password"
          value={password}
          type="password"
          className="form-input"
          required
          minLength="3"
          maxLength="10"
          onChange={handleChange}
        />

        <FormInput
          id="passwordConfirm"
          name="passwordConfirm"
          label="confirm password"
          value={passwordConfirm}
          type="password"
          className="form-input"
          required
          minLength="3"
          maxLength="10"
          onChange={handleChange}
        />

        <Button
          type="submit"
          content={[
            {
              text: "Sign up",
              type: "submit",
              // linkTo: "/",
            },
          ]}
          style={{
            "--bg-color": "rgb(12, 12, 12)",
            "--font-color-hover": "black",
          }}
        />
        <h3 className="form__redirect">
          <Link to="/users">
            <span>Sign in</span>
          </Link>
          {" | "}
          <Link to="/users/forgotpassword">
            <span>forgot password</span>
          </Link>
        </h3>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signupStart: (signupInfo) => dispatch(signupStart(signupInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
