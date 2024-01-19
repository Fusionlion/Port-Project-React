import React from "react";
import styled from "styled-components";
import ThreeImagesComponent from "./ThreeImagesComponent";
import CourseCard from "../buttons/CourseCard";
import MobileProjectCard from "./MobileProjectCard";
import { useState } from "react";
import MobileTextImage from "./MobileTextImage";
import topicData from "../../data/courses.json";
import BookCard from "./Cards/BookCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  .horixontal {
    display: flex;
    gap: 10px;
    padding-bottom: 23px;
    overflow: hidden;
    width: 100%;
    flex-wrap: wrap;
  }
  .center-text {
    text-align: center;
  }
`;

const LastImage = styled.div`
  background-image: url(images/my-svg/falling-rocks.svg);
  background-size: cover;
  width: 100%;
  height: 203px px;
  background-color: #000;
  background-position: center;
  border-radius: 9px;
  margin-bottom: 17px;
`;

const Title = styled.div`
  font-size: 54px;
  font-weight: bold;
  margin: 20px 0;
  font-family: "cisnero";
  background: linear-gradient(to right, rgb(255 255 255), rgb(235 15 15));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 5px 9px 11px #000000, 1px -1px 0px #151417;
  @media screen and (min-width: 999px) {
    font-size: 79px;
    line-height: 1.2;
  }
`;

const ThreeTexts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;

  > :nth-child(1) {
    border: aliceblue 1px solid;
    padding: 5px 10px;
    border-radius: 39px;
  }

  > :nth-child(2) {
    padding: 5px 10px;
  }

  > :nth-child(3) {
    border: aliceblue 1px solid;
    padding: 5px 10px;
    border-radius: 39px;
  }
`;

const BigStyledText = styled.div`
  font-family: "cisnero";
  color: crimson;
  text-transform: lowercase;
  font-size: 24px;
  margin: 20px 0;
`;

const NormalText = styled.div`
  margin-bottom: 10px;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: justify;
  line-height: 1.5;
  /* max-height: ${(props) => (props.showMore ? "none" : "8 * 1.5em")}; */
  display: ${(props) => (props.showMore ? "block" : "-webkit-box")};
  -webkit-line-clamp: 9; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;
  @media screen and (min-width: 999px) {
    font-size: 17px;
    line-height: 1.7;
  }
  .bg-text {
    position: absolute;
    background: linear-gradient(359deg, #000000ad, transparent, transparent);
    height: 100%;
    width: 100%;
    bottom: 0;
  }
`;

const ShowMoreButton = styled.button`
  background-color: #151313;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
`;

const StyledButton = styled.div`
  padding: 10px 60px;
  text-align: center;
  font-size: 17px;
  background-color: black;

  border-radius: 26px;
  color: #dbc9c9;
  -webkit-transition: all 0.7s, color 0.7s;
  -webkit-transition: all 0.7s, color 0.7s;
  transition: all 0.7s, color 0.7s;
  cursor: pointer;
  border: #ffffff1f solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Spline Sans Mono", sans-serif;
  margin: 0px 69px;
`;

const BookComponent = (props) => {
  const [showMore, setShowMore] = useState(false);
  const data = topicData["Java"].map((record) => {
    return record;
  });
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const [visibleProjects, setVisibleProjects] = useState(2);
  return (
    <Container>
      <Title>TechInsights: Navigating Salesforce, Python, & Java</Title>
      {/* <ThreeTexts>
        <div>Left Text</div>
        <div>Middle Text</div>
        <div>Right Text</div>
      </ThreeTexts> */}
      <BigStyledText>Unveiling Strategies for Success</BigStyledText>
      <NormalText showMore={showMore}>
        In the ever-evolving landscape of software development, I embarked on a
        journey fraught with challenges, attempting to navigate the intricate
        realms of Salesforce, Python, and Java. A plethora of online resources
        promised enlightenment, yet the scattered information left me grappling
        with a sense of disorientation and frustration. As a budding developer,
        I yearned for a structured path, a cohesive narrative that could guide
        me through the complexities of these programming languages.
        {!showMore && <div className="bg-text"></div>}
      </NormalText>
      {!showMore && (
        <ShowMoreButton onClick={toggleShowMore}>Show More</ShowMoreButton>
      )}
      <LastImage />
      <div className="horixontal">
        <BookCard
          key="1"
          cardFont="Grivas Personal Use"
          title="Java Eli5"
          desc="--- --- --- --- ----- ----"
          imageSrc="https://cdn.dribbble.com/userupload/11257829/file/original-8b6ca0123beaa451549af484f351d354.jpg?resize=1504x1504"
          num="1"
          buttonOff="off"
          centerText="center"
        />
        <BookCard
          title="Learn Apex"
          cardFont="Nasi Podeng"
          titleSize="42px"
          desc2="Discover the essentials of Apex programming language, embracing a beginner-friendly approach to delve into its key concepts."
          buttonOff="off"
          imageSrc="https://cdn.dribbble.com/users/989466/screenshots/16399861/media/572262fa76666110b568574f826acd31.png?resize=1600x1200&vertical=center"
        />
      </div>

      {/* <StyledButton onClick={props.buttonClicked}>courses.</StyledButton> */}
      <MobileTextImage
        title2="Intricate Seas of Software"
        title3="Navigating Salesforce, Python, & Java"
        text1="In the ever-changing world of coding, I took on a tough journey, diving into the tricky areas of Salesforce, Python, and Java. Even with lots of online help, things felt all over the place, leaving me kinda lost and frustrated. Being a new developer, I just wanted a clear path, a simple story to help me navigate through the tricky parts of these programming languages."
        text2="From this tough experience, a mission was born - a mission to break down the barriers holding back new developers trying to conquer Salesforce, Python, and Java. Fueled by my own challenges, I decided to turn my struggles into something positive. That decision led to the creation of books, carefully put together to act as a guide for those navigating the tricky waters of software development.
'TechInsights: Navigating Salesforce, Python, & Java' isn't just about providing guidance; it's about making sure everyone has access to clear and understandable learning materials. These books represent a commitment to offer a clear roadmap for people looking to tackle the complexities of programming. Through thorough research and personal exploration, the pages unfold a story crafted to empower new developers and give them the confidence to tackle even the toughest concepts.
As readers dive into these pages, they're taking a journey similar to my own struggles and successes. The mission is simple – to create a supportive learning space and light the way for those who, like me, once found mastering the intricacies of software development a daunting task. 'TechInsights' isn't just a bunch of words; it's a guide, a symbol of the resilience of those who venture into the ever-expanding world of coding expertise."
        url="https://cdn.dribbble.com/userupload/6643514/file/original-58fb869093cbf7e05670abf9cc028690.jpg?resize=1504x1127"
      />
    </Container>
  );
};

export default BookComponent;
