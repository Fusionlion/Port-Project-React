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
  FaComputer,
} from "react-icons/fa";

export default function NumberCourse(props) {
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
  return (
    <Wrapper src={props.imageSrc} reverseText={props.reverseText}>
      <Start>
        <FaPlaneDeparture />
        <NumberDesc>
          <div>
            {props.desc ??
              "This course is tailored for aspiring developers who seek proficiency in Java-based technologies for building dynamic and interactive web applications. Covering key topics such as Java programming fundamentals, server-side development using frameworks like Spring Boot, database integration, and modern front-end frameworks like React, the Java Full Stack course ensures a holistic understanding of the entire web development process."}
          </div>
          <Number reverseText={props.reverseText}>COURSE</Number>
        </NumberDesc>
      </Start>

      <StartButton onClick={handleStartClick}>
        <Column>
          {props.subject ?? "Course"}
          {!props.stack && <FaPython />}
          {props.stack === "java" && <FaJava />}
          {props.stack === "html" && <FaHtml5 />}
          {props.stack === "php" && <FaPhp />}
          {props.stack === "python" && <FaPython />}
          {props.stack === "css" && <FaCss3 />}
          {props.stack === "salesforce" && <FaSalesforce />}
          {props.stack === "it" && <FaComputer />}
        </Column>
      </StartButton>
      <svg width="500" height="50" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 30 Q40 20, 70 30 T130 30" fill="none" stroke="black" />
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  // Your styles here
  /* background: aliceblue; */
  background: url(${(props) =>
    props.src || "/images/my-svg/falling-rocks.svg"});
  background-position: center;
  background-size: cover;
  border-radius: 18px;
  padding: 20px;
  height: 600px;
  position: relative;
  font-size: 17px;
  line-height: 1.2;
  width: 100%;
  text-align: ${(props) => (props.reverseText ? "right" : "start")};

  transition: all linear 0.2s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: scale(0.98);
  }

  @media screen and (min-width: 999px) {
    min-width: 360px;
    flex: 1;
  }
`;
const Column = styled.div`
  // Your styles here
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  line-height: 0.9;
`;

const Start = styled.div`
  // Your styles here
  font-size: 40px;
  color: white;
`;
const StartButton = styled.div`
  // Your styles here
  text-transform: uppercase;
  font-size: 42px;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: bold;
  padding: 20px;
  font-family: "NCL Sebgorq";
  font-size: 73px;
`;

const NumberDesc = styled.p`
  // Your styles here
  font-size: 20px;
  display: flex;
  flex-direction: column;

  > :nth-child(1) {
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    line-height: 1.2;
    overflow: hidden;
    height: 187px;
    mix-blend-mode: difference;
    @media screen and (min-width: 999px) {
      mix-blend-mode: color-dodge;
    }
  }
`;

const Number = styled.span`
  // Your styles here
  /* position: relative;
  font-family: "NCL Sebgorq", sans-serif;
  font-size: 82px;
  right: -141px;
  text-wrap: no-wrap;
  bottom: -95px;
  background: aliceblue;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  rotate: 270deg;
  mix-blend-mode: overlay; */
  position: relative;
  font-family: "NCL Sebgorq", sans-serif;
  font-size: 82px;
  right: ${(props) => (props.reverseText ? "102px" : "-174px")};
  text-wrap: no-wrap;
  bottom: -129px;
  background: aliceblue;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  rotate: 270deg;
  mix-blend-mode: overlay;
  text-wrap: nowrap;
  width: 275px;
  text-shadow: -20px 9px 20px black;
  @media screen and (min-width: 999px) {
    right: -164px;
  }
`;
