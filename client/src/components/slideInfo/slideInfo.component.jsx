import React from "react";
import { connect } from "react-redux";

import Button from "../../components/button/button.component";

import "./slideInfo.styles.scss";

const SlideInfo = (props) => {
  const { activeSlideInfo, toggleSlideInfo } = props;

  return (
    <div
      className="slideInfo"
      style={{
        //backgroundImage: `linear-gradient(#000000, rgba(255, 255, 255, 0.515)), url(${process.env.REACT_APP_API_BASE_URL}/${activeSlideInfo?.bgimage})`,
        display: `${toggleSlideInfo ? "grid" : "none"}`,
      }}
    >
      <div className="line"></div>
      <img
        className="slideInfo__img"
        alt={activeSlideInfo?.title}
        src={
          activeSlideInfo
            ? `${process.env.REACT_APP_API_BASE_URL}/${activeSlideInfo.bgimage}`
            : ""
        }
        style={{
          opacity: 1,
        }}
      />

      <div className="slideInfo__content">
        {/* <h5 className="slideInfo__title">{activeSlideInfo?.title}</h5>
        <h6 className="slideInfo__subtitle">{activeSlideInfo?.subtitle}</h6> */}
        <p className="slideInfo__description">{activeSlideInfo?.description}</p>
        <Button
          text={["Add To Cart", "Learn More"]}
          linkTo={`/planets/${activeSlideInfo?.slug}`}
        />
        {/* <Button text="Learn More" /> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeSlideInfo: state.slides.activeSlideInfo,
  toggleSlideInfo: state.slides.toggleSlideInfo,
});

export default connect(mapStateToProps)(SlideInfo);
