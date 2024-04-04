import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import FooterSection from "../sections/FooterSection";
import { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import PictureComponent from "./PictureComponent";
import Ide from "../sections/Ide";
import CourseLessonRow from "./CourseLessonRow";
import LessonRowList from "./LessonRowList";
import CoursesComponent from "./CoursesComponent";
import ParallaxStars from "./MobileBackgrounds.js/ParallaxStars";
import LoadingScreen from "./LoadingScreen";

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
    <Wrapper lessonCount={lessonCount}>
      <div className="project-arrow" onClick={handleArrowClicked}>
        <IoMdClose />
      </div>

      <div className="project-arrow-desktop" onClick={handleArrowClicked}>
        <IoClose /> Close
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
      {/* <Padding>
        <CoursesComponent />
      </Padding> */}
      <FooterSection />

      {/* <ParallaxStars zIndex="-30" /> */}
    </Wrapper>
  );
}

const AllLessons = styled.div`
  // Your styles here
  @media screen and (min-width: 999px) {
    display: grid;
    margin: 0px auto;
    /* grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); */
    display: flex;
    flex-wrap: wrap;
    justify-self: stretch;
    justify-items: left;
    padding: 30px 0px;
    background: #0f112c4a;
    border-radius: 27px;
    /* box-shadow: rgba(255,255,255,0.2) 0px 0px 0px 0.5px inset; */
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
    /* border-radius: 20px; */
    /* border-top: 1px solid #3f3939; */
    /* border-bottom: 1px solid #3f3939; */
    margin-bottom: 20px;
  }
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
  /* @media screen and (min-width: 999px) {
    border-top: 1px #ffffff2b solid;
    margin-top: 45px;
  } */
`;

const Wrapper = styled.div`
  // Your styles here
  font-family: "Spline Sans Mono", sans-serif;
  /* background-color: black; */
  color: aliceblue;
  padding-top: 63px;
  /* background-image: url(/images/my-svg/falling-stars.svg); */
  width: 100%;
  z-index: 50;

  @media screen and (min-width: 999px) {
    margin-top: -35px;
    padding-top: 98px;
  }

  .project-arrow {
    position: absolute;
    color: rgb(255, 255, 255);
    font-size: 20px;
    top: 70px;
    right: 8px;
    cursor: pointer;
    z-index: 99;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    gap: 5px;
    padding: 5px 5px;
    border-radius: 60px;
    background-color: black;

    @media screen and (min-width: 999px) {
      display: none;
      top: 78px;
    }
  }
  .project-arrow-desktop {
    display: none;

    @media screen and (min-width: 999px) {
      position: absolute;
      color: #ffffff;
      font-size: 20px;
      top: 80px;
      right: 26px;
      cursor: pointer;
      z-index: 99;
      display: flex;
      gap: 5px;
      background: #460404;
      padding: 7px 9px;
      border-radius: 11px;
    }
  }
`;
