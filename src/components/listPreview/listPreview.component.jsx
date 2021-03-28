import React from "react";

import "./listPreview.styles.scss";

const ListPreview = ({ starship }) => {
  return (
    <div className="list__preview">
      <img src={starship.image} alt={starship.name}></img>
    </div>
  );
};

export default ListPreview;
