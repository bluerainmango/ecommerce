// import { PlanetTypes } from "./planet.types";
import moon from "../../assets/planet-1.jpeg";
import mars from "../../assets/planet-2.jpeg";
import neptune from "../../assets/planet-3.jpeg";

const INITIAL_STATE = {
  planets: [
    {
      id: 1,
      name: "Kepler-1649c",
      slug: "kepler",
      image: moon,
      pricePerSqft: 350,
      bedroom: 2,
      livingArea: 900,
      garage: 2,
      yearbuilt: 4053,
      description:
        "Kepler-1649c is an exoplanet orbiting the M-type main sequence red dwarf star Kepler-1649, about 300 light-years from Earth, in the constellation of Cygnus. In 2020, Jeff Coughlin, the director of SETI's K2 Science Office, described it as the most 'similar planet to Earth' found so far by the Kepler Space Telescope.",
    },
    {
      id: 2,
      name: "K2-72e",
      slug: "k2",
      image: mars,
      pricePerSqft: 430,
      bedroom: 4,
      livingArea: 1200,
      garage: 3,
      yearbuilt: 3983,
      description:
        "K2-72e is a confirmed exoplanet, likely icy, orbiting within the habitable zone of the red dwarf star K2-72, the outermost of four such planets discovered in the system by NASA's Kepler spacecraft on its 'Second Light' mission. It is located about 217.1 light-years (66.56 parsecs, or nearly 2.0538×1015 km) away from Earth in the constellation of Aquarius.",
    },
    {
      id: 3,
      name: "Luyten b",
      slug: "luyten",
      image: neptune,
      pricePerSqft: 540,
      bedroom: 5,
      livingArea: 2100,
      garage: 4,
      yearbuilt: 4123,
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
