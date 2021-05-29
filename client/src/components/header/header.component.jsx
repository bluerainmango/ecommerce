import React, { useRef, useEffect, useState } from "react";

import { connect } from "react-redux";
import { toggleIsLoading } from "../../redux/page/page.action";

import Spinner from "../spinner/spinner.component";

import "./header.styles.scss";

const Header = ({ isLoading2 }) => {
  const scrollIndicatorRef = useRef();
  const scrollToRef = useRef();
  // const videoRef = useRef();

  const [isLoading, setIsLoading] = useState(true);

  //! smooth scrolling to next section
  useEffect(() => {
    const scrollIndicatorDOM = scrollIndicatorRef.current;
    const scrollToDOM = scrollToRef.current;

    console.log(scrollIndicatorDOM, scrollToDOM);

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

  return (
    <section className="header">
      <div className="header__wrapper" />
      {/* <div ref={videoRef} className="loader" />*/}
      {isLoading && <Spinner />}
      <video
        className="header__video"
        autoPlay="autoplay"
        muted
        loop
        // onLoadStart={() => {
        //   console.log("🦑 loading start");
        // }}
        onCanPlay={() => {
          console.log("👻 loading finished");
          setIsLoading(false);
        }}
        // playsinline
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

const mapStateToProps = (state) => ({
  isLoading2: state.pages.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  toggleIsLoading: () => dispatch(toggleIsLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
