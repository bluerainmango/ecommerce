import React, { useEffect, useRef } from "react";

import Button from "../../components/button/button.component";

import "./outro.styles.scss";

const Outro = () => {
  const videoRef = useRef();

  useEffect(() => {
    const videoRefDOM = videoRef.current;
    if (!videoRefDOM) return;

    if (!videoRefDOM.getAttribute("muted")) {
      videoRefDOM.setAttribute("muted", true);
      videoRefDOM.setAttribute("defaultMuted", true);
    }
  });

  return (
    <div className="outro">
      <div className="outro__wrapper" />
      <video
        className="outro__video"
        autoPlay="autoplay"
        muted
        loop
        playsInline
        ref={videoRef}
      >
        <source src="./media/outro.mp4" type="video/mp4" />
      </video>
      <div className="outro__context">
        <h3>About to launch</h3>
        {/* <h3>Be ready</h3> */}
        <Button
          content={[
            {
              type: "link",
              text: "fly now",
              linkTo: `/checkout`,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Outro;
