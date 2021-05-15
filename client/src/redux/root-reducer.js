import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import planetReducer from "./planet/planet.reducer";
import slideReducer from "./slide/slide.reducer";
import starshipReducer from "./starship/starship.reducer";
import pageReducer from "./page/page.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["user"],
};

const rootReducer = combineReducers({
  planets: planetReducer,
  slides: slideReducer,
  starships: starshipReducer,
  pages: pageReducer,
  users: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
