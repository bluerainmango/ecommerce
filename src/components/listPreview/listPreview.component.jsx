import React from "react";

import { connect } from "react-redux";

import "./listPreview.styles.scss";

const ListPreview = (props) => {
  const { activeStarship } = props;

  return (
    <div className="list__preview">
      <img src={activeStarship?.image} alt={activeStarship?.name}></img>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeStarship: state.starships.activeStarship,
});

export default connect(mapStateToProps)(ListPreview);
