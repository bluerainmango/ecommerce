import React from "react";

import "./signin.styles.scss";

const Signin = () => {
  const handleSubmit = () => {};

  return (
    <div className="form-container">
      <form className="form--signin" onSubmit={handleSubmit}>
        <input className="form-input" />
        <label>name</label>
        <input className="form-input" />
        <label>email</label>
        <input className="form-input" />
        <label>password</label>
        <input className="form-input" />
        <label>confirm password</label>
      </form>
    </div>
  );
};

export default Signin;
