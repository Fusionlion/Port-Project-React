import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import FooterSection from "./FooterSection";
import { useState } from "react";

export default function AboutArticle(props) {
  const data = require("../../data/projectDetailData.json"); // Import your JSON
  let datas =
    props.data && props.data.length > 0
      ? props.data
      : data["WHAT IS AN ALGORITHM?"];
  console.log("myne " + datas ?? "no data");
  console.log("works " + data ?? "no data");
  const bottomRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Bottom of the component is visible!");
        // Your logic when the bottom is visible
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value based on your requirement
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, []);
  const [isImageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(true); // Handle image loading error
  };
  let isFirstItemEncountered = false;
  const renderContent = () => {
    let isParallaxEncountered = false;

    return datas.map((item, index) => {
      switch (item.type) {
        case "title":
          return (
            <div key={index} className="title">
              <h3>{item.content.subtitle}</h3>
              <h1>{item.content.title}</h1>
            </div>
          );

        case "parallax":
          isParallaxEncountered = true;
          return (
            <div
              key={index}
              className="parallax-one"
              style={{ backgroundImage: `url(${item.projectUrl})` }}
            >
              <h2>{item.content}</h2>
            </div>
          );

        case "text":
          if (!isFirstItemEncountered) {
            isFirstItemEncountered = true;
            return (
              <div key={index} className="block">
                <p>
                  <span className="first-letter">{item.content.charAt(0)}</span>
                  {item.content.slice(1)}
                </p>
              </div>
            );
          }
          return <p key={index}>{item.content}</p>;

        case "image":
          return (
            <ArticleImageWrapper>
              {!isImageLoaded && <LoadingCircle>Loading...</LoadingCircle>}
              <ArticleImage
                src={item.content}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </ArticleImageWrapper>
          );

        case "grid":
          const imageUrls = item.content || [];
          return (
            <div key={index} className="image-grid">
              <div className="main-image">
                {!isImageLoaded && <LoadingCircle>Loading...</LoadingCircle>}
                <GridImage
                  src={imageUrls[0]} // Use the first image as the main image
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </div>

              {imageUrls.slice(1).map((imageUrl, imageIndex) => (
                <div key={imageIndex} className="sub-image">
                  {!isImageLoaded && <LoadingCircle>Loading...</LoadingCircle>}
                  <GridImage
                    src={imageUrl}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                </div>
              ))}
            </div>
          );

        default:
          return null;
      }
    });
  };

  return (
    <Wrapper>
      {renderContent()}
      <br />
      <br />
      <div ref={bottomRef} style={{ height: "1px", marginBottom: "-1px" }} />

      <FooterSection />
    </Wrapper>
  );
}
const ArticleImageWrapper = styled.div`
  position: relative;
`;
const GridImageWrapper = styled.div`
  position: relative;
  flex: 1;
`;
const LoadingCircle = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  background-color: black;
  animation: pulsate 2s infinite;
  border: #c48660 1px solid;
  color: white;
  border-radius: 12px;
  height: 100%;
  width: 100%;
  position: absolute;
  gap: 10px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  &:after {
    content: "";
    width: 80px;
    height: 80px;
    color: white;
    border-radius: 50%;
    border: 2px solid #fff;
    border-top: 2px solid red; /* Adjust the color as needed */
    animation: spin 1s linear infinite;
  }
  @keyframes pulsate {
    0% {
      background-color: black;
    }
    50% {
      background-color: #212123;
    }
    100% {
      background-color: black;
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ArticleImage = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  background-color: black;
  margin: 40px 0px;
  width: 100%;
  border-radius: 12px;
`;
const GridImage = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: black;
  margin: 40px 0px;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  border: 1px #c4866090 solid;
  transform: scale(0.9, 0.9);
  border-radius: 20px;
  transition: 0.4s ease-in-out all;

  &:hover {
    transform: translate3d(0px, 0px, -250px);
    border: 1px gray solid;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  background-color: black;
  padding: 0px 30px;
  .image-grid {
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    padding: 19px 2px 19px 2px; */
    /* display: flex;
    justify-content: space-between;
    border-radius: 20px;

    justify-content: space-between; */
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .main-image {
    display: flex;
  }
  .sub-image {
  }
  .sc {
    color: #3b8595;
  }
  .ny {
    color: #3d3c3a;
  }
  .atw {
    color: #c48660;
  }
  .first-letter {
    font-weight: 400;
    float: left;
    color: orange;
    font-size: 84px;
    line-height: 64px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
    font-family: "Source Sans Pro", sans-serif;
  }
  h1 {
    font-family: "Spline Sans Mono", sans-serif;
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
    color: white;
    padding: 0;
    margin: 0;
  }

  h2 {
    font-family: "Pixel12x10", sans-serif;
    font-size: 70px;
    letter-spacing: 10px;
    text-align: center;
    color: white;
    font-weight: 400;
    text-transform: uppercase;
    z-index: 10;
    opacity: 0.9;
  }

  h3 {
    font-family: "Spline Sans Mono", sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 8px;
    text-transform: uppercase;
    color: white;
  }

  p {
    font-family: "Spline Sans Mono", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 15px;
    color: white;
  }
  .title {
    background: #000000;
    padding: 60px;
    margin: 0 auto;
    text-align: center;
    font-size: 35px;
    letter-spacing: 8px;
    font-family: "Spline Sans Mono", sans-serif;
  }
  .title h1 {
    font-size: 35px;
    letter-spacing: 8px;
    font-family: "Spline Sans Mono", sans-serif;
  }
  .block-gray {
    background: #f2f2f2;
    padding: 60px;
  }
  block {
    color: white;
  }
  .block {
    background: linear-gradient(
      to bottom,
      #0c0f2000,
      transparent,
      transparent,
      transparent
    );
    padding: 60px;
    padding: 60px 0px;
    text-align: justify;
    color: aliceblue;
    border-top: #c48660 1px solid;
    /* border-bottom: #faebd71a 1px solid; */
  }

  .section-overlay-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
  }
  .line-break {
    border-bottom: 1px solid black;
    width: 150px;
    margin: 0 auto;
  }

  .parallax-one {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    background-image: url("/images/my-svg/undersea.svg");
    background-size: contain;
    -moz-background-size: contain;
    -webkit-background-size: contain;
    background-repeat: repeat-x;
    background-position: center;
  }

  .first-character {
    font-weight: 400;
    float: left;
    font-size: 84px;
    line-height: 64px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
    font-family: "Source Sans Pro", sans-serif;
  }
`;
