import starshipTypes from "./starship.types";

export const getStarships = () => ({
  type: starshipTypes.GET_STARSHIPS,
});

export const updateActiveStarship = (starship) => ({
  type: starshipTypes.UPDATE_ACTIVE_STARSHIP,
  payload: starship,
});
