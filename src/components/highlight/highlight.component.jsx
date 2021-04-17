import React, { forwardRef } from "react";

import "./highlight.styles.scss";

const Highlight = forwardRef(({ starship }, ref) => (
  <div ref={ref} className="highlight">
    <div className="highlight__imgbox">
      <img src={starship.cockpitImage} alt="starship-cockpit" />
    </div>
    <div className="highlight__textbox">
      <h2>{`${starship.description}`}</h2>
      <p>{starship.descriptionLong}</p>
    </div>
  </div>
));

export default Highlight;
