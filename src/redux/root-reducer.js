import { combineReducers } from "redux";

import planetReducer from "./planet/planet.reducer";
import slideReducer from "./slide/slide.reducer";
import starshipReducer from "./starship/starship.reducer";

export default combineReducers({
  planets: planetReducer,
  slides: slideReducer,
  starships: starshipReducer,
});
