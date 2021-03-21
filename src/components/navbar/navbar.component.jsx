import React from "react";
import "./navbar.styles.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>SPACE Y</div>
      <ul className="navbar__links">
        <li className="link--moon">MOON</li>
        <li className="link--mars">MARS</li>
        <li className="link--vinus">VINUS</li>
      </ul>
      <ul className="navbar__user">
        <li className="link--login">LOGIN</li>
        {/* <svg className="icon--shopping"><use xlink:href="#"></use></svg> */}
      </ul>
    </div>
  );
};

export default NavBar;
