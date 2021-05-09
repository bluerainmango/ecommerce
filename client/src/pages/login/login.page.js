import React from "react";
import { useLocation } from "react-router-dom";
import Signup from "../../components/signup/signup.component";
import Signin from "../../components/signin/signin.component";

import "./login.styles.scss";

const Login = () => {
  const { pathname } = useLocation();
  console.log("🎃 pathname:", pathname);

  return (
    <div className="loginPage">
      {pathname === "/users/signup" ? <Signup /> : <Signin />}
    </div>
  );
};

export default Login;
