import React from "react";

import { useParams } from "react-router-dom";

function Planet() {
  let { planetID } = useParams();

  console.log("useParam", planetID);
  return <div>this is planet page. id: {planetID}</div>;
}

export default Planet;
