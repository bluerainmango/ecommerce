import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import {
  addPlanet,
  addStarship,
  removePlanet,
  removeStarship,
  toggleCartPopup,
} from "../../redux/cart/cart.action";
import "./button.styles.scss";

const Button = (props) => {
  const { content, style } = props;

  const history = useHistory();

  // const { pathname } = useLocation();
  // console.log("🦊 pathname", pathname);

  const delayedTogglePopup = () => {
    setTimeout(() => {
      props.toggleCartPopup();
    }, 1500);
  };

  const handleClick = (el) => {
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
          className={el.type === "link" ? "btn" : "btn btn--action"}
          style={style}
          key={`btn--${
            el.type === "link" ? el.linkTo : el.itemToDispatch?.slug
          }`}
          onClick={handleClick(el)}
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
});

const mapDispatchToProps = (dispatch) => ({
  addPlanet: (planet) => dispatch(addPlanet(planet)),
  addStarship: (starship) => dispatch(addStarship(starship)),
  removePlanet: () => dispatch(removePlanet()),
  removeStarship: () => dispatch(removeStarship()),
  toggleCartPopup: () => dispatch(toggleCartPopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
