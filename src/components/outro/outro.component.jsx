import React from "react";

import Button from "../../components/button/button.component";

import "./outro.styles.scss";

const Outro = () => {
  return (
    <div className="outro">
      <div className="outro__wrapper" />
      <video
        className="outro__video"
        autoPlay="autoplay"
        muted
        loop
        // playsinline
      >
        <source src="./media/outro.mp4" type="video/mp4" />
      </video>
      <div className="outro__context">
        <h3>About to launch</h3>
        {/* <h3>Be ready</h3> */}
        <Button text={["Be ready now"]} />
      </div>
    </div>
  );
};

export default Outro;
