import React from "react";
import ListElement from "../listElement/listElement.component";
import ListPreview from "../../components/listPreview/listPreview.component";

import { connect } from "react-redux";
// import { getStarships } from "../../redux/starship/starship.actions";

import "./list.styles.scss";

const List = (props) => {
  const { starships } = props;

  //   console.log(starships);
  return (
    <div className="list">
      <h2 className="list__title">Select your starship</h2>
      <ListPreview starship={starships[0]} />
      <div className="list__group">
        {starships.map((starship) => (
          <ListElement key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  starships: state.starships.starships,
});

export default connect(mapStateToProps)(List);
