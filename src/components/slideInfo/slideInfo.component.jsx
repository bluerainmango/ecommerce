// import React from "react";
// import { connect } from "react-redux";

// import "./slideInfo.styles.scss";
// const SlideInfo = (props) => {
//   const {
//     activeSlideInfo,
//     selectedSlideIndex,
//     currentIndex,
//     updatedSlideOrder,
//   } = props;

//   return (
//     <div
//       className={
//         selectedSlideIndex === currentIndex
//           ? "slideInfo slideInfo--active"
//           : "slideInfo"
//       }
//       style={{
//         "--updatedSlideOrder": updatedSlideOrder,
//         "--ani": "opa",
//       }}
//     >
//       <h5 className="slideInfo__title">{activeSlideInfo.title}</h5>
//       <h6 className="slideInfo__subtitle">{activeSlideInfo.subtitle}</h6>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   activeSlideInfo: state.slides.activeSlideInfo,
// });

// export default connect(mapStateToProps)(SlideInfo);
