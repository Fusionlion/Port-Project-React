import React from "react";
import styled from "styled-components";
import FourthSectionBg from "../backgrounds/FourthSectionBg";
import TestimonialButton from "../buttons/TestimonialButton";
import { themes } from "../styles/ColorStyles";
import { Caption2, H2, MediumText } from "../styles/TextStyles";

function FourthSection() {
  return (
    <Wrapper>
      {/* <FourthSectionBg /> */}
      <ContentWrapper>
        <TestimonialButton />
        <TestimonialButton />
        <TextWrapper>
          <Intro>Testimonials</Intro>
          <Title>Hear what people think about us.</Title>
          <Description>
            Discover new TV shows and series, films, and more with MediaPro.
            From award-winning shows and movies to your favorite sports.
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default FourthSection;

const Wrapper = styled.div`
  /* background-color: #f2f6ff; */
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 100px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;

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
  /* color: ${themes.light.text1}; */
color: white;
  @media (max-width: 450px) {
    font-size: 48px;
  }
`;

const Description = styled(MediumText)`
  color: white;
`;
const Intro = styled(Caption2)`
  color: gray;
`;
const FooterSection = styled(Caption2)`
  color: gray;
`;
