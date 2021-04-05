import React from "react";
import "./collectionThumbnail.styles.scss";

import { Link, useRouteMatch } from "react-router-dom";

const CollectionThumbnail = ({ props }) => {
  const match = useRouteMatch();

  // console.log(match.url, props);
  return (
    <div className="collection-thumb">
      <Link
        to={`${match.url}/${props.slug}`}
        className="collection-thumb__content"
      >
        <img className={props.name} alt={props.name} src={props.image} />
        <h3 className="collection-thumb__text">{props.name}</h3>
      </Link>
    </div>
  );
};

export default CollectionThumbnail;
