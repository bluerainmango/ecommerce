import starship1 from "../../assets/starship1.png";
import starship2 from "../../assets/starship2.png";
import starship3 from "../../assets/starship3.png";
import starship4 from "../../assets/starship4.png";
import starship5 from "../../assets/starship5.png";

const INITIAL_STATE = {
  activeStarship: {
    name: "AE-23",
    image: starship1,
    description: "Qui duis ut amet aliqua in ut incididunt velit elit in duis.",
  },
  starships: [
    {
      name: "AE-23",
      image: starship1,
      description:
        "Qui duis ut amet aliqua in ut incididunt velit elit in duis.",
    },
    {
      name: "Ghost19",
      image: starship2,
      description: "Magna laboris et sit sit.",
    },

    {
      name: "BT-7",
      image: starship4,
      description:
        "Sit est reprehenderit consequat minim aliquip deserunt id aliqua nisi adipisicing quis amet anim.",
    },
    {
      name: "X-wing",
      image: starship5,
      description:
        "Sunt quis ea aute ullamco veniam proident eu qui do fugiat qui.",
    },
    {
      name: "Star Cruise",
      image: starship3,
      description:
        "Sint tempor nisi ad dolore eu fugiat enim nulla enim quis amet.",
    },
  ],
};

const starshipReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_STARSHIPS":
      return state;

    case "UPDATE_ACTIVE_STARSHIP":
      return { ...state, activeStarship: action.payload };

    default:
      return state;
  }
};

export default starshipReducer;
