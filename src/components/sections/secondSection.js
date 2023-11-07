import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import { Caption2, H2, MediumText } from "../styles/TextStyles";

function SecondSection() {
  return (
    <Wrapper>
      <Background />
      <ContentWrapper>
        <TextWrapper>
          <Intro>Experience</Intro>
          <Title>Solutions Stack ⚔</Title>
          <Description>
            We have extensive experience in coding for all languages (Java,
            Javascript, Apex, Salesforce), as well as designing graphics on
            various platforms including HTML and CSS.
          </Description>
        </TextWrapper>
        {/* <BigEpisodeButton title="" /> */}
      </ContentWrapper>
    </Wrapper>
  );
}

export default SecondSection;

const Background = styled.div`
  background-image: url("/images/my-svg/falling-rocks.svg");
  background-repeat: repeat;
  background-size: contain;
  background-position: bottom right;
  height: 600px;
  width: 100%;
  position: absolute;
  mix-blend-mode: normal;
  top:680px;
  z-index: -1;
`;
const Wrapper = styled.div`
  overflow: hidden;
/* background-color: #f2f6ff;  */
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 100px 30px;
  display: flex;
  gap: 50px;
  grid-template-columns: 390px auto;
  

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled(H2)`
  color: ${themes.dark.text1};

  @media (max-width: 450px) {
    font-size: 48px;
  }
`;

const Description = styled(MediumText)`
  color: gray;
`;
const Intro = styled(Caption2)`
  color: gray;
`;
