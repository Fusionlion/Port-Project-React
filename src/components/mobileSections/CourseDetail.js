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
    scrollUp();
  };
  const handleLineFromIde = (line) => {
    setCurrLineFromIde(line);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      // behavior: "smooth", // Add this line for smooth scrolling
    });
  };
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // Add this line for smooth scrolling
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
      <AllLessons>
        <LessonRowList
          lessonCount={(count) => {
            setLessonCout(count);
          }}
          subject={props.subject}
          theCardClicked={handleLessonClicked}
          lineChanged={currLineFromIde}
        />
      </AllLessons>
      <Padding>
        <CoursesComponent />
      </Padding>
      <FooterSection />
      {/* <ParallaxStars zIndex="-30" /> */}
    </Wrapper>
  );
}
const AllLessons = styled.div`
  // Your styles here
  display: grid;
  margin: 0px auto;
  /* grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); */
  display: flex;
  flex-wrap: wrap;
  justify-self: stretch;
  justify-items: left;
  padding: 30px;
  background: #080808;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px);
  border-radius: 20px;
`;

const CardsTitle = styled.div`
  // Your styles here
  font-size: 18px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 999px) {
    margin-top: 20px;
  }

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
  /* background-color: black; */
  color: aliceblue;
  padding-top: 120px;
  /* background-image: url(/images/my-svg/falling-stars.svg); */
  width: 100%;
  z-index: 50;
  @media screen and (min-width: 999px) {
    margin-top: -35px;
  }

  .project-arrow {
    position: absolute;
    padding: 20px;
    color: #ffffff;
    font-size: 34px;
    top: 65px;
    left: 1px;
    cursor: pointer;
    z-index: 99;
    padding: 5px 30px;
    margin-top: 22px;
    background: blue;
    border-radius: 12px;
    @media screen and (min-width: 999px) {
      top: 69px;
      left: 1110px;
      background: none;
    }
  }
`;
