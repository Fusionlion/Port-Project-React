import React from "react";
import styled from "styled-components";
// import ProgressBar from "./ProgressBar";
import { useState } from "react";
import ProgressBar from "../buttons/ProgressBar";
import RowProgress from "./RowProgress";
function CourseLessonRow(props) {
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
    <Card
      src={props.imageSrc}
      updateProgress={props.updateProgress}
      onClick={handleStartClick}
    >
      <div className="number">{props.num ?? 0}</div>
      <Text>
        <div className="row-title">{props.title}</div>

        <div className="row-desc ">
          {props.desc ?? "This is some placejolder text"}
        </div>

        {!props.buttonOff && (
          <div className="start-btn" onClick={handleStartClick}>
            {props.updateProgress > 0 ? "in-progress." : "START"}
          </div>
        )}

        <RowProgress
          progressValue={props.updateProgress}
          onProgressChange={handleProgressChange}
          size={lessonLength}
        />

        {/* <div className="start-and-end">
          <div className="start">[{props.updateProgress ?? "0"}]</div>
          <div className="start">|{lessonLength}|</div>
        </div> */}
      </Text>
    </Card>
  );
}
export default CourseLessonRow;

const Card = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: start;
  position: relative;
  border-radius: 12px;
  background-color: ${(props) =>
    props.updateProgress > 0 ? "#0c0c0c" : "none"};
  overflow: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 5px 20px;
  border: 1px solid #201e1ead;
  padding: ${(props) => (props.updateProgress > 0 ? "12px 15px" : "17px 15px")};
  backdrop-filter: blur(33px);
  margin-bottom: 10px;
  cursor: pointer;

  @media screen and (min-width: 999px) {
    position: relative;
    display: grid;
    grid-template-columns: 46px auto;
    gap: 10px;
    width: 100%;
    min-width: 485px;
    min-height: 131px;
    padding: 10px;
    border-radius: 16px;
    flex: 1;
  }

  .number {
    font-size: xxx-large;
    font-family: "ACCELERARE";
    min-width: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: blue; */
    height: 56px;
    font-size: 40px;

    @media screen and (min-width: 999px) {
      font-size: 60px;
    }
  }
  .icon-and-title {
    display: flex;
    gap: 10px;
    justify-content: end;
    align-items: center;
  }

  .row-title {
    font-size: 18px;
    color: white;
  }
  .row-desc {
    font-size: 10px;
    color: white;
    padding-top: 5px;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.8;
    @media screen and (min-width: 999px) {
      font-style: normal;
      font-size: 15px;
      line-height: 18px;
      font-weight: normal;
      color: gray;
      margin: 0px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .icon-and-desc {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: end;
  }
`;
const ProjectCardStyle = styled.div`
  .number {
    color: white;
    width: 18px;
  }
`;
const Text = styled.div`
  padding: 0px 10px;
  z-index: 3;

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
