import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import FooterSection from "../sections/FooterSection";
import { useState } from "react";
import PictureComponent from "./PictureComponent";
import Ide from "../sections/Ide";
import CourseLessonRow from "./CourseLessonRow";
import LessonRowList from "./LessonRowList";
import CoursesComponent from "./CoursesComponent";
import ParallaxStars from "./MobileBackgrounds.js/ParallaxStars";

export default function CourseDetail(props) {
  // const datafake = require("../../data/courses.json"); // Import your
  const [cardData, setCardData] = useState([]);
  const [currLineFromIde, setCurrLineFromIde] = useState();
  const [topicClicked, setTopicClicked] = useState();
  const [lessonCount, setLessonCout] = useState();

  const handleArrowClicked = () => {
    props.arrowClicked();
  };
  const handleLessonClicked = (data) => {
    setCardData(data);
    setTopicClicked(data.title);
  };
  const handleLineFromIde = (line) => {
    setCurrLineFromIde(line);
  };
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add this line for smooth scrolling
    });
  }, []);
  return (
    <Wrapper>
      <div className="project-arrow" onClick={handleArrowClicked}>
        &#8592;
      </div>
      <Ide
        // innerRef={ideRef} // Assign the ref to the Ide component
        ideType="blurry"
        text={cardData.lesson}
        parentCardClicked={topicClicked}
        title={cardData.title}
        quiz={cardData.quiz}
        updateLineParent={handleLineFromIde}
        // switchIde={handleSwitching}
      />
      <CardsTitle>
        <h1>Lessons</h1>
        <div>{lessonCount}</div>
      </CardsTitle>
      <LessonRowList
        lessonCount={(count) => {
          setLessonCout(count);
        }}
        subject={props.subject}
        theCardClicked={handleLessonClicked}
        lineChanged={currLineFromIde}
      />
      <Padding>
        <CoursesComponent />
      </Padding>
      <FooterSection />
      <ParallaxStars />
    </Wrapper>
  );
}
const CardsTitle = styled.div`
  // Your styles here
  font-size: 18px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  > :nth-child(2) {
    width: 40px;
    background: #35353599;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
  }
`;

const Padding = styled.div`
  // Your styles here
  padding: 0px 20px;
`;

const Wrapper = styled.div`
  // Your styles here
  font-family: "Spline Sans Mono", sans-serif;
  position: absolute;
  background-color: black;
  color: aliceblue;
  padding-top: 120px;
  /* background-image: url(/images/my-svg/falling-stars.svg); */
  width: 100%;
  z-index: 5;
  .project-arrow {
    position: absolute;
    padding: 20px;
    color: #ffffff;
    font-size: 34px;
    top: 65px;
    left: 1px;
    cursor: pointer;
    z-index: 99;
  }
`;
