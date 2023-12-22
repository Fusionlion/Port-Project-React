import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import FooterSection from "./FooterSection";

export default function CourseRawIde(props) {
  const data = require("../../data/projectDetailData.json"); // Import your JSON
  const bottomRef = useRef(null);
  const lessonRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [renderedItems, setRenderedItems] = useState([]);
  const [isImageLoaded, setImageLoaded] = useState(true);
  const contentRef = useRef(null);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(false); // Handle image loading error
  };

  const handleNextButtonClick = () => {
    // Update the index to show the next item
    const newIndex = Math.min(
      currentIndex + 1,
      data[props.title.toUpperCase()].length - 1
    );
    setCurrentIndex(newIndex);

    // Append the new item to the rendered items array
    setRenderedItems((prevItems) => [
      ...prevItems,
      renderContent(data[props.title.toUpperCase()][newIndex]),
    ]);
      
       // Scroll to the bottom
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  };

 

  const handlePrevButtonClick = () => {
    // Update the index to show the previous item
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));

    // Remove the last item from the rendered items array
    setRenderedItems((prevItems) => prevItems.slice(0, -1));

    // Scroll to the bottom
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  };


  useEffect(() => {
    // Scroll to the bottom when the index changes
    if (lessonRef.current) {
      lessonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [renderedItems]);

  const renderContent = (item) => {
    if (!item) {
      // Handle the case when there's no data
      return <p>No data found</p>;
    }

    switch (item.type) {
      case "title":
        return (
          <div key={currentIndex} className="title">
            <h3>{item.content.subtitle}</h3>
            <h1>{item.content.title}</h1>
          </div>
        );

      case "parallax":
        return (
          <div
            key={currentIndex}
            className="parallax-one"
            style={{ backgroundImage: `url(${item.projectUrl})` }}
          >
            <h2>{item.content}</h2>
          </div>
        );

      case "text":
        return (
          <div key={currentIndex} className="block">
            {currentIndex < 2 && (
              <p>
                <span className="first-letter">{item.content.charAt(0)}</span>
                {item.content.slice(1)}
              </p>
            )}
            {currentIndex >= 2 && (
              <p>
                {item.content}
              </p>
            )}
          </div>
        );

      case "image":
        return (
          <ArticleImageWrapper key={currentIndex}>
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
          <div key={currentIndex} className="image-grid">
            {imageUrls.map((imageUrl, imageIndex) => (
              <GridImageWrapper key={imageIndex}>
                {!isImageLoaded && <LoadingCircle>Loading...</LoadingCircle>}
                <GridImage
                  src={imageUrl}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </GridImageWrapper>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <div className="content" ref={contentRef}>
        {renderedItems}
        <br />
        <br />
        <div ref={bottomRef} style={{ height: "1px", marginBottom: "-1px" }} />
      </div>

      <div className="ide-buttons-right">
        {currentIndex > 1 && (
          <button
            className="next-ide-btn"
            onClick={handlePrevButtonClick}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
        )}
        {currentIndex != data[props.title.toUpperCase()].length - 1 && (
          <button
            className="next-ide-btn"
            onClick={handleNextButtonClick}
            disabled={
              currentIndex === data[props.title.toUpperCase()].length - 1
            }
          >
            {currentIndex < 1 ? "Start" : "Next"}
          </button>
        )}

        <button
          className="next-ide-btn"
          disabled={currentIndex === data[props.title.toUpperCase()].length - 1}
        >
          {currentIndex}/{data[props.title.toUpperCase()].length - 1}
        </button>
      </div>

      {/* ide background video ------------------------- */}
      {currentIndex == 0 && (
        <Video autoPlay loop muted>
          <source src="/images/my-svg/backvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      )}

      {/* Your other content goes here */}
    </Wrapper>
  );
}
const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 4;
  /* filter: blur(5px); */
  border-radius: 24px;
`;
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
  background-color: #000;
  z-index: 6;
  color: white;
  border-radius: 24px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  flex-direction: column;
  overflow: hidden;
  display: flex;
  height: 482px;
  width: 658px;
  padding: 20px;
  font-size: 20px;
  font-family: "Spline Sans Mono", sans-serif;
  position: relative;
  border: 1px #3f3939 solid;
  .content {
    overflow: scroll;
    margin-bottom: 42px;
  }
  .ide-buttons-right {
    display: flex;
    gap: 10px;
    padding: 10px;
    position: absolute;
    margin: 5px 10px;
    bottom: 0;
    right: 0;
    z-index: 5;
  }
  .next-ide-btn {
    border-radius: 7px;
    padding: 10px;
    border: #483f3f 1px solid;
    cursor: pointer;
    background-color: black;
    color: wheat;
  }
  .image-grid {
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    padding: 19px 2px 19px 2px; */
    display: flex;
    justify-content: space-between;
    border-radius: 20px;

    justify-content: space-between;
    width: 100%;
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
    /* padding: 60px; */
    padding: 20px 0px;
    text-align: justify;
    color: aliceblue;
    border-top: #c486604f 1px solid;

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
    padding-top: 102px;
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
