import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import {
  addPlanet,
  addStarship,
  removePlanet,
  removeStarship,
  toggleCartPopup,
  checkoutSessionStart,
} from "../../redux/cart/cart.action";
import "./button.styles.scss";

const Button = (props) => {
  const { content, style, cart } = props;
  const [alert, setAlert] = useState("");

  const history = useHistory();

  // const { pathname } = useLocation();
  // console.log("🦊 pathname", pathname);

  const delayedTogglePopup = () => {
    setTimeout(() => {
      props.toggleCartPopup();
    }, 1500);
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    const { planet, starship, totalPrice, numOfPerson, departureDate } = cart;

    const dDateArr = departureDate?.split("-");
    const DepartureTimeStamp = new Date(
      dDateArr[0] * 1,
      dDateArr[1] * 1 - 1, // month starts from 0
      dDateArr[2] * 1
    ).getTime(); // yyyy-mm-dd => new Date(yyyy,mm,dd), then get a timestamp of it

    // const DepartureTimeStamp = new Date(
    //   `${dDateArr[1]}-${dDateArr[2]}-${dDateArr[0]}`
    // ).getTime(); // yyyy-mm-dd => mm-dd-yyyy, then get timestamp of it

    const maxDateTimeStamp = Date.now() + 3600 * 1000 * 24 * 60; // 60 days

    //! Validate input
    if (!planet || !starship) {
      return setAlert("Please add planet and starship.");
    }

    console.log(
      "💀 departuredate:",
      departureDate,
      dDateArr,
      "dDate:",
      new Date(DepartureTimeStamp),
      "max:",
      maxDateTimeStamp,
      "now:",
      Date.now(),
      DepartureTimeStamp > Date.now(),
      Date.now() - DepartureTimeStamp,
      DepartureTimeStamp <= maxDateTimeStamp
    );

    // console.log(
    //   "deparetureTimeStamp:",
    //   DepartureTimeStamp,
    //   new Date(departureDate),
    //   departureDate
    //   // departureDate.getTime()
    // );
    // console.log("date.now():", Date.now());
    // console.log("reserved - now:", DepartureTimeStamp <= Date.now());

    // if (
    //   !departureDate ||
    //   DepartureTimeStamp <= Date.now() ||
    //   DepartureTimeStamp > maxDateTimeStamp
    // )

    if (numOfPerson < 1) return setAlert("Please add one travler at least.");

    if (
      !departureDate ||
      DepartureTimeStamp <= Date.now() ||
      DepartureTimeStamp > maxDateTimeStamp
    )
      return setAlert(
        `Please select valid departure date.${departureDate},
          ${dDateArr},
          ${DepartureTimeStamp},
          ${maxDateTimeStamp},
          ${DepartureTimeStamp > Date.now()},
          ${DepartureTimeStamp <= maxDateTimeStamp}
        `
      );

    // param with cart checkout info needed
    props.checkoutSessionStart({
      planet,
      starship,
      totalPrice,
      numOfPerson,
      departureDate,
    });
  };

  const handleClick = (el) => {
    // console.log("🐳");

    return (e) => {
      e.preventDefault();

      if (props.closeCartPopup && props.popupIsOpened) {
        // console.log("🐳", props.closeCartPopup, props.popupIsOpened);

        props.toggleCartPopup();
      }

      switch (el.type) {
        case "addPlanet":
          props.addPlanet(el.itemToDispatch);
          delayedTogglePopup();
          return;

        case "addStarship":
          props.addStarship(el.itemToDispatch);
          delayedTogglePopup();
          return;

        case "removePlanet":
          return props.removePlanet();

        case "removeStarship":
          return props.removeStarship();

        case "link":
          return history.push(el.linkTo);

        default:
          return;
      }
    };
  };

  return (
    <div className="btn-container">
      {content?.map((el) => (
        <button
          type={el.type}
          className={el.type === "link" ? "btn" : "btn btn--action"}
          style={style}
          // form={el.form}
          key={`btn--${
            el.type === "link" ? el.linkTo : el.itemToDispatch?.slug
          }`}
          onClick={
            el.type === "checkout"
              ? handleCheckout
              : el.type === "submit"
              ? undefined
              : handleClick(el)
          }
        >
          <span>{el.text}</span>
          <div className="btn-anim" />
        </button>
      ))}
      {alert && <div className="btn__alert">❗️ {alert}</div>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  popupIsOpened: state.cart.toggleCartPopup,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addPlanet: (planet) => dispatch(addPlanet(planet)),
  addStarship: (starship) => dispatch(addStarship(starship)),
  removePlanet: () => dispatch(removePlanet()),
  removeStarship: () => dispatch(removeStarship()),
  toggleCartPopup: () => dispatch(toggleCartPopup()),
  checkoutSessionStart: (checkoutInfo) =>
    dispatch(checkoutSessionStart(checkoutInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
