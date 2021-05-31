import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import Button from "../../components/button/button.component";

import "./slideInfo.styles.scss";

const SlideInfo = (props) => {
  const { activeSlideInfo, toggleSlideInfo } = props;
  const imgRef = useRef();

  const imgUrl = `${
    process.env.REACT_APP_API_BASE_URL
  }/${activeSlideInfo?.bgimage.replace(".jpeg", "_200px.jpeg")}`;

  const imgUrlHigh = `${process.env.REACT_APP_API_BASE_URL}/${activeSlideInfo?.bgimage}`;
  // console.log("🐛 links: ", imgUrl, imgUrlHigh);

  //! lazy loading for image
  useEffect(() => {
    const imgDOM = imgRef.current;
    if (!imgDOM) return;

    imgDOM.classList.add("lazy-img"); // add blur

    // console.log("🐡", imgDOM);

    const imageLoader = new Image();
    imageLoader.src = imgUrlHigh;

    imageLoader.onload = () => {
      // console.log("🐻 high res img loaded");
      imgDOM.src = imgUrlHigh;
      imgDOM.classList.remove("lazy-img");
    };
  }, [imgUrlHigh]);

  return (
    <div
      className="slideInfo"
      style={{
        // backgroundImage: `linear-gradient(#000000, rgba(255, 255, 255, 0.515)), url(${process.env.REACT_APP_API_BASE_URL}/${activeSlideInfo?.bgimage})`,
        display: `${toggleSlideInfo ? "grid" : "none"}`,
      }}
    >
      <div className="line"></div>
      <img
        ref={imgRef}
        className="slideInfo__img lazy-img"
        alt={activeSlideInfo?.title}
        src={activeSlideInfo ? imgUrl : ""}
        style={{
          opacity: 1,
        }}
      />
      {console.log("🐙 slide info", imgRef.current)}
      <div className="slideInfo__content">
        {/* <h5 className="slideInfo__title">{activeSlideInfo?.title}</h5>
        <h6 className="slideInfo__subtitle">{activeSlideInfo?.subtitle}</h6> */}
        <p className="slideInfo__description">{activeSlideInfo?.description}</p>
        <Button
          content={[
            {
              type: "addPlanet",
              text: "Add to journey",
              itemToDispatch: activeSlideInfo,
            },
            {
              type: "link",
              text: "Learn more",
              linkTo: `/planets/${activeSlideInfo?.slug}`,
            },
          ]}
          // text={["Add To Cart", "Learn More"]}
          // linkTo={`/planets/${activeSlideInfo?.slug}`}
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
