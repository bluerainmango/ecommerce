import starship1 from "../../assets/starship1.png";
import starship2 from "../../assets/starship2.png";
import starship3 from "../../assets/starship3.png";
import starship4 from "../../assets/starship4.png";
import starship5 from "../../assets/starship5.png";
import starship1Cockpit from "../../assets/starship1-cockpit.jpeg";
import starship2Cockpit from "../../assets/starship2-cockpit.png";
import starship3Cockpit from "../../assets/starship4-cockpit.jpeg";
import starship4Cockpit from "../../assets/starship3-cockpit.png";
import starship5Cockpit from "../../assets/starship5-cockpit.jpeg";

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
      cockpitImage: starship1Cockpit,
      price: 335,
      description: "Magna laboris et sit sit.",
      descriptionLong:
        "Deserunt esse nostrud nostrud nulla aliqua irure dolore nisi aliquip. Cupidatat minim occaecat aliquip officia tempor adipisicing tempor quis anim voluptate eiusmod duis excepteur.",
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
      cockpitImage: starship2Cockpit,
      price: 232,
      description:
        "Qui duis ut amet aliqua in ut incididunt velit elit in duis.",
      descriptionLong:
        "Eu id velit enim aliquip reprehenderit laborum cupidatat elit duis. Amet irure officia nostrud ex ex adipisicing excepteur sunt dolore reprehenderit.",
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
      cockpitImage: starship3Cockpit,
      price: 413,
      description:
        "Sit est reprehenderit consequat minim aliquip deserunt id aliqua nisi adipisicing quis amet anim.",
      descriptionLong:
        "Ullamco culpa veniam ullamco non. Elit eiusmod anim ad dolor ea aliquip exercitation deserunt.",
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
      cockpitImage: starship4Cockpit,
      price: 580,
      description:
        "Sunt quis ea aute ullamco veniam proident eu qui do fugiat qui.",
      descriptionLong:
        "Eu ea enim cillum culpa adipisicing exercitation aliqua voluptate dolore minim mollit minim nulla. Ullamco dolor est cupidatat incididunt est ad Lorem ipsum laborum do.",
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
      cockpitImage: starship5Cockpit,
      price: 421,
      description:
        "Sint tempor nisi ad dolore eu fugiat enim nulla enim quis amet.",
      descriptionLong:
        "Nostrud incididunt eiusmod aliquip culpa duis do dolore exercitation fugiat fugiat occaecat culpa incididunt minim. Mollit quis ex quis et sint dolore pariatur.",
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
