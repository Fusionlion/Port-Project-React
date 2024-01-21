import React from "react";
import styled from "styled-components";
import BarChart from "./BarChart"; // Assuming you have a BarChart component
import { FaCode } from "react-icons/fa";
const CodingExpertiseComponent = () => {
  // Dummy data for expertise levels
  const expertiseData = [
    { language: "JavaScript", level: 80 },
    { language: "Python", level: 70 },
    { language: "Java", level: 60 },
    { language: "React", level: 90 },
  ];

  return (
    <>
      <TopTitle>
        <div>Languages</div>
        <div className="right-title">
          <FaCode />
        </div>
      </TopTitle>
      <Wrapper>
        <TopSection>
          <TopLeftText>
            <Title>Coding Expertise</Title>
            <Subtitle>Explore the languages I work with.</Subtitle>
          </TopLeftText>
          <TopRightButton
            href="https://github.com/zabloncharles"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Portfolio
          </TopRightButton>
        </TopSection>
        <BottomSection>
          {expertiseData.map((item, index) => (
            <BarChart key={index} language={item.language} level={item.level} />
          ))}
        </BottomSection>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  color: white;
  border: #242222 solid 1px;
  border-radius: 17px;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media screen and (min-width: 999px) {
    width: 100%;
    background: #141414;
  }
  @media screen and (min-width: 999px) {
    & {
      transition: all 0.2s linear;
    }

    :hover {
      cursor: pointer;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 30px 60px rgba(23, 0, 102, 0.5),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
      transform: translateY(-5px);
    }
  }
`;
const TopTitle = styled.div`
  font-family: "Spline Sans Mono", sans-serif;
  font-size: 14px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: white;
  margin-bottom: 20px;
  @media screen and (min-width: 999px) {
    font-size: 17px;
  }
`;
const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const TopLeftText = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-family: "Spline Sans Mono", sans-serif;
  font-size: 14px;
  margin-bottom: 5px;
  @media screen and (min-width: 999px) {
    font-size: 17px;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #888;
  @media screen and (min-width: 999px) {
    font-size: 18px;
    padding-top: 10px;
  }
`;

const TopRightButton = styled.a`
  padding: 10px 11px;
  font-size: 14px;
  color: white;
  border-radius: 47px;
  cursor: pointer;
  background: black;
  border: 1px solid #161515;
`;

const BottomSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export default CodingExpertiseComponent;
