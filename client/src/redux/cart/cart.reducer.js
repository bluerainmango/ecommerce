import CART_TYPES from "./cart.types";
import { formattedDate } from "../../util/util";

const INIT_STATE = {
  planet: null,
  starship: null,
  departureDate: formattedDate(),
  numOfPerson: 1,
  totalPrice: 0,
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CART_TYPES.ADD_PLANET:
      return {
        ...state,
        planet: action.payload,
      };

    case CART_TYPES.ADD_STARSHIP:
      return {
        ...state,
        starship: action.payload,
      };

    case CART_TYPES.UPDATE_DEPARTURE_DATE:
      return {
        ...state,
        departureDate: action.payload,
      };

    case CART_TYPES.UPDATE_PERSON:
      return {
        ...state,
        person: action.payload,
      };

    case CART_TYPES.REMOVE_PLANET:
      return {
        ...state,
        planet: null,
      };

    case CART_TYPES.REMOVE_STARSHIP:
      return {
        ...state,
        starship: null,
      };

    default:
      return state;
  }
};

export default cartReducer;
