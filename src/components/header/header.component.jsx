import React from "react";
import "./header.styles.scss";

const Header = () => {
  //   const videoRef = useRef();

  //   useEffect(() => {
  //     videoRef.playbackRate = 0.5;
  //   }, [videoRef]);

  return (
    <div className="header">
      <video
        className="header__video"
        autoPlay="autoplay"
        muted
        loop
        // playsinline
      >
        <source src="./media/2.mp4" type="video/mp4" />
      </video>
      <div className="header__content">
        <h1>Welcome To Your Dreamy Journey</h1>
      </div>
    </div>
  );
};

export default Header;
