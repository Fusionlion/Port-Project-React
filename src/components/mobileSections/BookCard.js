import React from "react";
import styled from "styled-components";
// import ProgressBar from "./ProgressBar";
import { useState } from "react";
import ProgressBar from "../buttons/ProgressBar";
function BookCard(props) {
  const [progressValue, setProgressValue] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [titleClicked, setTitleClicked] = useState("");

  // give dummy data if no data found
  // SHOW the number of sentences

  let lessonLength;

  if (props.size) {
    lessonLength = props.size.split(".").length;
  } else {
    // Handle the case when props.size is undefined
    lessonLength = 0; // or any default value you prefer
  }
  // WEHEN START IS CLICKED ON THE CARD
  const handleStartClick = () => {
    setIsStarted(true);

    // SEND UP THE TITLE THAT WAS CLICKED
    setTitleClicked(props.title);

    // SEND A MESSAGE UP THAT CARD START WAS CLICKED
    props.click();
    setProgressValue(progressValue + 10);
    // Simulate progrepross increase over time

    // this should be ONNN
    // if (props.title.toUpperCase().toUpperCase() in data) {
    //   setProgressValue(true);
    // }
  };
  const handleProgressChange = (newProgress) => {
    setProgress(newProgress);
    // Do something with the new progress value in the parent component
    // console.log("Progress changed:", newProgress);
  };
  return (
    <Card src={props.imageSrc}>
      <ProjectCardStyle
        onClick={props.tapped}
        src={props.imageSrc}
      ></ProjectCardStyle>
      <div className="linear"></div>
      <Content>
        <Title
          style={{ fontFamily: props.cardFont, fontSize: props.titleSize }}
        >
          {props.title}
        </Title>
        <Desc2>
          {props.desc2 ??
            "Explore the fundamentals of Java from a beginner's perspective."}
        </Desc2>
        <div className="desc">Z.CHARLES</div>

        {!props.buttonOff && (
          <div className="start-btn" onClick={handleStartClick}>
            {props.updateProgress > 0 ? "in-progress." : "START"}
          </div>
        )}

        <ProgressBar
          progressValue={props.updateProgress}
          onProgressChange={handleProgressChange}
          size={lessonLength}
        />

        <div className="start-and-end">
          <div className="start">[{props.num ?? "0"}]</div>
          <div className="start">|{lessonLength}|</div>
        </div>
      </Content>
    </Card>
  );
}
export default BookCard;
const Desc2 = styled.div`
  line-height: 1.2;
  font-size: x-small;
  position: relative;
  top: -43px;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: hidden;
`;
const Content = styled.div`
  padding: 10px 10px;
  z-index: 3;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  .start-btn {
    border-radius: 20px;
    border: #343434 1px solid;
    /* width: 200px; */
    /* height: 50px; */
    color: ${(props) => (props.buttonLabel ? "white" : "gray")};
    text-align: center;
    margin: 13px 25px;
    padding: 10px 0px;
    cursor: pointer;
    transition: linear 0.2s;
  }
  .start-btn:hover {
    background-color: black;
    transition: linear 0.2s;
    transform: scale(1.02);
  }
  .start-and-end {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }
  .start {
    color: white;
    padding: 10px;
    transition: linear 0.2s;
  }
`;
const Card = styled.div`
  /* width: 250px; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 10px;
  position: relative;
  border-radius: 17px;
  flex: 1;
  min-width: 172px;
  overflow: hidden;
  border: solid 1px #1c1b1b91;
  background-image: url(${(props) =>
    props.src || "/images/my-svg/falling-rocks.svg"});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  cursor: pointer;
  transition: linear 0.2s;
  /* border-radius: 17px; */
  position: relative;
  .linear {
    /* position: absolute;
    height: 100%;
    width: 100%;
    /* z-index: 2; */
    /* backdrop-filter: blur(13px);
    background-image: linear-gradient(#ff000000, #000000, #242420);
    border-radius: 17px;
    border: 1px solid #0d0c0c;  */
    /* position: absolute;
    height: 120px;
    width: 100%;
    background-image: url(${(props) =>
      props.svg ||
      "https://parspng.com/wp-content/uploads/2022/01/birdpng.parspng.com-7.png"});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 17px;
    bottom: 0;
    z-index: 2; */
  }
  .icon-and-title {
    display: flex;
    gap: 10px;
    justify-content: end;
    align-items: center;
  }

  .title {
    text-align: center;
    font-size: 52px;
    text-transform: uppercase;
    font-weight: bold;
    margin: 20px 0;
    font-family: ${(props) => props.cardFont};
    background: linear-gradient(to right, rgb(255 255 255), rgb(235 15 15));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px -1px 0px #00000000, 1px -1px 0px #151417;
    margin-top: 10px;
  }
  .desc {
    font-size: 14px;
    color: white;
    /* padding-top: 5px; */
    width: 100%;
    /* display: -webkit-box; */
    /* -webkit-line-clamp: 7; */
    -webkit-box-orient: vertical;
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    line-height: 1.8;
    text-align: center;
    /* background: black; */
    position: absolute;
    left: 0;
    bottom: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    backdrop-filter: blur(6px);
    border-top: #646464 1px solid;
    border-bottom: #454749 1px solid;
  }
  .icon-and-desc {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: end;
  }
`;
const Title = styled.div`
  text-align: center;
  font-size: 52px;
  text-transform: uppercase;
  margin: 20px 0;
  font-family: "cisnero";
  background: linear-gradient(to right, rgb(255 255 255), rgb(235 15 15));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px -1px 0px #00000000, 1px -1px 0px #151417;
  margin-top: 10px;
`;
const ProjectCardStyle = styled.div`
  min-width: 172px;
  height: 269px;

  /* background-image: url("/images/my-svg/falling-rocks.svg"); */

  .project-star-icon {
    height: 24px;
    width: 24px;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/2140px-Golden_star.svg.png);
    background-size: cover;
    background-position: center center;
    filter: grayscale(1);
  }
`;
