import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import { H1, MediumText, SmallText } from "../styles/TextStyles";
import GetStartedButton from "../buttons/GetStartedButton";

function HeroSection() {
  return (
    <Wrapper>
      {/* <WaveBackground /> */}
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Discover
            <br /> and <span>Stream</span> your shows
          </Title>
          <Description>
            Discover new TV shows and series, films, and more with MediaPro.
            From award-winning shows and movies to your favorite sports.
          </Description>
          <GetStartedButton />
          <Access>
            Get access to 30 premium shows, movies and sport channels. Over 280
            hours of content, comentary and priority support.
          </Access>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default HeroSection;

const Wrapper = styled.div`
  overflow: hidden;
  
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
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
  max-width: 360px;
  display: grid;
  gap: 30px;
`;

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
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
`;
const Access = styled(SmallText)`
  color: #fff;
`;
