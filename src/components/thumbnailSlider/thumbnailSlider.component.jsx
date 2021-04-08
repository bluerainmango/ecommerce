import React, { useEffect } from "react";

import { connect } from "react-redux";
import { nextThumbnail, defaultThumbnail } from "../../redux/page/page.action";

import "./thumbnailSlider.styles.scss";

const ThumbnailSlider = (props) => {
  const { planet, nextThumbnail, defaultThumbnail, thumbnailIndex } = props;

  // Default thumbnail index
  useEffect(() => {
    defaultThumbnail();
  }, [defaultThumbnail]);

  const handleClick = (e) => {
    e.preventDefault();

    nextThumbnail(planet.thumbnails.length);
  };

  return (
    <div className="thumbnailSlider">
      <button onClick={handleClick} className="thumbnail__btn">
        &lang;
      </button>
      <div className="thumbnails">
        {planet?.thumbnails.map((thumbnail, i, arr) => {
          let transformX = 0;
          let opacity = 1;
          let zIndex = 1;

          if (thumbnailIndex === i) {
            opacity = 0;
            zIndex = -10;
            transformX = -1;
          }

          if (thumbnailIndex === 0) {
            transformX = i - 1;
          }

          if (i < thumbnailIndex) {
            transformX = arr.length - thumbnailIndex + i - 1;
          }

          if (i > thumbnailIndex) {
            transformX = i - thumbnailIndex - 1;
          }

          return (
            <div className="thumbnail" key={i}>
              <img
                className="thumbnail__img"
                alt={`${planet.title} thumbnail`}
                src={thumbnail}
                style={{
                  "--x": transformX,
                  "--opacity": opacity,
                  "--zIndex": zIndex,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  thumbnailIndex: state.pages.thumbnailIndex,
});

const mapDispatchToProps = (dispatch) => ({
  nextThumbnail: (numOfThumbnail) => {
    dispatch(nextThumbnail(numOfThumbnail));
  },
  defaultThumbnail: () => {
    dispatch(defaultThumbnail());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ThumbnailSlider);
