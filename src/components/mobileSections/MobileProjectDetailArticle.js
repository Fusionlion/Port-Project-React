import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import FooterSection from "../sections/FooterSection";
import { useState } from "react";
import PictureComponent from "./PictureComponent";

export default function MobileProjectDetailArticle(props) {
  const datas =
    props.data?.article ||
    require("../../data/projectDetailArticleData.json")[0];
  const bottomRef = useRef(null);

  const handleArrowClicked = () => {
    props.arrowClicked();
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Bottom of the component is visible!");
        // Your logic when the bottom is visible
      }
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      // behavior: "smooth", // Add this line for smooth scrolling
    });
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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
    setImageLoaded(true);
  };

  let isFirstItemEncountered = false;
  let sentencesCount = 0;
  let imageList = [];
  const renderContent = () => {
    return datas.map((item, index) => {
      switch (item.type) {
        case "title":
          return (
            <div
              key={index}
              className="projects-top-content"
              style={{ backgroundImage: `url(${props.data.image})` }}
            >
              <div className="blacked"></div>
              <div className="project-top-left">
                <div className="project-title-pt">{props.data.title}</div>
                <div className="project-title">
                  {props.data.subtitle ?? "Project"}
                </div>
                <div className="project-title">{props.data.desc}</div>
              </div>
            </div>
          );

        case "pictures":
          // Add the image URLs to the imageList
          imageList = [...imageList, ...item.content];
          return null; // Don't render anything for the "pictures" type in this context

        case "text":
          const sentencesArray = item.content.split(".");
          const chunkSize = 5;
          let sentences = [];
          let imageCount = 0;
          while (sentencesArray.length > 0) {
            sentences.push(sentencesArray.splice(0, chunkSize).join("."));
          }

          return (
            <>
              {sentences.map((sentence, sentenceIndex) => (
                <React.Fragment key={`sentence-${index}-${sentenceIndex}`}>
                  <p>
                    <span className={sentenceIndex == 0 ? "first-letter" : ""}>
                      {sentence[0]}
                    </span>
                    {sentence.slice(1)}
                  </p>
                  {imageList[sentenceIndex] && (
                    <PictureComponent
                      key={`image-${index}-${sentenceIndex}`}
                      url={imageList[sentenceIndex]}
                      alt={`Image ${index}-${sentenceIndex}`}
                    />
                  )}
                </React.Fragment>
              ))}
            </>
          );

        default:
          return null;
      }
    });
  };

  return (
    <Wrapper>
      <div className="project-arrow" onClick={handleArrowClicked}>
        &#8592;
      </div>

      <div className="content">{renderContent()}</div>

      <br />
      <br />
      <div ref={bottomRef} style={{ height: "1px", marginBottom: "-1px" }} />

      <FooterSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: black;

  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  /* z-index: 99; */
  overflow: scroll;
  z-index: 5;
  @media screen and (min-width: 999px) {
    position: relative;

    height: none;
    width: 100%;
    /* z-index: 99; */

    z-index: none;
    position: relative;
    margin-top: 87px;
    /* left: 0; */
    height: none;
    /* width: 100%; */
    overflow: scroll;
    z-index: none;
    width: 100%;
    border-radius: 12px;
  }
  .content {
    > :nth-child(n + 1) {
      padding: 0px 20px;
      @media screen and (min-width: 999px) {
        padding: 0px 0px;
      }
    }

    > :nth-child(2) {
      /* Your styles here */
    }
  }
  .pic {
    min-width: 177px;
    height: 250px;
  }
  .project-arrow {
    position: absolute;
    padding: 20px;
    color: #ffffff;
    font-size: 34px;
    cursor: pointer;
    z-index: 9;
    top: 78px;
    left: -1px;
    @media screen and (min-width: 999px) {
      top: 9px;
      left: 14px;
      border-radius: 15px;
      backdrop-filter: blur(13px);
    }
  }
  .projects-top-content {
    display: flex;
    justify-content: space-between;
    position: relative;
    background-image: url(/images/my-svg/sea-animals.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom left;
    padding: 0px 30px;
    background-position: left;
    flex-flow: row-reverse;
    text-align: end;
    @media screen and (min-width: 999px) {
      border-radius: 12px;
      overflow: hidden;
      height: 511px;
    }
  }
  .blacked {
    position: absolute;
    background: linear-gradient(to top, black, #00000094, transparent);
    height: 100%;
    width: 100%;
    bottom: -1px;
    left: 0;
    z-index: 0;
  }
  .project-top-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    text-align: center;
    padding: 20px;
    padding-bottom: 35px;
    padding-top: 144px;
    @media screen and (min-width: 999px) {
      width: 100%;
      gap: 10px;
      align-items: center;
      padding-top: 0px;
    }

    > :nth-child(2) {
      font-size: 15px;
      @media screen and (min-width: 999px) {
        font-size: 16px;
      }
    }
    > :nth-child(3) {
      font-size: 15px;
      line-height: initial;
      color: tan;
      @media screen and (min-width: 999px) {
        font-size: 17px;
      }
    }
  }
  .project-title-pt {
    font-family: "cisnero";
    font-size: 52px;
    background: linear-gradient(to left, rgb(218 47 47), white, rgb(0 0 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 5px 9px 11px #00000000, 1px -1px 0px #000000;
    font-weight: normal;
    @media screen and (min-width: 999px) {
      font-size: 82px;
    }
  }
  .project-top-right {
    color: #ffffff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    padding-top: 148px;
    position: absolute;
    right: 0;
  }
  .project-pics {
    display: flex;
    padding: 0px 20px;
    -webkit-box-pack: start;
    justify-content: flex-start;
    gap: 6px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    .pic {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      flex: 1;
      min-width: 177px;
      height: 250px;
      background-color: #000000;
      border-radius: 11px;
      margin-bottom: 8px;
      border: 1px solid #060606;
    }
  }
  .project-title {
    font-size: 54px;
    margin-bottom: 10px;
  }

  .project-right-number {
    font-size: 18px;
    font-weight: bold;
  }

  .project-right-line {
    width: 2px;
    background-color: #ffffff;
    margin: 5px 0;
    height: 100px;
  }
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
    margin-top: 15px;
    color: white;
    text-align: justify;
    @media screen and (min-width: 999px) {
      font-size: 17px;
      line-height: 1.9;
      margin: 40px 0px;
    }
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
    /* border-top: #c48660 1px solid; */
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
