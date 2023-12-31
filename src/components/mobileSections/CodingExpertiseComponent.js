import React from "react";
import styled from "styled-components";
import BarChart from "./BarChart"; // Assuming you have a BarChart component

const CodingExpertiseComponent = () => {
  // Dummy data for expertise levels
  const expertiseData = [
    { language: "JavaScript", level: 80 },
    { language: "Python", level: 70 },
    { language: "Java", level: 60 },
    { language: "React", level: 90 },
  ];

  return (
    <Wrapper>
      <TopSection>
        <TopLeftText>
          <Title>Coding Expertise</Title>
          <Subtitle>Explore the languages I work with</Subtitle>
        </TopLeftText>
        <TopRightButton>View Portfolio</TopRightButton>
      </TopSection>
      <BottomSection>
        {expertiseData.map((item, index) => (
          <BarChart key={index} language={item.language} level={item.level} />
        ))}
      </BottomSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  color: white;
  border: #242222 solid 1px;
  border-radius: 17px;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #888;
`;

const TopRightButton = styled.button`
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
