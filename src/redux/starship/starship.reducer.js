import starship1 from "../../assets/starship1.png";
import starship2 from "../../assets/starship2.png";
import starship3 from "../../assets/starship3.png";
import starship4 from "../../assets/starship4.png";
import starship5 from "../../assets/starship5.png";

const INITIAL_STATE = {
  activeStarship: {
    title: "Ghost19",
    image: starship2,
    collectionThumb: starship2,
    description: "Magna laboris et sit sit.",
  },
  starships: [
    {
      id: "s1",
      title: "Ghost19",
      slug: "ghost19",
      subtitle: "slick and modern",
      category: "starships",
      image: starship2,
      featureImage: starship2,
      collectionThumb: starship2,
      price: 335,
      description: "Magna laboris et sit sit.",
      benefit: [
        "Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
        "Eu deserunt laborum quis excepteur reprehenderit ipsum sunt veniam incididunt qui commodo laborum dolor.",
        "Aliqua do dolor incididunt eiusmod nisi enim sint sint quis duis. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
      ],
    },
    {
      id: "s2",
      title: "AE-23",
      slug: "ae-23",
      subtitle: "Comportable",
      category: "starships",
      image: starship1,
      featureImage: starship1,
      collectionThumb: starship1,
      price: 232,
      description:
        "Qui duis ut amet aliqua in ut incididunt velit elit in duis.",
      benefit: [
        "Sit id nisi cupidatat qui cillum ullamco. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
        "Duis reprehenderit velit ut veniam non labore sit occaecat. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
        "Est excepteur commodo sunt ea. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
      ],
    },
    {
      id: "s3",
      title: "BT-7",
      slug: "bt-7",
      subtitle: "Spacious",
      category: "starships",
      image: starship4,
      featureImage: starship4,
      collectionThumb: starship4,
      price: 413,
      description:
        "Sit est reprehenderit consequat minim aliquip deserunt id aliqua nisi adipisicing quis amet anim.",
      benefit: [
        "Do sunt id ullamco eu non et ea quis cillum excepteur in exercitation.",
        "Nulla et velit magna laborum consectetur. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
        "Ea Lorem adipisicing amet est deserunt reprehenderit sunt duis adipisicing proident ipsum.",
      ],
    },
    {
      id: "s4",
      title: "X-wing",
      slug: "x-wing",
      subtitle: "Auto-pilot",
      category: "starships",
      image: starship5,
      featureImage: starship5,
      collectionThumb: starship5,
      price: 580,
      description:
        "Sunt quis ea aute ullamco veniam proident eu qui do fugiat qui.",
      benefit: [
        "Do sunt id ullamco eu non et ea quis cillum excepteur in exercitation.",
        "Nulla et velit magna laborum consectetur. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
        "Ea Lorem adipisicing amet est deserunt reprehenderit sunt duis adipisicing proident ipsum.",
      ],
    },
    {
      id: "s5",
      title: "Star Cruise",
      slug: "star-cruise",
      subtitle: "Fastest",
      category: "starships",
      image: starship3,
      featureImage: starship3,
      collectionThumb: starship3,
      price: 421,
      description:
        "Sint tempor nisi ad dolore eu fugiat enim nulla enim quis amet.",
      benefit: [
        "Do sunt id ullamco eu non et ea quis cillum excepteur in exercitation.",
        "Nulla et velit magna laborum consectetur. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
        "Ea Lorem adipisicing amet est deserunt reprehenderit sunt duis adipisicing proident ipsum.",
      ],
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
