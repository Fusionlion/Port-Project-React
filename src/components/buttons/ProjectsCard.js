import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
function ProjectsCard(props) {
  const [progressValue, setProgressValue] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [titleClicked, setTitleClicked] = useState("");



  // give dummy data if no data found
  const data = require("../../data/projectDetailData.json");
  // SHOW THE MODAL

  // WEHEN START IS CLICKED ON THE CARD
  const handleStartClick = () => {
    setIsStarted(true);

    // SEND UP THE TITLE THAT WAS CLICKED
    setTitleClicked(props.title);

    // SEND A MESSAGE UP THAT CARD START WAS CLICKED
    props.click(props.title, props.article ?? data["WHAT IS AN ALGORITHM?"]);
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
    <Card>
      <ProjectCardStyle onClick={props.tapped} src={props.imageSrc}>
        <div className="number">{props.num}</div>
      </ProjectCardStyle>
      <div className="linear"></div>
      <Content>
        <div className="title">{props.title}</div>

        <div className="desc">{props.desc}</div>

        <div className="start-btn" onClick={handleStartClick}>
          {progress > 0
            ? "IN-PROGRESS"
            : !progressValue && titleClicked == props.title
            ? "Not Complete"
            : "START"}
        </div>
        <ProgressBar
          progressValue={progressValue}
          onProgressChange={handleProgressChange}
        />
        <div className="start-and-end">
          <div className="start">[{progress}]</div>
          <div className="start">|100|</div>
        </div>
      </Content>
    </Card>
  );
}
export default ProjectsCard;
const Content = styled.div`
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
  }
  .start {
    color: white;
    padding: 10px;
    transition: linear 0.2s;
  }
`;
const Card = styled.div`
  /* width: 250px; */
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 10px;
  position: relative;
  border-radius: 17px;
  flex: 1;
  .linear {
    position: absolute;
    height: 100%;
    width: 100%;
    /* z-index: 2; */
    backdrop-filter: blur(13px);
    /* background-image: linear-gradient(#ff000000, #000000, #242420); */
    border-radius: 17px;
    border: 1px solid #0d0c0c;
  }
  .icon-and-title {
    display: flex;
    gap: 10px;
    justify-content: end;
    align-items: center;
  }

  .title {
    font-size: 18px;
    background: linear-gradient(to right, rgb(255 255 255), rgb(146 73 107));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-transform: uppercase;
    margin-top: 10px;
  }
  .desc {
    font-size: 10px;
    color: white;
    padding-top: 5px;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 16;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.8;
  }
  .icon-and-desc {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: end;
  }
`;
const ProjectCardStyle = styled.div`
  background-color: black;
  min-width: 269px;
  width: 100%;
  height: 303px;
  border-radius: 17px;
  /* background-image: url("/images/my-svg/falling-rocks.svg"); */
  background-image: url(${(props) =>
    props.src || "/images/my-svg/falling-rocks.svg"});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  cursor: pointer;
  transition: linear 0.2s;

  position: relative;

  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 30px;
    height: 30px;
    position: absolute;
    font-size: 24px;
    backdrop-filter: blur(10px);
    backdrop-filter: contrast(0.9);
    color: black;
    border-radius: 60px;

    right: 0;
    margin: 10px;
  }
  .project-star-icon {
    height: 24px;
    width: 24px;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/2140px-Golden_star.svg.png);
    background-size: cover;
    background-position: center center;
    filter: grayscale(1);
  }
`;
