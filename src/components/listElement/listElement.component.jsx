import React from "react";

import { updateActiveStarship } from "../../redux/starship/starship.actions";

import { connect } from "react-redux";

import "./listElement.styles.scss";

const ListElement = (props) => {
  const { updateActiveStarship, starship } = props;

  const handleClick = (e) => {
    e.preventDefault();

    updateActiveStarship(starship);
    console.log("clicked", starship);
  };

  return (
    <div className="list__element">
      <img src={starship.image} alt={starship.name} onClick={handleClick} />
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   activeStarship: state.starships.activeStarship,
// });

const mapDispatchToProps = (dispatch) => ({
  updateActiveStarship: (starship) => {
    dispatch(updateActiveStarship(starship));
  },
});

export default connect(null, mapDispatchToProps)(ListElement);
