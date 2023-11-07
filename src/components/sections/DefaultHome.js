import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import { H1, MediumText, SmallText } from "../styles/TextStyles";
import GetStartedButton from "../buttons/GetStartedButton";
import "../styles/Font.css";

function DefaultHome() {
  return (
    <Wrapper>
      <Wave />
      {/* <WaveBackground /> */}
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Welcome
            <br /> to my <span>Portfolio</span> your shows
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
    </Wrapper>
  );
}

export default DefaultHome;

const Wrapper = styled.div`
  overflow: hidden;
`;
const Wave = styled.div`
  position: absolute;
  height: 800px;
  background-image: url("/images/my-svg/first.svg");
  background-repeat: repeat;
  background-size: contain;
  width: 100%;

  z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
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
  width: 460px;
  display: grid;
  gap: 30px;
  padding-top: 80px;
`;

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  /* font-family: "Cisnero", sans-serif; */
  font-family: "Cisnero";

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
