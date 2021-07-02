import React, { useEffect, useState, useRef } from "react";

import Button from "../../components/button/button.component";

import { connect } from "react-redux";

import "./listPreview.styles.scss";

const ListPreview = ({ activeStarship }) => {
  const [urls, setUrls] = useState({ imgLow: "", imgHigh: "" });
  const imgRef = useRef();

  //! Set urls state
  useEffect(() => {
    if (!activeStarship?.image) return;

    setUrls({
      imgLow: `/${activeStarship.image.replace(".png", "_100px.png")}`,
      imgHigh: `/${activeStarship.image}`,
    });
  }, [activeStarship]);

  //! lazy loading image
  useEffect(() => {
    if (!urls.imgHigh) return;

    const imageLoader = new Image();
    imageLoader.src = urls.imgHigh;

    imageLoader.onload = () => {
      imgRef.current.src = urls.imgHigh;
      imgRef.current.classList.remove("lazy-img");
    };
  }, [urls.imgHigh]);

  return (
    <div className="preview">
      <div className="preview__frame" />
      {activeStarship && (
        <img
          ref={imgRef}
          className="lazy-img"
          src={urls?.imgLow}
          alt={activeStarship?.title}
          style={{ tranasform: "translate3d(10px, 20px, 40px)" }}
        />
      )}
      <div className="preview__info">
        <h4 className="preview__title">{activeStarship?.title}</h4>
        <h5 className="preview__description">{activeStarship?.description}</h5>
        <Button
          content={[
            {
              type: "addStarship",
              text: "Add to journey",
              itemToDispatch: activeStarship,
            },
            {
              type: "link",
              text: "Learn more",
              linkTo: `/starships/${activeStarship?.slug}`,
            },
          ]}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeStarship: state.starships.activeStarship,
});

export default connect(mapStateToProps)(ListPreview);

// text={["Add to journey", "Learn more"]}
// linkTo={`/starships/${activeStarship?.slug}`}
