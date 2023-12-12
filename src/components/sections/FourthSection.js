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
        <TestimonialButton title="Full Stack Developer" subtitle="" desc="" />
        <TestimonialButton
          title="Salesforce CRM"
          subtitle=""
          desc="In today’s accelerated digital transformation, Trailhead is focused on empowering anyone to learn the skills needed to transform their career or reskill at their current company. "
        />
        <TextWrapper>
          <Intro>Testimonials</Intro>
          <Title>Advancing through Cert.</Title>
          <Description>
            Discover all the certifications i have earned through my years working in this software ecosystem.
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default FourthSection;

const Wrapper = styled.div`
  /* background-color: #f2f6ff; */
  font-family: "Spline Sans Mono", sans-serif;
`;

const ContentWrapper = styled.div`
  /* max-width: 1234px; */
  margin: 0 auto;
  padding: 100px 50px;
  display: flex;
  justify-content:space-between ;
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
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled(H2)`
  /* color: ${themes.light.text1}; */
  font-family: "Pixel12x10", sans-serif;
  color: #c1bdbd;
  @media (max-width: 450px) {
    
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
