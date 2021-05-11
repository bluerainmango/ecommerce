import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button.component";

import FormInput from "../formInput/formInput.component";

import "./forgotPassword.styles.scss";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  return (
    <div className="form__container">
      <h2 className="form__title">Forgot Password</h2>
      <span className="form__sub">
        Submit your email that linked to your account. <br />
        Email to reset password will be sent.
      </span>
      <form className="form--signin" onSubmit={handleSubmit}>
        <FormInput
          id="email"
          name="email"
          label="email"
          type="email"
          className="form-input"
          value={email}
          // required
          onChange={handleChange}
        />

        <Button
          className="form__btn"
          type="submit"
          text={["Submit"]}
          style={{
            "--bg-color": "rgb(12, 12, 12)",
            "--font-color-hover": "black",
          }}
        />
        <h3 className="form__redirect">
          <Link to="/users/signup">
            <span>Sign up</span>
          </Link>
          {" | "}
          <Link to="/users">
            <span>Sign in</span>
          </Link>
        </h3>
      </form>
    </div>
  );
};

export default ForgotPassword;
