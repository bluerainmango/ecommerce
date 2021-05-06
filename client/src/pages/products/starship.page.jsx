import React, { useEffect } from "react";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import StarshipContainer from "../../components/starshipContainer/starshipContainer.component";
import ProductOrder from "../../components/productOrder/productOrder.component";

import { fetchStarshipsStart } from "../../redux/starship/starship.actions";

import "./starship.styles.scss";

const Starship = ({ starships, fetchStarshipsStart }) => {
  const param = useParams();
  const starship = starships.find((el) => el.slug === param.starshipSlug);

  useEffect(() => {
    if (!starship) fetchStarshipsStart();
  }, [starship, fetchStarshipsStart]);

  return (
    <div>
      {starship && (
        <div>
          <StarshipContainer starship={starship} />
          <ProductOrder product={starship} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  starships: state.starships.starships,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStarshipsStart: () => dispatch(fetchStarshipsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Starship);
