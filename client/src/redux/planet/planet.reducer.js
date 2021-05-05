import { PlanetTypes } from "./planet.types";

// import planet1 from "../../assets/planet-1.jpeg";
// import planet2 from "../../assets/planet-2.jpeg";
// import planet3 from "../../assets/planet-3.jpeg";
// import planet1_800 from "../../assets/planet-1_800.jpg";
// import planet2_800 from "../../assets/planet-2_800.jpg";
// import planet3_800 from "../../assets/planet-3_800.jpg";
// import planet1_800_trans from "../../assets/planet-1_800_trans.png";
// import planet2_800_trans from "../../assets/planet-2_800_trans.png";
// import planet3_800_trans from "../../assets/planet-3_800_trans.png";

// import planet1_pt1 from "../../assets/planet1-presentation1.jpeg";
// import planet1_pt2 from "../../assets/planet1-presentation2.jpeg";
// import planet1_pt3 from "../../assets/planet1-presentation3.jpeg";
// import planet1_pt4 from "../../assets/planet1-presentation4.jpeg";
// import planet2_pt1 from "../../assets/planet2-presentation1.jpeg";
// import planet2_pt2 from "../../assets/planet2-presentation2.jpeg";
// import planet2_pt3 from "../../assets/planet2-presentation3.jpeg";
// import planet3_pt1 from "../../assets/planet3-presentation1.jpeg";
// import planet3_pt2 from "../../assets/planet3-presentation2.jpeg";
// import planet3_pt3 from "../../assets/planet3-presentation3.jpeg";

// import planet1_intro from "../../assets/planet1-intro.jpeg";
// import planet2_intro from "../../assets/planet2-intro.jpeg";
// import planet3_intro from "../../assets/planet3-intro.jpeg";

// import planet1_feature from "../../assets/planet1-feature.jpeg";
// import planet2_feature from "../../assets/planet2-feature.jpeg";
// import planet3_feature from "../../assets/planet3-feature.jpeg";

// import city1 from "../../assets/city4.jpeg";
// import city2 from "../../assets/city5.jpeg";
// import city3 from "../../assets/city3.jpeg";
// import city1bg from "../../assets/city1-bg.jpeg";
// import city2bg from "../../assets/city2-bg.jpeg";
// import city3bg from "../../assets/city3-bg.jpeg";

const INITIAL_STATE = {
  error: null,
  planets: [],
  // planets: [
  //   {
  //     id: 1,
  //     title: "Meteor City",
  //     subtitle: "Kepler-1649c",
  //     slug: "kepler",
  //     category: "planets",
  //     image: planet1,
  //     image_800: planet1_800,
  //     image2: city1,
  //     bgimage: city1bg,
  //     pageIntro: planet1_intro,
  //     thumbnails: [planet1, planet1_pt1, planet1_pt2, planet1_pt3, planet1_pt4],
  //     collectionThumb: planet1_800_trans,
  //     presentation: [planet1_pt1, planet1_pt2, planet1_pt3],
  //     headline: "The most technically advanced city in universe",
  //     featureImage: planet1_feature,
  //     featureColor: "rgb(132, 0, 158),rgb(0, 26, 73)",
  //     feature: [
  //       {
  //         subject: "Neon City",
  //         content:
  //           "Do consequat eu laboris sit sint culpa. Commodo id dolor amet aute pariatur eu. Aute aliqua amet anim tempor commodo.",
  //       },
  //       {
  //         subject: "Meet human-like AI",
  //         content:
  //           "Anim ut consectetur commodo deserunt occaecat cillum enim excepteur duis do.",
  //       },
  //       {
  //         subject: "Experience new future",
  //         content:
  //           "Ullamco mollit esse consectetur elit esse incididunt laborum commodo deserunt nostrud et eu.",
  //       },
  //       {
  //         subject: "Most earth-like enviorment",
  //         content:
  //           "Id reprehenderit amet quis proident veniam occaecat adipisicing ea occaecat et cupidatat veniam proident fugiat.",
  //       },
  //     ],
  //     price: 350,
  //     description:
  //       "Kepler-1649c is an exoplanet orbiting the M-type main sequence red dwarf star Kepler-1649, about 300 light-years from Earth, in the constellation of Cygnus. In 2020, Jeff Coughlin, the director of SETI's K2 Science Office, described it as the most 'similar planet to Earth' found so far by the Kepler Space Telescope.",
  //   },
  //   {
  //     id: 2,
  //     title: "Beyond Heaven",
  //     subtitle: "Luyten B",
  //     slug: "luyten",
  //     category: "planets",
  //     image: planet2,
  //     image_800: planet2_800,
  //     image2: city2,
  //     bgimage: city2bg,
  //     pageIntro: planet2_intro,
  //     thumbnails: [planet2_intro, planet2_pt1, planet2_pt2, planet2_pt3, city2],
  //     collectionThumb: planet2_800_trans,
  //     presentation: [planet2_pt1, planet2_pt2, planet2_pt3],
  //     headline: "Planet that keeps natural beauty of universe",
  //     featureImage: planet2_feature,
  //     featureColor: "rgb(0, 158, 40),rgb(0, 41, 131)",
  //     feature: [
  //       {
  //         subject: "Breath taken beauty",
  //         content:
  //           "Do consequat eu laboris sit sint culpa. Commodo id dolor amet aute pariatur eu. Aute aliqua amet anim tempor commodo.",
  //       },
  //       {
  //         subject: "Absoulte pure",
  //         content:
  //           "Anim ut consectetur commodo deserunt occaecat cillum enim excepteur duis do.",
  //       },
  //       {
  //         subject: "Fertile land",
  //         content:
  //           "Ullamco mollit esse consectetur elit esse incididunt laborum commodo deserunt nostrud et eu.",
  //       },
  //       {
  //         subject: "Close to earth",
  //         content:
  //           "Id reprehenderit amet quis proident veniam occaecat adipisicing ea occaecat et cupidatat veniam proident fugiat.",
  //       },
  //     ],
  //     price: 430,
  //     description:
  //       "Luyten B is a confirmed exoplanet, likely icy and green, orbiting within the habitable zone of the red dwarf star K2-72, the outermost of four such planets discovered in the system by NASA's Kepler spacecraft on its 'Second Light' mission. It is located about 217.1 light-years (66.56 parsecs, or nearly 2.0538×1015 km) away from Earth in the constellation of Aquarius.",
  //   },
  //   {
  //     id: 3,
  //     title: "Sky Rocks",
  //     subtitle: "K2-72e",
  //     slug: "k2",
  //     category: "planets",
  //     image: planet3,
  //     image_800: planet3_800,
  //     image2: city3,
  //     bgimage: city3bg,
  //     pageIntro: planet3_intro,
  //     thumbnails: [planet3_intro, planet3_pt1, planet3_pt2, planet3_pt3, city3],
  //     collectionThumb: planet3_800_trans,
  //     presentation: [planet3_pt1, planet3_pt2, planet3_pt3],
  //     headline: "Planet that has floating land",
  //     featureImage: planet3_feature,
  //     featureColor: "rgb(0, 108, 158),rgb(0, 27, 85)",
  //     feature: [
  //       {
  //         subject: "Floating land",
  //         content:
  //           "Do consequat eu laboris sit sint culpa. Commodo id dolor amet aute pariatur eu. Aute aliqua amet anim tempor commodo.",
  //       },
  //       {
  //         subject: "clear air",
  //         content:
  //           "Anim ut consectetur commodo deserunt occaecat cillum enim excepteur duis do.",
  //       },
  //       {
  //         subject: "Safetest city",
  //         content:
  //           "Ullamco mollit esse consectetur elit esse incididunt laborum commodo deserunt nostrud et eu.",
  //       },
  //       {
  //         subject: "No crime",
  //         content:
  //           "Id reprehenderit amet quis proident veniam occaecat adipisicing ea occaecat et cupidatat veniam proident fugiat.",
  //       },
  //     ],
  //     price: 540,
  //     description:
  //       "Luyten b is a confirmed exoplanet, likely rocky, orbiting within the habitable zone of the nearby red dwarf Luyten's Star. It is one of the most Earth-like planets ever found and is the fifth-closest potentially habitable exoplanet known, at a distance of 12.2 light-years.",
  //   },
  // ],
};

const planetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlanetTypes.FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        planets: action.payload,
      };

    case PlanetTypes.FETCH_PLANETS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default planetReducer;
