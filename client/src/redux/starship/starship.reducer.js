import starshipTypes from "./starship.types";

// import starship1 from "../../assets/starship1.png";
// import starship2 from "../../assets/starship2.png";
// import starship3 from "../../assets/starship3.png";
// import starship4 from "../../assets/starship4.png";
// import starship5 from "../../assets/starship5.png";
// import starship1Cockpit from "../../assets/starship1-cockpit.jpeg";
// import starship2Cockpit from "../../assets/starship2-cockpit.png";
// import starship3Cockpit from "../../assets/starship4-cockpit.jpeg";
// import starship4Cockpit from "../../assets/starship3-cockpit.png";
// import starship5Cockpit from "../../assets/starship5-cockpit.jpeg";

// import starship1Thumb1 from "../../assets/starship1-thumb1.jpeg";
// import starship1Thumb2 from "../../assets/starship1-thumb2.jpeg";
// import starship1Thumb3 from "../../assets/starship1-thumb3.jpeg";
// import starship1Thumb4 from "../../assets/starship1-thumb4.jpeg";

// import starship2Thumb1 from "../../assets/starship2-thumb1.jpeg";
// import starship2Thumb2 from "../../assets/starship2-thumb2.jpeg";
// import starship2Thumb3 from "../../assets/starship2-thumb3.jpeg";
// import starship2Thumb4 from "../../assets/starship2-thumb4.jpeg";

// import starship3Thumb1 from "../../assets/starship3-thumb1.jpeg";
// import starship3Thumb2 from "../../assets/starship3-thumb2.jpeg";
// import starship3Thumb3 from "../../assets/starship3-thumb3.jpeg";
// import starship3Thumb4 from "../../assets/starship3-thumb4.jpeg";

// import starship4Thumb1 from "../../assets/starship4-thumb1.jpeg";
// import starship4Thumb2 from "../../assets/starship4-thumb2.jpeg";
// import starship4Thumb3 from "../../assets/starship4-thumb3.jpeg";
// import starship4Thumb4 from "../../assets/starship4-thumb4.jpeg";

// import starship5Thumb1 from "../../assets/starship5-thumb1.jpeg";
// import starship5Thumb2 from "../../assets/starship5-thumb2.jpeg";
// import starship5Thumb3 from "../../assets/starship5-thumb3.jpeg";
// import starship5Thumb4 from "../../assets/starship5-thumb4.jpeg";

const INITIAL_STATE = {
  error: null,
  activeStarship: null,
  starships: [],
  // activeStarship: {
  //   title: "Ghost19",
  //   image: starship2,
  //   collectionThumb: starship2,
  //   description: "Magna laboris et sit sit.",
  // },
  // starships: [
  //   {
  //     id: "s1",
  //     title: "Ghost19",
  //     slug: "ghost19",
  //     subtitle: "slick and modern",
  //     category: "starships",
  //     image: starship2,
  //     featureImage: starship2,
  //     collectionThumb: starship2,
  //     cockpitImage: starship1Cockpit,
  //     price: 335,
  //     thumbnails: [
  //       starship2,
  //       starship1Thumb1,
  //       starship1Thumb2,
  //       starship1Thumb3,
  //       starship1Thumb4,
  //     ],
  //     description: "Magna laboris et sit sit.",
  //     descriptionLong:
  //       "Deserunt esse nostrud nostrud nulla aliqua irure dolore nisi aliquip. Cupidatat minim occaecat aliquip officia tempor adipisicing tempor quis anim voluptate eiusmod duis excepteur.",
  //     benefit: [
  //       "Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
  //       "Eu deserunt laborum quis excepteur reprehenderit ipsum sunt veniam incididunt qui commodo laborum dolor.",
  //       "Aliqua do dolor incididunt eiusmod nisi enim sint sint quis duis. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
  //     ],
  //   },
  //   {
  //     id: "s2",
  //     title: "AE-23",
  //     slug: "ae-23",
  //     subtitle: "Comportable",
  //     category: "starships",
  //     image: starship1,
  //     featureImage: starship1,
  //     collectionThumb: starship1,
  //     cockpitImage: starship2Cockpit,
  //     price: 232,
  //     thumbnails: [
  //       starship1,
  //       starship2Thumb1,
  //       starship2Thumb2,
  //       starship2Thumb3,
  //       starship2Thumb4,
  //     ],
  //     description:
  //       "Qui duis ut amet aliqua in ut incididunt velit elit in duis.",
  //     descriptionLong:
  //       "Eu id velit enim aliquip reprehenderit laborum cupidatat elit duis. Amet irure officia nostrud ex ex adipisicing excepteur sunt dolore reprehenderit.",
  //     benefit: [
  //       "Sit id nisi cupidatat qui cillum ullamco. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
  //       "Duis reprehenderit velit ut veniam non labore sit occaecat. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
  //       "Est excepteur commodo sunt ea. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
  //     ],
  //   },
  //   {
  //     id: "s3",
  //     title: "BT-7",
  //     slug: "bt-7",
  //     subtitle: "Spacious",
  //     category: "starships",
  //     image: starship4,
  //     featureImage: starship4,
  //     collectionThumb: starship4,
  //     cockpitImage: starship3Cockpit,
  //     price: 413,
  //     thumbnails: [
  //       starship4,
  //       starship4Thumb1,
  //       starship4Thumb2,
  //       starship4Thumb3,
  //       starship4Thumb4,
  //     ],
  //     description:
  //       "Sit est reprehenderit consequat minim aliquip deserunt id aliqua nisi adipisicing quis amet anim.",
  //     descriptionLong:
  //       "Ullamco culpa veniam ullamco non. Elit eiusmod anim ad dolor ea aliquip exercitation deserunt.",
  //     benefit: [
  //       "Do sunt id ullamco eu non et ea quis cillum excepteur in exercitation.",
  //       "Nulla et velit magna laborum consectetur. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
  //       "Ea Lorem adipisicing amet est deserunt reprehenderit sunt duis adipisicing proident ipsum.",
  //     ],
  //   },
  //   {
  //     id: "s4",
  //     title: "X-wing",
  //     slug: "x-wing",
  //     subtitle: "Auto-pilot",
  //     category: "starships",
  //     image: starship5,
  //     featureImage: starship5,
  //     collectionThumb: starship5,
  //     cockpitImage: starship4Cockpit,
  //     price: 580,
  //     thumbnails: [
  //       starship5,
  //       starship5Thumb1,
  //       starship5Thumb2,
  //       starship5Thumb3,
  //       starship5Thumb4,
  //     ],
  //     description:
  //       "Sunt quis ea aute ullamco veniam proident eu qui do fugiat qui.",
  //     descriptionLong:
  //       "Eu ea enim cillum culpa adipisicing exercitation aliqua voluptate dolore minim mollit minim nulla. Ullamco dolor est cupidatat incididunt est ad Lorem ipsum laborum do.",
  //     benefit: [
  //       "Do sunt id ullamco eu non et ea quis cillum excepteur in exercitation.",
  //       "Nulla et velit magna laborum consectetur. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
  //       "Ea Lorem adipisicing amet est deserunt reprehenderit sunt duis adipisicing proident ipsum.",
  //     ],
  //   },
  //   {
  //     id: "s5",
  //     title: "Star Cruise",
  //     slug: "star-cruise",
  //     subtitle: "Fastest",
  //     category: "starships",
  //     image: starship3,
  //     featureImage: starship3,
  //     collectionThumb: starship3,
  //     cockpitImage: starship5Cockpit,
  //     price: 421,
  //     thumbnails: [
  //       starship3,
  //       starship3Thumb1,
  //       starship3Thumb2,
  //       starship3Thumb3,
  //       starship3Thumb4,
  //     ],
  //     description:
  //       "Sint tempor nisi ad dolore eu fugiat enim nulla enim quis amet.",
  //     descriptionLong:
  //       "Nostrud incididunt eiusmod aliquip culpa duis do dolore exercitation fugiat fugiat occaecat culpa incididunt minim. Mollit quis ex quis et sint dolore pariatur.",
  //     benefit: [
  //       "Do sunt id ullamco eu non et ea quis cillum excepteur in exercitation.",
  //       "Nulla et velit magna laborum consectetur. Do nisi non ex occaecat quis culpa qui qui voluptate veniam esse.",
  //       "Ea Lorem adipisicing amet est deserunt reprehenderit sunt duis adipisicing proident ipsum.",
  //     ],
  //   },
  // ],
};

const starshipReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case starshipTypes.GET_STARSHIPS:
      return state;

    case starshipTypes.UPDATE_ACTIVE_STARSHIP:
      return { ...state, activeStarship: action.payload };

    case starshipTypes.FETCH_STARSHIPS_SUCCESS:
      return {
        ...state,
        starships: action.payload,
      };

    case starshipTypes.FETCH_STARSHIPS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case starshipTypes.LOAD_DEFAULT_ACTIVE_STARSHIP:
      return {
        ...state,
        activeStarship: action.payload,
      };

    default:
      return state;
  }
};

export default starshipReducer;
