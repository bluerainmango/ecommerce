import React from "react";
import { useLocation } from "react-router-dom";
import Signup from "../../components/signup/signup.component";
import Signin from "../../components/signin/signin.component";
import ForgotPassword from "../../components/forgotPassword/forgotPassword.component";

// import Popup from "../../components/popup/popup.component";
// import AlertBar from "../../components/alertBar/alertBar.component";

import "./login.styles.scss";

const Login = () => {
  const { pathname } = useLocation();
  console.log("🎃 pathname:", pathname);

  return (
    <div className="loginPage">
      {/* <AlertBar /> */}
      {/* <Popup text={"password and username is not valid and blar blah."} /> */}
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
