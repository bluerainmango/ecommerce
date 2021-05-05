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
    <div className="listElement">
      <img
        src={`${process.env.REACT_APP_API_BASE_URL}/${starship.image}`}
        alt={starship.title}
        onClick={handleClick}
      />
      <div className="listElement__frame" />
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
