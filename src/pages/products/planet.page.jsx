import React from "react";

import ProductOrder from "../../components/productOrder/productOrder.component";
import PlanetIntro from "../../components/planetIntro/planetIntro.component";
import Headline from "../../components/headline/headline.component";
import Feature from "../../components/feature/feature.component";

import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import Presentation from "../../components/presentation/presentation.component";

import "./planet.styles.scss";

const Planet = ({ planets }) => {
  let { planetSlug } = useParams();

  // console.log("useParam", planetSlug);

  const planet = planets.find((planet) => {
    return planet.slug === planetSlug;
  });

  console.log(planet);
  return (
    <div>
      <PlanetIntro planet={planet} />
      <Headline planet={planet} />
      <Presentation planet={planet} />
      <Feature planet={planet} />
      <ProductOrder planet={planet} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  planets: state.planets.planets,
});

export default connect(mapStateToProps)(Planet);
