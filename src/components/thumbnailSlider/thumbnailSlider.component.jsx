import React from "react";

import "./thumbnailSlider.styles.scss";

const ThumbnailSlider = ({ planet }) => {
  //   console.log("planet", planet);

  return (
    <div className="thumbnailSlider">
      <div className="thumbnails">
        {planet?.thumbnails.map((thumbnail, i) => {
          return (
            <div className="thumbnail" key={i}>
              <img
                className="thumbnail__img"
                alt={`${planet.title} thumbnail`}
                src={thumbnail}
              />
            </div>
          );
        })}
      </div>
      <button className="thumbnail__btn">&rang;</button>
    </div>
  );
};

export default ThumbnailSlider;
