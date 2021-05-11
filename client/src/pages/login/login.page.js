import React from "react";
import { useLocation } from "react-router-dom";
import Signup from "../../components/signup/signup.component";
import Signin from "../../components/signin/signin.component";
import ForgotPassword from "../../components/forgotPassword/forgotPassword.component";

import "./login.styles.scss";

const Login = () => {
  const { pathname } = useLocation();
  console.log("🎃 pathname:", pathname);

  return (
    <div className="loginPage">
      {pathname === "/users/signup" ? (
        <Signup />
      ) : pathname === "/users/forgotpassword" ? (
        <ForgotPassword />
      ) : (
        <Signin />
      )}
    </div>
  );
};

export default Login;
