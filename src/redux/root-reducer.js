import { combineReducers } from "redux";

import planetReducer from "./planet/planet.reducer";
import slideReducer from "./slide/slide.reducer";

export default combineReducers({
  planets: planetReducer,
  slides: slideReducer,
});
