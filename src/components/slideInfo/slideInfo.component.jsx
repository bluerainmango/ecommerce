import React from "react";
import { connect } from "react-redux";

import "./slideInfo.styles.scss";

const SlideInfo = (props) => {
  const {
    activeSlideInfo,
    selectedSlideIndex,
    currentIndex,
    updatedSlideOrder,
    toggleSlideInfo,
  } = props;

  return (
    <div
      className="slideInfo"
      //   className={
      //     selectedSlideIndex === currentIndex
      //       ? "slideInfo slideInfo--active"
      //       : "slideInfo"
      //   }
      style={{
        backgroundImage: `linear-gradient(#000000, rgba(255, 255, 255, 0.515)), url(${activeSlideInfo?.bgimage})`,
        display: `${toggleSlideInfo ? "grid" : "none"}`,
      }}
    >
      <img
        className="slideInfo__img"
        alt={activeSlideInfo?.title}
        src={activeSlideInfo?.bgimage}
      />

      <div className="slideInfo__content">
        <h5 className="slideInfo__title">{activeSlideInfo?.title}</h5>
        <h6 className="slideInfo__subtitle">{activeSlideInfo?.subtitle}</h6>
        <p className="slideInfo__description">{activeSlideInfo?.description}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeSlideInfo: state.slides.activeSlideInfo,
  toggleSlideInfo: state.slides.toggleSlideInfo,
});

export default connect(mapStateToProps)(SlideInfo);
