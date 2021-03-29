import React from "react";

import { connect } from "react-redux";

import "./listPreview.styles.scss";

const ListPreview = (props) => {
  const { activeStarship } = props;

  return (
    <div className="preview">
      <div className="preview__frame" />
      <img
        src={activeStarship?.image}
        alt={activeStarship?.name}
        style={{ tranasform: "translate3d(10px, 20px, 40px)" }}
      />
      <div className="preview__info">
        <h4 className="preview__title">{activeStarship?.name}</h4>
        <h5 className="preview__description">{activeStarship?.description}</h5>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeStarship: state.starships.activeStarship,
});

export default connect(mapStateToProps)(ListPreview);
