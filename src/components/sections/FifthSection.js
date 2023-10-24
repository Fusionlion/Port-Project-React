import React from "react";
import styled from "styled-components";
import FifthSectionBg from "../backgrounds/FifthSectionBg";
import { themes } from "../styles/ColorStyles";
import { Caption2, H2, MediumText } from "../styles/TextStyles";

function FifthSection() {
  return (
    <Wrapper>
      <FifthSectionBg />
      <ContentWrapper>
        <TextWrapper>
          <Intro>WHO'S BEHIND</Intro>
          <Title>Meet the Developers</Title>
          <Description>
            Discover new TV shows and series, films, and more with MediaPro.
            From award-winning shows and movies to your favorite sports.
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default FifthSection;

const Wrapper = styled.div`
  overflow: hidden;
  /* background-color: #f2f6ff; */
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 100px 30px;
  display: grid;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`;

const TextWrapper = styled.div`
  max-width: 390px;
  align-items: center;
  display: grid;
  text-align: center;
  gap: 30px;
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
