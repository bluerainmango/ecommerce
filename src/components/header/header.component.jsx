import React, { useRef, useEffect } from "react";

import "./header.styles.scss";

const Header = () => {
  const scrollIndicatorRef = useRef();
  const scrollToRef = useRef();

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

  return (
    <section className="header">
      <div className="header__wrapper" />
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
      <div ref={scrollIndicatorRef} className="scroll-indicator">
        <a href="#section-banner">
          <span className="scroll-icon"></span>
          <span>Scroll</span>
        </a>
      </div>
      <div ref={scrollToRef} className="scrollTo"></div>
      {/* <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </section>
  );
};

export default Header;
