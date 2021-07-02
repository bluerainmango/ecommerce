import React, {
  useEffect,
  useRef,
  createRef,
  useState,
  useCallback,
} from "react";

import StarshipIntro from "../starshipIntro/starshipIntro.component";
import Benefit from "../benefit/benefit.component";
import Highlight from "../highlight/highlight.component";

import "./starshipContainer.styles.scss";

const StarshipContainer = ({ starship }) => {
  const starshipRef = useRef();
  const highlightRef = createRef();
  const containerRef = useRef();

  const [y, setY] = useState(window.scrollY);
  const [scrollDir, setScrollDir] = useState("scroll down");

  //! Detect scroll up & down - solution 2
  //   useEffect(() => {
  //     //threshold: 0 => instant calculate when scrolling
  //     const threshold = 1;
  //     let lastScrollY = window.pageYOffset;
  //     let ticking = false;

  //     console.log("🧀 pageYoffset", lastScrollY);

  //     const updateScrollDir = () => {
  //       const scrollY = window.pageYOffset;

  //       // if there is no enough movement, return
  //       if (Math.abs(scrollY - lastScrollY) < threshold) {
  //         ticking = false;
  //         return;
  //       }

  //       // set scroll direction
  //       setScrollDir(scrollY > lastScrollY ? "scroll down" : "scroll up");
  //       lastScrollY = scrollY > 0 ? scrollY : 0;
  //       ticking = false;
  //     };

  //     const onScroll = () => {
  //       // requestAnimationFrame(): similar to setInterval() but it calculates after the page gets rendered completely after scroll.
  //       if (!ticking) {
  //         window.requestAnimationFrame(updateScrollDir);
  //         ticking = true;
  //       }
  //     };

  //     window.addEventListener("scroll", onScroll);
  //     // console.log(scrollDir);
  //     console.log("🫒 ", scrollDir);

  //     return () => window.removeEventListener("scroll", onScroll);
  //   }, [scrollDir]);

  //! Detect scroll up & down - solution 1
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;

      if (y > window.scrollY) {
        setScrollDir("scroll up");
      } else if (y < window.scrollY) {
        setScrollDir("scroll down");
      }

      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  //! When starship hits highlight comp, it goes back to header(remove fixed).
  useEffect(() => {
    const backToTop = (entries, observer) => {
      const [entry] = entries;
      const starshipDOM = starshipRef.current;

      if (!entry.isIntersecting) return;
      //   console.log("🍒", entry);

      const position = starshipDOM.style.getPropertyValue("position");

      // console.log("🥑 ", scrollDir);

      if (position === "fixed" && scrollDir === "scroll down") {
        starshipDOM.style.setProperty("position", "absolute");
      } else if (position === "absolute" && scrollDir === "scroll up") {
        starshipDOM.style.setProperty("position", "fixed");
      }

      observer.unobserve(entry.target);
    };

    const starshipObserver = new IntersectionObserver(backToTop, {
      root: null,
      threshold: 0.6,
      rootMargin: "-250px 0px -250px 0px",
    });

    starshipObserver.observe(highlightRef.current);
  }, [highlightRef, starshipRef, scrollDir]);

  //! Only when refresh page in the top of the page, show starship
  useEffect(() => {
    // console.log("🍍", window.scrollY);
    if (window.scrollY === 0)
      starshipRef.current.style.setProperty("position", "fixed");
  }, []);

  return (
    <div ref={containerRef} className="starshipContainer">
      <div className="starship__imgbox">
        {/* {console.log("😍 starship: ", starship)} */}
        <img
          ref={starshipRef}
          className="starship__img"
          src={`/${starship.image}`}
          alt="starship"
          style={{ position: "absolute" }}
        />
      </div>
      <StarshipIntro starship={starship} />
      <Benefit starship={starship} />
      <Highlight ref={highlightRef} starship={starship} />
    </div>
  );
};

export default StarshipContainer;
