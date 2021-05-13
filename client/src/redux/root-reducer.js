import { combineReducers } from "redux";

import planetReducer from "./planet/planet.reducer";
import slideReducer from "./slide/slide.reducer";
import starshipReducer from "./starship/starship.reducer";
import pageReducer from "./page/page.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  planets: planetReducer,
  slides: slideReducer,
  starships: starshipReducer,
  pages: pageReducer,
  users: userReducer,
});
