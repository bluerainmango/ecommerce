import CART_TYPES from "./cart.types";

const INIT_STATE = {
  planet: null,
  starship: null,
  departureDate: "",
  numOfPerson: 0,
  totalPrice: 0,
  error: null,
  toggleCartPopup: false,
  refreshCartPopupPlanet: false,
  refreshCartPopupStarship: false,
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
        refreshCartPopupPlanet: true,
        toggleCartPopup: true,
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
        refreshCartPopupStarship: true,
        toggleCartPopup: true,
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
        // toggleCartPopup: true,
      };

    case CART_TYPES.REMOVE_STARSHIP:
      return {
        ...state,
        starship: null,
        totalPrice: calTotalPrice(state.planet?.price, 0, state.numOfPerson),
        // toggleCartPopup: true,
      };

    case CART_TYPES.TOGGLE_CARTPOPUP:
      return {
        ...state,
        toggleCartPopup: !state.toggleCartPopup,
      };

    case CART_TYPES.REFRESH_CARTPOPUP_PLANET:
      return {
        ...state,
        refreshCartPopupPlanet: false,
      };

    case CART_TYPES.REFRESH_CARTPOPUP_STARSHIP:
      return {
        ...state,
        refreshCartPopupStarship: false,
      };

    case CART_TYPES.CHECKOUT_SESSION_SUCCESS:
      return {
        ...state,
      };

    case CART_TYPES.CHECKOUT_SESSION_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
