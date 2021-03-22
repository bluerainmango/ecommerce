import React from "react";
import "./navbar.styles.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo"> SPACE Y</div>
      <ul className="navbar__links">
        <li className="link--moon">
          <a href="/moon">MOON</a>
        </li>
        <li className="link--mars">
          <a href="/mars">MARS</a>
        </li>
        <li className="link--vinus">
          <a href="/vinus">VINUS</a>
        </li>
      </ul>
      <ul className="navbar__user">
        <li className="link--login">LOGIN</li>
        {/* <svg className="icon--shopping"><use xlink:href="#"></use></svg> */}
      </ul>
    </div>
  );
};

export default NavBar;
