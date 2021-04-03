import React, { useEffect, useRef } from "react";
import "./navbar.styles.scss";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { isPassedHomeBanner } = props;

  const navRef = useRef();

  useEffect(() => {
    if (!isPassedHomeBanner) return;

    const navDOM = navRef.current;

    console.log("🥝 isPassedHomeBanner: ", isPassedHomeBanner, navDOM);
    navDOM.classList.add("navbar--fixed");
  }, [isPassedHomeBanner]);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo"> SPACE Y</div>
        <ul className="navbar__links">
          <li className="link--moon">
            <Link to="/planets">planets</Link>
          </li>
          <li className="link--mars">
            <Link to="/starships">starships</Link>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  isPassedHomeBanner: state.pages.isPassedHomeBanner,
});

export default connect(mapStateToProps)(NavBar);
