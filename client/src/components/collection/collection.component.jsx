import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import CollectionThumbnail from "../collectionThumbnail/collectionThumbnail.component";

import { fetchPlanetsStart } from "../../redux/planet/planet.actions";
import { fetchStarshipsStart } from "../../redux/starship/starship.actions";

import "./collection.styles.scss";

const Collection = ({
  props,
  title,
  fetchPlanetsStart,
  fetchStarshipsStart,
}) => {
  const location = useLocation();
  const urlPathName = location.pathname;

  //! call API to load planets or starships data when the page is directly accessed, not via homepage.
  useEffect(() => {
    // console.log("🤡 location:", urlPathName, props.length);

    if (!props.length) {
      if (urlPathName === "/planets") {
        fetchPlanetsStart();
      }

      if (urlPathName === "/starships") {
        fetchStarshipsStart();
      }
    }
  }, [props.length, fetchPlanetsStart, fetchStarshipsStart, urlPathName]);

  return (
    <div className="collection">
      <h2 className="collection__title">{title}</h2>
      <div className="collection__content">
        {props.map((product) => (
          <CollectionThumbnail key={product._id} props={product} />
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProp = (dispatch) => ({
  fetchPlanetsStart: () => dispatch(fetchPlanetsStart()),
  fetchStarshipsStart: () => dispatch(fetchStarshipsStart()),
});

export default connect(null, mapDispatchToProp)(Collection);
