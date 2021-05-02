import React from "react";
import CollectionThumbnail from "../collectionThumbnail/collectionThumbnail.component";
// import data from "./planets.data.js";

import "./collection.styles.scss";

const Collection = ({ props, title }) => {
  return (
    <div className="collection">
      <h2 className="collection__title">{title}</h2>
      <div className="collection__content">
        {props.map((product) => (
          <CollectionThumbnail key={product.id} props={product} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
