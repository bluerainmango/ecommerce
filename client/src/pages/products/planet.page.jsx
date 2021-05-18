import React, { useEffect } from "react";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import ProductOrder from "../../components/productOrder/productOrder.component";
import PlanetIntro from "../../components/planetIntro/planetIntro.component";
import Headline from "../../components/headline/headline.component";
import Feature from "../../components/feature/feature.component";
import Presentation from "../../components/presentation/presentation.component";
import AlertBar from "../../components/alertBar/alertBar.component";

import { fetchPlanetsStart } from "../../redux/planet/planet.actions";

import "./planet.styles.scss";

const Planet = ({ planets, fetchPlanetsStart }) => {
  let { planetSlug } = useParams();

  // console.log("useParam", planetSlug);

  const planet = planets.find((planet) => {
    return planet.slug === planetSlug;
  });

  useEffect(() => {
    if (!planet) fetchPlanetsStart();
  }, [planet, fetchPlanetsStart]);

  // console.log(planet);

  return (
    <div>
      {/* {console.log("planet:", planet)} */}
      {planet && (
        <div>
          <AlertBar />
          <PlanetIntro planet={planet} />
          <Headline planet={planet} />
          <Presentation planet={planet} />
          <Feature planet={planet} />
          <ProductOrder product={planet} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  planets: state.planets.planets,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanetsStart: () => dispatch(fetchPlanetsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Planet);
