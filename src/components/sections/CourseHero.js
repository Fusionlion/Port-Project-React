import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import { H1, MediumText, SmallText } from "../styles/TextStyles";
import GetStartedButton from "../buttons/GetStartedButton";
import "../styles/Font.css";
import { useState } from "react";
function CourseHero({ setActiveTab }) {
    const [activeCourse, setActiveCourse] = useState("Data");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setActiveCourse(tabName);
    console.log("clicked - " + tabName);
  };
  return (
    <Wrapper>
      <Wave />
      {/* <WaveBackground /> */}
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Welcome
            <br /> to my <span>Course</span>
          </Title>
          <Description>
            What everyone said was true. You cannot learn how to code by
            reading, listening or watching someone else do it. You have to get
            your hands dirty! I am a software developer building interfaces and
            accessible applications. Welcome to my personal slice of the
            internet.I'm glad you're here!
          </Description>
          <GetStartedButton />
          <Access>
            Learn the best tools and platforms.Make your code efficient and
            learn new methodologies in programming.
          </Access>
        </TextWrapper>
      </ContentWrapper>
      <FloatingTextRight>
        <div className="right-text-and-line">
          <div className="right-btn" onClick={() => handleTabClick("Data")}>
            Data Structures
          </div>
          <div
            className={
              activeCourse === "Data" ? "right-line" : "right-line-inactive"
            }
          ></div>
        </div>

        <div className="right-text-and-line">
          <div className="right-btn" onClick={() => handleTabClick("React")}>
            React
          </div>
          <div
            className={
              activeCourse === "React" ? "right-line" : "right-line-inactive"
            }
          ></div>
        </div>

        <div className="right-text-and-line">
          <div className="right-btn" onClick={() => handleTabClick("Java")}>
            Java
          </div>
          <div
            className={` ${
              activeCourse == "Java" ? "right-line" : "right-line-inactive"
            }`}
          ></div>
        </div>
      </FloatingTextRight>
      <FloatingDescRight>
        What everyone said was true. You cannot learn how to code by reading,
        listening or watching someone else do it. You have to get your hands
        dirty! I am a software developer building interfaces and accessible
        applications. Welcome to my personal slice of the internet.I'm glad
        you're here!
      </FloatingDescRight>
    </Wrapper>
  );
}

export default CourseHero;

const FloatingDescRight = styled(MediumText)`
  color: #fff;
  font-size: 12px;
  font-family: "Spline Sans Mono", sans-serif;
  position: absolute;
  width: 300px;

  padding: 20px;
  top: 372px;
  right: 20px;
  justify-content: center;
  display: flex;
  justify-content: center;
  text-align: end;
`;
const FloatingTextRight = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  gap: 20px;
  top: 20px;
  right: 20px;
  /* background-color: red; */
  .right-text-and-line {
    display: flex;
    gap: 5px;
    align-items: center;
    font-family: "Spline Sans Mono", sans-serif;
  }
  .right-btn {
    color: white;
    background-color: #0b0b0b;
    padding: 10px 20px;
    border-radius: 10px;
    border: white 1px dotted;
    cursor: pointer;
  }
  .right-btn:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-5px);
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .right-line {
    width: 50px;
    height: 2px;
    background-color: #ca4741;
    transition: all 1s ease;
  }
  .right-line-active {
    width: 50px; /* Expand to 50px width when active */
    height: 2px;
    background-color: #ca4741;
  }
  .right-line-inactive {
    width: 30px;
    height: 2px;
    opacity: 0.1px;
    transform: scaleX(1.5);
  }
`;
const Wrapper = styled.div`
  overflow: hidden;
`;
const Wave = styled.div`
  position: absolute;
  height: 800px;
  background-image: url("/images/my-svg/falling-rocks.svg");
  background-repeat: repeat;
  background-size: contain;
  width: 100%;

  z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
`;
const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`;

const TextWrapper = styled.div`
  width: 560px;
  display: grid;
  gap: 30px;
  padding-top: 80px;
`;

const Title = styled.div`
  font-size: 68px;
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #d9dff4 0%, #280aff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  /* font-family: "Cisnero", sans-serif; */
  /* font-family: "Spline Sans Mono", sans-serif; */
  font-family: "Pixel12x10", sans-serif;
  text-transform: uppercase;

  span {
    background: linear-gradient(180deg, #5451b7 0%, #00fa6b 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`;

const Description = styled(MediumText)`
  color: #fff;
  font-family: "Spline Sans Mono", sans-serif;
`;

const Access = styled(SmallText)`
  color: #fff;
  font-family: "Spline Sans Mono", sans-serif;
`;
