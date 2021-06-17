import React, { useState, useEffect, useRef } from "react";

import Button from "../button/button.component";

import "./box3d.styles.scss";

const Box3d = ({ props }) => {
  // console.log("🍋 box3d props:", props);

  const [frontImgUrls, setFrontImgUrls] = useState("");
  const imgRef = useRef();
  // const [bgImgUrls, setbgImgUrls] = useState("");
  // const bgImgRef = useRef();

  useEffect(() => {
    if (!props?.collectionThumb) return;
    // if (!props?.collectionThumb || !props?.featureImage) return;

    // const imgExtension = props.category === "planets" ? ".jpeg" : ".png";

    setFrontImgUrls({
      imgLow: `${
        process.env.REACT_APP_API_BASE_URL
      }/${props.collectionThumb.replace(".png", "_100px.png")}`,
      imgHigh: `${process.env.REACT_APP_API_BASE_URL}/${props.collectionThumb}`,
    });

    // setbgImgUrls({
    //   imgLow: `${
    //     process.env.REACT_APP_API_BASE_URL
    //   }/${props.featureImage.replace(imgExtension, `_100px${imgExtension}`)}`,
    //   imgHigh: `${process.env.REACT_APP_API_BASE_URL}/${props.featureImage}`,
    // });
  }, [props.collectionThumb, props.featureImage, props.category]);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = frontImgUrls.imgHigh;

    imageLoader.onload = () => {
      imgRef.current.src = frontImgUrls.imgHigh;
      imgRef.current.classList.remove("lazy-img");
    };
  }, [frontImgUrls.imgHigh]);

  // useEffect(() => {
  //   const bgImageLoader = new Image();
  //   bgImageLoader.src = bgImgUrls.imgHigh;

  //   bgImageLoader.onload = () => {
  //     bgImgRef.current.style.backgroundImage = `url(${bgImgUrls.imgHigh})`;
  //     bgImgRef.current.classList.remove("lazy-img");
  //   };
  // }, [bgImgUrls.imgHigh]);

  return (
    <div>
      <div className="box3d__wrapper">
        <div
          className={`box3d__card ${
            props.category === "starships" ? "card__starship" : ""
          }`}
        >
          <div className="front">
            <h1>{props.title}</h1>
            <p>
              {props.subtitle}
              {/* <span>2018</span> */}
            </p>
            <p className="price">${props.price}</p>
            <div className="img-wrapper">
              <img
                ref={imgRef}
                src={frontImgUrls?.imgLow}
                alt={`${props.title}-collection-thumb`}
                className="lazy-img"
              />
            </div>
          </div>

          <div
            // ref={bgImgRef}
            className="right"
            style={{
              backgroundImage: `linear-gradient(
                   0deg,
                   rgba(0, 0, 0, 0.9) 0%,
                   rgba(0, 0, 0, 0) 100%
                 ),url(${process.env.REACT_APP_API_BASE_URL}/${props.featureImage})`,
            }}
            // style={{
            //   backgroundImage: `linear-gradient(
            //     0deg,
            //     rgba(0, 0, 0, 0.219) 0%,
            //     rgba(0, 0, 0, 0) 100%
            //   ),url(${bgImgUrls.imgLow})`,
            // }}
          >
            {/* <h2>{props.title}</h2> */}
            <ul>
              {props.feature?.map((el) => (
                <li key={`list-${el.subject}`}>{el.subject}</li>
              ))}
            </ul>
            <Button
              content={[
                {
                  text: "learn more",
                  type: "link",
                  linkTo: `/${props.category}/${props.slug}`,
                },
              ]}
              // style={{
              //   "--bg-color": "rgb(12, 12, 12)",
              //   "--font-color-hover": "black",
              // }}
            />
          </div>
        </div>
        {/* <div className="img-wrapper">
          <img
            src={props.collectionThumb}
            alt={`${props.title}-collection-thumb`}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Box3d;
