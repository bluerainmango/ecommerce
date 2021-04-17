import React from "react";

import StarshipContainer from "../../components/starshipContainer/starshipContainer.component";

import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import "./starship.styles.scss";

const Starship = ({ starships }) => {
  const param = useParams();

  console.log("🍥 starship", starships, param.starshipSlug);

  const starship = starships.find((el) => el.slug === param.starshipSlug);

  return (
    <div>
      <StarshipContainer starship={starship} />
      <div className="order"></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  starships: state.starships.starships,
});

export default connect(mapStateToProps)(Starship);
