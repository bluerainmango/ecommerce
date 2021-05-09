import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button.component";

import FormInput from "../formInput/formInput.component";

import "./signin.styles.scss";

const Signin = () => {
  const [userSigninInfo, setUserSigninInfo] = useState({
    userName: "",
    password: "",
  });

  const { userName, password } = userSigninInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserSigninInfo({
      ...userSigninInfo,
      [name]: value,
    });
    console.log(userSigninInfo);
  };

  return (
    <div className="form__container">
      <h2 className="form__title">Sign in</h2>
      <span className="form__sub">Sign in with your email and password.</span>
      <h3 className="form__redirect">
        New to Space Y? Create an account.{" "}
        <Link to="/users/signup">
          <span>Sign up</span>
        </Link>
      </h3>
      <form className="form--signin" onSubmit={handleSubmit}>
        <FormInput
          id="userName"
          name="userName"
          label="userName"
          type="text"
          className="form-input"
          value={userName}
          maxLength="10"
          title="Please input less than 10 characters"
          // required
          // autoFocus
          onChange={handleChange}
        />

        <FormInput
          id="password"
          name="password"
          label="password"
          value={password}
          type="password"
          className="form-input"
          // required
          onChange={handleChange}
        />

        <Button
          className="form__btn"
          type="submit"
          text={["SIGN IN"]}
          style={{
            "--bg-color": "rgb(12, 12, 12)",
            "--font-color-hover": "black",
          }}
        />
      </form>
    </div>
  );
};

export default Signin;
