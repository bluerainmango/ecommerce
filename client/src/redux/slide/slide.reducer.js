// import city1 from "../../assets/city4.jpeg";
// import city2 from "../../assets/city5.jpeg";
// import city3 from "../../assets/city3.jpeg";
// import city1bg from "../../assets/city1-bg.jpeg";
// import city2bg from "../../assets/city2-bg.jpeg";
// import city3bg from "../../assets/city3-bg.jpeg";

const INITIAL_STATE = {
  slideIndex: 0,
  activeSlideInfo: null,
  toggleSlideInfo: false,
  slides: [],
  // slides: [
  //   {
  //     title: "Meteo City",
  //     subtitle: "Kepler-1649c",
  //     description:
  //       "Lorem nulla do cillum irure aliquip id pariatur enim Lorem est incididunt ipsum cillum. Veniam qui aute ut enim do nostrud labore officia ut mollit labore Lorem esse. ",
  //     image: city1,
  //     bgimage: city1bg,
  //     iamge2:
  //       "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  //   },
  //   {
  //     title: "Beyond Heaven",
  //     subtitle: "Luyten B",
  //     description:
  //       "Nisi eu nulla ea nisi laboris anim exercitation elit. Aliqua eiusmod do Lorem eiusmod cupidatat Lorem dolor excepteur est excepteur duis deserunt reprehenderit.",
  //     image: city2,
  //     bgimage: city2bg,
  //     image2:
  //       "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  //   },
  //   {
  //     title: "Sky Rocks",
  //     subtitle: "K2-72e",
  //     description:
  //       "Veniam consequat duis est est id eiusmod non eiusmod incididunt. Ea eu quis incididunt enim deserunt sint et duis cillum adipisicing. Tempor velit dolore dolor exercitation minim elit incididunt et consequat deserunt id.",
  //     image: city3,
  //     bgimage: city3bg,
  //     image2:
  //       "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  //   },
  // ],
};

const slideReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_SLIDES":
      return {
        ...state,
        slides: action.payload,
      };

    case "NEXT_SLIDE":
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % state.slides.length,
      };

    case "PREVIOUS_SLIDE":
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0
            ? state.slides.length - 1
            : state.slideIndex - 1,
      };

    case "UPDATE_ACTIVE_SLIDE_INFO":
      return {
        ...state,
        activeSlideInfo: action.payload,
      };

    case "TOGGLE_SLIDE_INFO":
      return {
        ...state,
        toggleSlideInfo: !state.toggleSlideInfo,
      };

    default:
      return state;
  }
};

export default slideReducer;
