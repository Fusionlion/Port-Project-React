import React from "react";
import styled from "styled-components";
import ThreeImagesComponent from "./ThreeImagesComponent";
import CourseCard from "../buttons/CourseCard";
import MobileProjectCard from "./MobileProjectCard";
import { useState } from "react";
import MobileTextImage from "./MobileTextImage";
import topicData from "../../data/courses.json";
import ProjectBioCard from "../buttons/ProjectBioCard";

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

    @media screen and (max-width: 1000px) {
      flex-wrap: wrap;
    }
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
  background: linear-gradient(to right, rgb(255 255 255), rgb(165 235 15));
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
  background-color: rgb(46 0 101);
  border-radius: 12px;
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

  @media screen and (min-width: 999px) {
    padding: 20px 32px;
    background-color: rgb(46 0 101);
    border-radius: 12px;
    /* display: grid; */
    grid-template-columns: 53px auto;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    border: 1px solid #171616;
    font-family: "Spline Sans Mono", sans-serif;
    color: aliceblue;
    margin: 5px 424px;
    text-align: center;
  }
`;

const CoursesComponent = (props) => {
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
      <Title>
        Nurturing Tech Talents in Java, Salesforce, HTML, CSS, and Beyond
      </Title>
      {/* <ThreeTexts>
        <div>Left Text</div>
        <div>Middle Text</div>
        <div>Right Text</div>
      </ThreeTexts> */}
      <BigStyledText>Yay! We have courses</BigStyledText>
      <NormalText showMore={showMore}>
        {" "}
        I am fueled by a profound passion for empowering aspiring developers
        with the knowledge and skills to navigate the dynamic realms of Java,
        Salesforce Apex, HTML, CSS, and the intricate world of data structures
        and algorithms. Teaching is not merely a profession for me; it is a
        fervent pursuit to inspire and guide individuals on their journey to
        becoming proficient developers. As I share the intricacies of coding, I
        aim to cultivate not only technical expertise but also a deep
        understanding of problem-solving and innovative thinking. Witnessing the
        moment when a concept clicks, and a learner grasps the intricacies of a
        programming language or algorithm is what propels me forward, and it is
        this joy that fuels my commitment to education in the ever-evolving
        landscape of technology.
        {!showMore && <div className="bg-text"></div>}
      </NormalText>
      {!showMore && (
        <ShowMoreButton onClick={toggleShowMore}>Show More</ShowMoreButton>
      )}
      <LastImage />
      <div className="horixontal">
        {data.slice(0, visibleProjects).map((print, index, array) => (
          // Check if print.lesson exists and is truthy before rendering the card

          <ProjectBioCard
            key={print.num}
            title={print.title}
            desc={print.desc}
            // imageSrc={print.image}
            imageSrc={
              index == 0
                ? "https://img.freepik.com/premium-photo/forest-landscape-with-sunset-forest-background_901003-26514.jpg"
                : "https://storage.googleapis.com/pai-images/2de6b783396943c4886331a590e04998.jpeg"
            }
            size={print.lesson}
            num={index}
            buttonOff="off"
            centerText="center"
            updateProgress="DSA"
          />
        ))}
        {/* <MobileProjectCard
          title="Learn Apex Development"
          buttonOff="off"
          imageSrc="https://img.freepik.com/premium-photo/forest-landscape-with-sunset-forest-background_901003-26514.jpg"
        /> */}
      </div>
      {!props.linksOff && (
        <StyledButton onClick={props.buttonClicked}>courses.</StyledButton>
      )}
      {/* <MobileTextImage
        onClick={props.buttonClicked}
        title2="More Courses"
        title3="Empowering Learning "
        text2="I've successfully tailored CRM solutions to meet specific business needs, integrating third-party services and crafting custom components. In the realm of Java development, I've contributed to diverse projects, implementing best practices to build robust and scalable applications. My passion for algorithms and data structures is evident in my ability to design optimized solutions for complex problems. Through my courses, learners not only gain theoretical knowledge but also dive into hands-on experiences. From building customized Salesforce applications to developing Java solutions and mastering fundamental data structures, my courses empower individuals to apply their skills in real-world scenarios, fostering a dynamic and immersive learning experience."
        url="https://cdn.dribbble.com/userupload/12073929/file/original-516b8de983e2bde467a7ffe521953d10.png?resize=2048x1536"
      /> */}
    </Container>
  );
};

export default CoursesComponent;
