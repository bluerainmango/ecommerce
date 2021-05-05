import starshipTypes from "./starship.types";

export const getStarships = () => ({
  type: starshipTypes.GET_STARSHIPS,
});

export const updateActiveStarship = (starship) => ({
  type: starshipTypes.UPDATE_ACTIVE_STARSHIP,
  payload: starship,
});

export const fetchStarshipsStart = () => ({
  type: starshipTypes.FETCH_STARSHIPS_START,
});

export const fetchStarshipsSuccess = (starshipsArr) => ({
  type: starshipTypes.FETCH_STARSHIPS_SUCCESS,
  payload: starshipsArr,
});

export const fetchStarshipsFail = (error) => ({
  type: starshipTypes.FETCH_STARSHIPS_FAIL,
  payload: error,
});

export const loadDefaultActiveStarship = (starship) => ({
  type: starshipTypes.LOAD_DEFAULT_ACTIVE_STARSHIP,
  payload: starship,
});
