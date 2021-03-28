import React from "react";

import "./listElement.styles.scss";

const ListElement = ({ starship }) => {
  return (
    <div className="list__element">
      <img src={starship.image} alt={starship.name} />
    </div>
  );
};

export default ListElement;
