import React, { useEffect, useRef } from "react";

import { connect } from "react-redux";

import { Link, useRouteMatch } from "react-router-dom";

import "./navbar.styles.scss";

const NavBar = (props) => {
  const { hideNavbar } = props;
  const match = useRouteMatch();

  const navRef = useRef();

  useEffect(() => {
    console.log("match", match.url);

    // Homepage
    if (match.url === "/" && !hideNavbar) return;

    // if (hideNavbar) return;

    const navDOM = navRef.current;
    navDOM.classList.add("navbar--fixed");

    console.log("🥝 hideNavbar: ", hideNavbar, navDOM);
  }, [hideNavbar, match.url]);

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
  hideNavbar: state.pages.hideNavbar,
});

export default connect(mapStateToProps)(NavBar);
