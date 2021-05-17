import React from "react";

import Button from "../../components/button/button.component";

import { connect } from "react-redux";

import "./listPreview.styles.scss";

const ListPreview = (props) => {
  const { activeStarship } = props;

  return (
    <div className="preview">
      <div className="preview__frame" />
      {activeStarship && (
        <img
          src={`${process.env.REACT_APP_API_BASE_URL}/${activeStarship.image}`}
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
