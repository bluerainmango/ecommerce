import React from "react";
import { connect } from "react-redux";

import "./slideInfo.styles.scss";

const SlideInfo = (props) => {
  const { activeSlideInfo, toggleSlideInfo } = props;

  return (
    <div
      className="slideInfo"
      style={{
        // backgroundImage: `linear-gradient(#000000, rgba(255, 255, 255, 0.515)), url(${activeSlideInfo?.bgimage})`,
        display: `${toggleSlideInfo ? "grid" : "none"}`,
      }}
    >
      <div className="line"></div>
      <img
        className="slideInfo__img"
        alt={activeSlideInfo?.title}
        src={activeSlideInfo?.bgimage}
        style={{
          opacity: 1,
        }}
      />

      <div className="slideInfo__content">
        {/* <h5 className="slideInfo__title">{activeSlideInfo?.title}</h5>
        <h6 className="slideInfo__subtitle">{activeSlideInfo?.subtitle}</h6> */}
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
