import starship1 from "../../assets/starship1.png";
import starship2 from "../../assets/starship2.png";
import starship3 from "../../assets/starship3.png";
import starship4 from "../../assets/starship4.png";
import starship5 from "../../assets/starship5.png";

const INITIAL_STATE = {
  starships: [
    { name: "AE-23", image: starship1 },
    { name: "Gost19", image: starship2 },
    { name: "Star Cruise", image: starship3 },
    { name: "BT-7", image: starship4 },
    { name: "X-wing", image: starship5 },
  ],
};

const starshipReducer = (state = INITIAL_STATE, action) => {
  switch (state.type) {
    case "GET_STARSHIPS":
      return state;

    default:
      return state;
  }
};

export default starshipReducer;
