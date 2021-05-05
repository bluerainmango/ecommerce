import React, { useEffect } from "react";
import ListElement from "../listElement/listElement.component";
import ListPreview from "../../components/listPreview/listPreview.component";

import { connect } from "react-redux";
import { fetchStarshipsStart } from "../../redux/starship/starship.actions";

import "./list.styles.scss";

const List = ({ fetchStarshipsStart, starships }) => {
  useEffect(() => {
    fetchStarshipsStart();
  }, [fetchStarshipsStart]);

  return (
    <div className="list">
      <h2 className="list__title">Discover your starship</h2>
      <ListPreview />
      <div className="list__group">
        {starships.map((starship) => (
          <ListElement key={starship.title} starship={starship} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  starships: state.starships.starships,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStarshipsStart: () => dispatch(fetchStarshipsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
