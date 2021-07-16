import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import planetReducer from "./planet/planet.reducer";
import slideReducer from "./slide/slide.reducer";
import starshipReducer from "./starship/starship.reducer";
import pageReducer from "./page/page.reducer";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import bookingReducer from "./booking/booking.reducer";

const expireReducer = require("redux-persist-expire");

//! Persist users data when starting but expire in 7 days starting from last login
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"],
  // blacklist: ["cart"],
  transforms: [
    expireReducer("users", {
      persistedAtKey: "lastLoginAt", // Since this key(data field) is updated last time
      expireSeconds: 60 * 60 * 24 * 7, // After * seconds passed(7 days) : jwt & cookie's expire date is the same as 7 days in backend.
      expiredState: null, // Make users data null
      autoExpire: true, // Automatically execute
    }),
  ],
};

//! Nested persists(persisting cart except "toggleCartPopup" inside)
const cartPersistConfig = {
  key: "cart",
  storage,
  blacklist: ["toggleCartPopup", "refreshCartPopup"],
};

const rootReducer = combineReducers({
  planets: planetReducer,
  slides: slideReducer,
  starships: starshipReducer,
  pages: pageReducer,
  users: userReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  bookings: bookingReducer,
});

export default persistReducer(persistConfig, rootReducer);
