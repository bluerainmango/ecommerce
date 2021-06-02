import React from "react";
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
