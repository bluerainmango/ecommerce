import PlanetTypes from "./planet.types";

export const getPlanets = () => ({
  type: PlanetTypes.GET_PLANETS,
});

// For redux-saga
export const fetchPlanetsStart = () => ({
  type: PlanetTypes.FETCH_PLANETS_START,
});

export const fetchPlanetsSuccess = (planetsArr) => ({
  type: PlanetTypes.FETCH_PLANETS_SUCCESS,
  payload: planetsArr,
});

export const fetchPlanetsFail = () => ({
  type: PlanetTypes.FETCH_PLANETS_FAIL,
});
