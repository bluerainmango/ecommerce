import CART_TYPES from "./cart.types";
// import { formattedDate } from "../../util/util";

const INIT_STATE = {
  planet: null,
  starship: null,
  // departureDate: formattedDate(),
  departureDate: "",
  // numOfPerson: 1,
  numOfPerson: 0,
  totalPrice: 0,
  error: null,
  toggleCartPopup: false,
};

const calTotalPrice = (planetPrice, starshipPrice, numOfPerson = 1) => {
  // console.log("🐍 inside:", planetPrice, starshipPrice, numOfPerson);

  return ((planetPrice || 0) + (starshipPrice || 0)) * numOfPerson;
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CART_TYPES.ADD_PLANET:
      return {
        ...state,
        planet: action.payload,
        totalPrice: calTotalPrice(
          action.payload.price,
          state.starship?.price,
          state.numOfPerson
        ),
      };

    case CART_TYPES.ADD_STARSHIP:
      return {
        ...state,
        starship: action.payload,
        totalPrice: calTotalPrice(
          state.planet?.price,
          action.payload.price,
          state.numOfPerson
        ),
      };

    case CART_TYPES.UPDATE_DEPARTURE_DATE:
      return {
        ...state,
        departureDate: action.payload,
      };

    case CART_TYPES.UPDATE_PERSON:
      return {
        ...state,
        numOfPerson: action.payload,
        totalPrice: calTotalPrice(
          state.planet?.price,
          state.starship?.price,
          action.payload
        ),
      };

    case CART_TYPES.REMOVE_PLANET:
      return {
        ...state,
        planet: null,
        totalPrice: calTotalPrice(0, state.starship?.price, state.numOfPerson),
      };

    case CART_TYPES.REMOVE_STARSHIP:
      return {
        ...state,
        starship: null,
        totalPrice: calTotalPrice(state.planet?.price, 0, state.numOfPerson),
      };

    default:
      return state;
  }
};

export default cartReducer;
