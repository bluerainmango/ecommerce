import { combineReducers } from "redux";

import planetReducer from "./planet/planet.reducer";

export default combineReducers({ planets: planetReducer });
