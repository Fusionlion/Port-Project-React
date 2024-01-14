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
    <Wrapper src={props.imageSrc}>
      <Start>
        <FaPlaneDeparture />
        <NumberDesc>
          <div>
            {props.desc ??
              "This course is tailored for aspiring developers who seek proficiency in Java-based technologies for building dynamic and interactive web applications. Covering key topics such as Java programming fundamentals, server-side development using frameworks like Spring Boot, database integration, and modern front-end frameworks like React, the Java Full Stack course ensures a holistic understanding of the entire web development process."}
          </div>
          <Number>{props.subject ?? "Course"}</Number>
        </NumberDesc>
      </Start>

      <StartButton onClick={handleStartClick}>
        <Column>
          START
          <FaPython />
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
`;
const Column = styled.div`
  // Your styles here
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
  right: -174px;
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
`;
