import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import {
  addPlanet,
  addStarship,
  removePlanet,
  removeStarship,
} from "../../redux/cart/cart.action";
import "./button.styles.scss";

const Button = (props) => {
  const { content, style } = props;

  const history = useHistory();

  const handleClick = (el) => {
    return () => {
      switch (el.type) {
        case "addPlanet":
          return props.addPlanet(el.itemToDispatch);

        case "addStarship":
          return props.addStarship(el.itemToDispatch);

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
            el.type === "link" ? el.linkTo : el.itemToDispatch.slug
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

const mapDispatchToProps = (dispatch) => ({
  addPlanet: (planet) => dispatch(addPlanet(planet)),
  addStarship: (starship) => dispatch(addStarship(starship)),
  removePlanet: () => dispatch(removePlanet()),
  removeStarship: () => dispatch(removeStarship()),
});

export default connect(null, mapDispatchToProps)(Button);
