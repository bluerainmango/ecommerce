// import { PlanetTypes } from "./planet.types";
import planet1 from "../../assets/planet-1.jpeg";
import planet2 from "../../assets/planet-2.jpeg";
import planet3 from "../../assets/planet-3.jpeg";
import planet1_800 from "../../assets/planet-1_800.jpg";
import planet2_800 from "../../assets/planet-2_800.jpg";
import planet3_800 from "../../assets/planet-3_800.jpg";
import planet1_pt1 from "../../assets/planet1-presentation1.jpeg";
import planet1_pt2 from "../../assets/planet1-presentation2.jpeg";
import planet1_pt3 from "../../assets/planet1-presentation3.jpeg";

import city1 from "../../assets/city4.jpeg";
import city2 from "../../assets/city5.jpeg";
import city3 from "../../assets/city3.jpeg";
import city1bg from "../../assets/city1-bg.jpeg";
import city2bg from "../../assets/city2-bg.jpeg";
import city3bg from "../../assets/city3-bg.jpeg";

const INITIAL_STATE = {
  planets: [
    {
      id: 1,
      title: "Meteo City",
      subtitle: "Kepler-1649c",
      slug: "kepler",
      image: planet1,
      image_800: planet1_800,
      image2: city1,
      bgimage: city1bg,
      thumbnails: [planet1, city1, city2, city3, city3bg],
      presentation: [planet1_pt1, planet1_pt2, planet1_pt3],
      headline: "The most technically advanced city in universe",
      feature: [
        {
          subject: "Neon City",
          content: "Do consequat eu laboris sit sint culpa.",
        },
        {
          subject: "Meet human-like AI",
          content:
            "Anim ut consectetur commodo deserunt occaecat cillum enim excepteur duis do.",
        },
        {
          subject: "Experience new future",
          content:
            "Ullamco mollit esse consectetur elit esse incididunt laborum commodo deserunt nostrud et eu.",
        },
        {
          subject: "Most earth-like enviorment",
          content:
            "Id reprehenderit amet quis proident veniam occaecat adipisicing ea occaecat et cupidatat veniam proident fugiat.",
        },
      ],
      price: 350,
      bedroom: 2,
      livingArea: 900,
      garage: 2,
      yearbuilt: 2053,
      description:
        "Kepler-1649c is an exoplanet orbiting the M-type main sequence red dwarf star Kepler-1649, about 300 light-years from Earth, in the constellation of Cygnus. In 2020, Jeff Coughlin, the director of SETI's K2 Science Office, described it as the most 'similar planet to Earth' found so far by the Kepler Space Telescope.",
    },
    {
      id: 2,
      title: "Beyond Heaven",
      subtitle: "Luyten B",
      slug: "k2",
      image: planet2,
      image_800: planet2_800,
      image2: city2,
      bgimage: city2bg,
      price: 430,
      bedroom: 4,
      livingArea: 1200,
      garage: 3,
      yearbuilt: 2083,
      description:
        "K2-72e is a confirmed exoplanet, likely icy, orbiting within the habitable zone of the red dwarf star K2-72, the outermost of four such planets discovered in the system by NASA's Kepler spacecraft on its 'Second Light' mission. It is located about 217.1 light-years (66.56 parsecs, or nearly 2.0538×1015 km) away from Earth in the constellation of Aquarius.",
    },
    {
      id: 3,
      title: "Sky Rocks",
      subtitle: "K2-72e",
      slug: "luyten",
      image: planet3,
      image_800: planet3_800,
      image2: city3,
      bgimage: city3bg,
      price: 540,
      bedroom: 5,
      livingArea: 2100,
      garage: 4,
      yearbuilt: 2061,
      description:
        "Luyten b is a confirmed exoplanet, likely rocky, orbiting within the habitable zone of the nearby red dwarf Luyten's Star. It is one of the most Earth-like planets ever found and is the fifth-closest potentially habitable exoplanet known, at a distance of 12.2 light-years.",
    },
  ],
};

const planetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default planetReducer;
