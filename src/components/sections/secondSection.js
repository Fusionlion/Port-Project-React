import React from "react";
import styled from "styled-components";
import BigEpisodeButton from "../buttons/BigEpisodeButton";
import { themes } from "../styles/ColorStyles";
import { Caption2, H2, MediumText } from "../styles/TextStyles";
import SecondWaves from "../backgrounds/SecondWaves";
function SecondSection() {
  return (
    <Wrapper>
     <SecondWaves />
      <ContentWrapper>
        <TextWrapper>
          <Intro>Recommended</Intro>
          <Title>Trending shows you would like</Title>
          <Description>
            Discover new TV shows and series, films, and more with MediaPro.
            From award-winning shows and movies to your favorite sports.
          </Description>
        </TextWrapper>
        {/* <BigEpisodeButton title="" /> */}
      </ContentWrapper>
    </Wrapper>
  );
}

export default SecondSection;

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
