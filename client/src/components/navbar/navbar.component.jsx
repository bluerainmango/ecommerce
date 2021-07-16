import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { logoutStart } from "../../redux/user/user.actions";
import { toggleCartPopup } from "../../redux/cart/cart.action";

import { ReactComponent as RocketIcon } from "../../assets/icons/rocket-outline.svg";
import { ReactComponent as RocketIconFill } from "../../assets/icons/rocket-sharp.svg";
import { ReactComponent as PlanetIcon } from "../../assets/icons/planet-outline.svg";
import { ReactComponent as PlanetIconFill } from "../../assets/icons/planet-sharp.svg";
import { ReactComponent as DateIcon } from "../../assets/icons/calendar-outline.svg";
import { ReactComponent as DateIconFill } from "../../assets/icons/calendar-sharp.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/person-circle-outline.svg";
import logo from "../../assets/logo-3d.png";

import "./navbar.styles.scss";

import CartPopup from "../cartPopup/cartPopup.component";

const NavBar = (props) => {
  const { hideNavbar, currentUser, logoutStart, cart, toggleCartPopup } = props;

  const location = useLocation();
  const navRef = useRef();
  const burgerRef = useRef();

  const [fileName, setFileName] = useState("");

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

    // console.log("🤧 clicked");
    logoutStart();
  };

  const handleClickIcons = (e) => {
    e.preventDefault();
    console.log("icons clicked");

    toggleCartPopup();
    // console.log("🐸 toggle", cart.toggleCartPopup);
  };

  //* When menu is clicked, close hamburger menu background
  const handleClickLinks = (e) => {
    e.preventDefault();
    // console.log("hamburger menu clicked", burgerRef.current.checked);

    if (burgerRef.current.checked) {
      burgerRef.current.checked = false; // purple bg
      navRef.current.style.height = ""; // blur bg
    }
  };

  //* To bring user's photo from backend server not S3
  useEffect(() => {
    if (!currentUser) return;

    const userPhotoName = currentUser.photo.slice(
      currentUser.photo.indexOf("user")
    );

    setFileName(userPhotoName);

    // console.log("😡", fileName);
  }, [currentUser]);

  // useEffect(() => {
  //   console.log("👻 checked:", burgerRef.current.checked);
  //   if (burgerRef.current.checked === undefined) return;

  //   if (burgerRef.current.checked) wrapperRef.current.styles.height = "100%";
  // }, [burgerRef.current.checked]);

  //* When hamburger menu is unfold, cover screen with blurred bg
  const handleCheckboxChange = () => {
    // console.log("👽", navRef.current.style.height);

    burgerRef.current.checked
      ? (navRef.current.style.height = "100%")
      : (navRef.current.style.height = "");
  };

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
            <div className="logo--sm" />
          </Link>
        </div>

        <input
          ref={burgerRef}
          type="checkbox"
          className="navbar__checkbox"
          id="navbar-toggle"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="navbar-toggle" className="navbar__button">
          <span className="navbar__icon">&nbsp;</span>
        </label>
        <div className="navbar__background">&nbsp;</div>

        <ul onClick={handleClickLinks} className="navbar__links">
          <li className="link--planets">
            <Link to="/planets">planets</Link>
          </li>
          <li className="link--starships">
            <Link to="/starships">starships</Link>
          </li>
          {currentUser ? (
            <li className="link--login">
              <Link to="/account#profile">
                {currentUser.photo ? (
                  <img
                    className="navbar__user-photo"
                    // src={`/users/${currentUser.photo}`}
                    // src={currentUser.photo}
                    src={`/users/${fileName}` || currentUser.photo}
                    alt="user"
                  />
                ) : (
                  <PersonIcon />
                )}
                <span>{currentUser.username}</span>
              </Link>
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
          <div className="navbar__icons" onClick={handleClickIcons}>
            {/* <span>JOURNEY</span> */}
            {!cart.planet ? <PlanetIcon /> : <PlanetIconFill />}
            {!cart.starship ? <RocketIcon /> : <RocketIconFill />}
            {!cart.departureDate || !cart.numOfPerson ? (
              <DateIcon />
            ) : (
              <DateIconFill />
            )}
          </div>
          {/* <RocketIcon /> */}
          {/* <PlanetIcon /> */}
          {/* <PlanetIconFill />
            <DateIcon /> */}
          {/* </Link> */}
          {cart.toggleCartPopup && <CartPopup />}
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
  toggleCartPopup: () => dispatch(toggleCartPopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
