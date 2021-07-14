import React, { useRef, useEffect, useState } from "react";

// import { connect } from "react-redux";
// import { toggleIsLoading } from "../../redux/page/page.action";

import Spinner from "../spinner/spinner.component";

import "./header.styles.scss";

const Header = () => {
  const scrollIndicatorRef = useRef();
  const scrollToRef = useRef();
  const videoRef = useRef();

  const [isLoading, setIsLoading] = useState(true);

  //! smooth scrolling to next section
  useEffect(() => {
    const scrollIndicatorDOM = scrollIndicatorRef.current;
    const scrollToDOM = scrollToRef.current;

    // console.log(scrollIndicatorDOM, scrollToDOM);

    const handleScroll = (e) => {
      e.preventDefault();

      scrollToDOM.scrollIntoView({ behavior: "smooth" });
    };

    scrollIndicatorDOM?.addEventListener("click", handleScroll);
  }, []);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     console.log("🐸 ", videoRef.current, isLoading);

  //     if (!isLoading) videoRef.current.style.display = "none";
  //     // if (!isLoading) videoRef.current.style = { display: "none" };
  //   }
  // }, [isLoading]);

  useEffect(() => {
    // const videoRefDOM = videoRef.current
    if (!videoRef.current) return;

    // console.log("😲 muted:", videoRef.current.getAttribute("muted"));

    if (!videoRef.current.getAttribute("muted")) {
      videoRef.current.setAttribute("muted", true);
      videoRef.current.setAttribute("defaultMuted", true);
    }

    // console.log("😲 muted2:", videoRef.current.getAttribute("muted"));
  });

  return (
    <section className="header">
      <div className="header__wrapper" />
      {/* <div ref={videoRef} className="loader" />*/}
      {isLoading && (
        <Spinner style={{ "--colorSpinner": "#fff", "--colorText": "#fff" }} />
      )}
      {/* {true && <Spinner />} */}
      <video
        className="header__video"
        autoPlay="autoplay"
        muted // muted is not automatically applied to browser(React's unsolved problem). So will use useEffect to set attribute manually.
        playsInline
        loop
        ref={videoRef}
        // onLoadStart={() => {
        //   console.log("🦑 loading start");
        // }}
        onCanPlay={() => {
          // console.log("👻 loading finished");
          setIsLoading(false);
        }}
      >
        <source src="./media/2.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="header__content">
        <h1>Welcome To Your Dreamy Journey</h1>
      </div>
      <div ref={scrollIndicatorRef} className="scroll-indicator">
        <a href="#section-banner">
          <span className="scroll-icon"></span>
          <span>Scroll</span>
        </a>
      </div>
      <div ref={scrollToRef} className="scrollTo"></div>
    </section>
  );
};

// const mapStateToProps = (state) => ({
//   isLoading2: state.pages.isLoading,
// });

// const mapDispatchToProps = (dispatch) => ({
//   toggleIsLoading: () => dispatch(toggleIsLoading()),
// });

// export default connect(null, mapDispatchToProps)(Header);
export default Header;
