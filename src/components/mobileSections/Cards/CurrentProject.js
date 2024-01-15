import React, { useState } from "react";
import styled from "styled-components";
import {
  FaHtml5,
  FaSalesforce,
  FaJava,
  FaPlaneDeparture,
  FaPhp,
  FaPython,
  FaCss3,
} from "react-icons/fa";

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  color: black;
  min-width: 370px;

  /* border: 1px solid #ddd; */
  border-radius: 17px;
  background-color: ${(props) => props.background};
  justify-content: space-between;
  background-image: url(/images/my-svg/falling-rocks.svg);
`;

const CardContainer = styled.div`
  text-align: left;
  gap: 5px;
  display: flex;
  flex-direction: column;

  > :nth-child(1) {
    color: #818181;
  }
  > :nth-child(2) {
    font-size: 25px;
    font-family: "lavire personal use";
    filter: drop-shadow(2px 4px 6px black);
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0px;
`;

const StyledButton = styled.div`
  background-color: #111212;
  color: #fff;
  padding: 10px;
  border-radius: 30px;
  cursor: pointer;
`;

const HorizontalDivsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  > :nth-child(1) {
    color: white;
    list-style: hiragana;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    /* Additional styling if needed */
    font-size: 16px;
    line-height: 1.5;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0px 0px 0px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #000;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SpaceBetween = styled.div`
  // Your styles here
  display: flex;
  justify-content: space-between;
  width: 100%;

  > :nth-child(2) {
    font-size: 49px;
  }
`;

const CurrentProject = (props) => {
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
  const skillsString = props.stack ?? "java";
  const skillsArray = skillsString.split(",");
  // WEHEN START IS CLICKED ON THE CARD
  const handleStartClick = () => {
    // SEND A MESSAGE UP THAT CARD START WAS CLICKED
    props.click();
  };
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 13)]; // Adjusted to generate very dark colors
    }
    return color;
  };
  return (
    <OuterContainer background={getRandomColor} onClick={handleStartClick}>
      <SpaceBetween>
        <CardContainer>
          <div>Creative Project</div>
          <div>{props.title}</div>
        </CardContainer>

        {skillsArray[0] === "java" && <FaJava />}
        {skillsArray[0] === "html" && <FaHtml5 />}
        {skillsArray[0] === "php" && <FaPhp />}
        {skillsArray[0] === "python" && <FaPython />}
        {skillsArray[0] === "css" && <FaCss3 />}
        {skillsArray[0] === "salesforce" && <FaSalesforce />}
      </SpaceBetween>

      <ButtonContainer>
        {skillsArray.map((skill, index) => (
          <StyledButton key={index}>{skill}</StyledButton>
        ))}
      </ButtonContainer>

      <HorizontalDivsContainer>
        <li>{props.desc}</li>
      </HorizontalDivsContainer>

      <TextContainer>
        <CircleContainer>
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </CircleContainer>

        <div>{props.date ?? "started months ago"}</div>
      </TextContainer>
    </OuterContainer>
  );
};

export default CurrentProject;
