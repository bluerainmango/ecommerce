import React from "react";

import ProductOrder from "../../components/productOrder/productOrder.component";

import PlanetIntro from "../../components/planetIntro/planetIntro.component";

import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import "./planets.styles.scss";

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
      <ProductOrder planet={planet} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  planets: state.planets.planets,
});

export default connect(mapStateToProps)(Planet);
