import React from "react";

import Box3d from "../box3d/box3d.component";

import { Link, useRouteMatch } from "react-router-dom";

import "./collectionThumbnail.styles.scss";

const CollectionThumbnail = ({ props }) => {
  const match = useRouteMatch();

  // console.log(match.url, props);
  return (
    <div className="collection-thumb">
      <Link
        to={`${match.url}/${props.slug}`}
        className="collection-thumb__content"
      >
        <Box3d props={props} />
        {/* <img className={props.name} alt={props.name} src={props.image} />
        <h3 className="collection-thumb__text">{props.name}</h3> */}
      </Link>
    </div>
  );
};

export default CollectionThumbnail;
