import React from "react";
import styled from "styled-components";
import ThreeImagesComponent from "./ThreeImagesComponent";
import CourseCard from "../buttons/CourseCard";
import MobileProjectCard from "./MobileProjectCard";

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
`;
const ImageWrapper = styled.div`
  width: 100%;
  /* height: 497px; */
  position: relative;
  overflow: visible;
`;
const Image = styled.div`
  /* background-image: url("https://backiee.com/static/wpdb/wallpapers/1000x563/289646.jpg");
  background-color: #ccc;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  /* border-radius: 9px; */
  /* Placeholder color, replace with your image */
  /* border: #595a5b 1px solid; */
  /* box-shadow: 0px -17px 0px -10px #645d5d, 0px -28px 0px -18px #764aca;  */
  background-image: url(/images/my-svg/earth-dots.png);
  background-color: #ccc;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 387px;
  background-color: #ccc;
  border-radius: 426px;
  border: 2px solid #932300;
`;
const TopSvg = styled.div`
  position: absolute;
  background-image: url(/images/my-svg/3-birds.svg);
  background-size: contain;
  background-position: center center;
  width: 425px;
  height: 100%;
  top: -48px;
  left: -29px;
  background-repeat: no-repeat;
  -webkit-filter: drop-shadow(14px 15px 4px black);
  filter: drop-shadow(14px 15px 4px black);
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

const CoursesComponent = (props) => {
  return (
    <Container>
      <ImageWrapper>
        <Image />
        <TopSvg />
      </ImageWrapper>
      <Title>This is a Bold Courses</Title>
      <ThreeTexts>
        <div>Left Text</div>
        <div>Middle Text</div>
        <div>Right Text</div>
      </ThreeTexts>
      <BigStyledText>Yay! We have courses</BigStyledText>
      <NormalText>
        {" "}
        I have crafted comprehensive courses that seamlessly integrate Java,
        Salesforce, and Frontend Development to provide a holistic learning
        experience. These courses are designed to equip learners with a
        versatile skill set, covering the robust Java programming language for
        backend development, Salesforce for powerful CRM solutions, and frontend
        technologies for creating engaging user interfaces. Whether you're
        aspiring to be a full-stack developer or aiming to specialize in
        Salesforce integration, these courses offer a well-rounded curriculum,
        hands-on projects, and practical insights, ensuring that participants
        gain proficiency in each domain and the ability to architect end-to-end
        solutions in the dynamic realm of software development.
      </NormalText>
      <LastImage />
      <div className="horixontal">
        <MobileProjectCard
          title="Learn Java fullstack"
          buttonOff="off"
          imageSrc="https://wallpapers-clan.com/wp-content/uploads/2023/11/wolf-in-the-night-forest-desktop-wallpaper-preview.jpg"
        />
        <MobileProjectCard
          title="Learn Apex Development"
          buttonOff="off"
          imageSrc="https://img.freepik.com/premium-photo/forest-landscape-with-sunset-forest-background_901003-26514.jpg"
        />
      </div>

      <StyledButton onClick={props.buttonClicked}>courses.</StyledButton>
    </Container>
  );
};

export default CoursesComponent;
