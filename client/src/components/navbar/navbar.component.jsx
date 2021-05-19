import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { logoutStart } from "../../redux/user/user.actions";

import { ReactComponent as RocketIcon } from "../../assets/icons/rocket-outline.svg";
import { ReactComponent as RocketIconFull } from "../../assets/icons/rocket-sharp.svg";
import { ReactComponent as PlanetIcon } from "../../assets/icons/planet-outline.svg";
import { ReactComponent as PlanetIconFull } from "../../assets/icons/planet-sharp.svg";
import { ReactComponent as DateIcon } from "../../assets/icons/calendar-outline.svg";
import { ReactComponent as DateIconFull } from "../../assets/icons/calendar-sharp.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/person-circle-outline.svg";

import "./navbar.styles.scss";

import CartPopup from "../cartPopup/cartPopup.component";

const NavBar = (props) => {
  const { hideNavbar, currentUser, logoutStart, cart } = props;

  const location = useLocation();
  const navRef = useRef();

  //* Dynamically revealing navbar according to pages
  useEffect(() => {
    // console.log("🌭 match:", match, "🍔 location:", location);

    // Homepage header
    if (location.pathname === "/" && !hideNavbar) return;

    const navDOM = navRef.current;
    navDOM.classList.add("navbar--fixed");

    // All pages except Homepage
    // if (location.pathname !== "/")
    //   navDOM.style.setProperty("position", "static");
  }, [hideNavbar, location]);

  const handleClickLogout = (e) => {
    e.preventDefault();

    console.log("🤧 clicked");
    logoutStart();
  };

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <Link to="/">SPACE Y</Link>
        </div>
        <ul className="navbar__links">
          <li className="link--planets">
            <Link to="/planets">planets</Link>
          </li>
          <li className="link--starships">
            <Link to="/starships">starships</Link>
          </li>
          {currentUser ? (
            <li className="link--login">
              <PersonIcon />
              <Link to="/account">{currentUser.username}</Link>
              <Link to="/users" onClick={handleClickLogout}>
                logout
              </Link>
              {/* <ion-icon name="rocket-outline"></ion-icon> */}
              {/* <ion-icon src={Rocket} size="large"></ion-icon> */}
            </li>
          ) : (
            <li className="link--login">
              <Link to="/users">LOGIN</Link>
            </li>
          )}
        </ul>
        <ul className="navbar__shop">
          {/* <Link to="/checkout"> */}
          <div className="navbar__icons">
            <span>JOURNEY</span>
            {!cart.planet ? <RocketIcon /> : <RocketIconFull />}
            {!cart.starship ? <PlanetIcon /> : <PlanetIconFull />}
            {!cart.departureDate || !cart.numOfPerson ? (
              <DateIcon />
            ) : (
              <DateIconFull />
            )}
          </div>
          {/* <RocketIcon /> */}
          {/* <PlanetIcon /> */}
          {/* <PlanetIconFull />
            <DateIcon /> */}
          {/* </Link> */}
          <CartPopup />
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hideNavbar: state.pages.hideNavbar,
  currentUser: state.users.currentUser,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  logoutStart: () => dispatch(logoutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
