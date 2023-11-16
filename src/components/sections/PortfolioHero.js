import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import { H1, MediumText, SmallText } from "../styles/TextStyles";
import GetStartedButton from "../buttons/GetStartedButton";
import "../styles/Font.css";
import BirdsLottie from "./BirdsLottie";



function PortfolioHero(props) {
  return (
    <Wrapper>
      <Wave />
      {/* <WaveBackground /> */}
      <BirdsLottie />
      <ContentWrapper>
        <TextWrapper>
          <Name>ZABLON CHARLES</Name>
          <Title>
            Welcome
            <br /> to my <span>Port</span>
          </Title>
          <Description>
            What everyone said was true. You cannot learn how to code by
            reading, listening or watching someone else do it. You have to get
            your hands dirty! I am a software developer building interfaces and
            accessible applications. Welcome to my personal slice of the
            internet.I'm glad you're here!
          </Description>
          <GetStartedButton tapped={props.tapped} />
          <Access>
            I'd love to discuss the projects I've developed over the years and
            share the story of how it all began.
          </Access>
        </TextWrapper>
      </ContentWrapper>
      <FloatingTextRight>
        <div className="right-social-behind">
          <div className="social-text">
            Read the <br />
            biagraphy
          </div>
          <div className="social-app-1"></div>
          <div className="social-app-2"></div>
          <div className="social-app-3"></div>
          <div className="social-app-4"></div>
        </div>
      </FloatingTextRight>
      <FloatingDescRight>
        Writing code is an art form where precision meets creativity, and like a
        well-crafted joke, the beauty of code is often in its elegance and
        efficiency. When code is expressive and clear, it communicates its
        purpose effortlessly. Much like humor, the best code requires no
        explanation; it simply works seamlessly, conveying its brilliance to
        those who appreciate the craftsmanship behind it.
      </FloatingDescRight>

      {/* The timeline  */}
      <div className="bottom">
        <div className="split-and-desc">
          <div class="split-year">2010 November</div>
          <div className="split"></div>
          <div className="split-desc">U.S.P.S</div>
        </div>
        <div className="split-and-desc">
          <div class="split-year">2112 November</div>
          <div className="split"></div>
          <div className="split-desc">Revature</div>
        </div>
        <div className="split-and-desc">
          <div class="split-year">2012 November</div>
          <div className="split"></div>
          <div className="split-desc">Emonic</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default PortfolioHero;
const Name = styled.div`
  color: white;
  background-color: #291d18cf;
  padding: 10px 15px;
  border-radius: 7px;
  width: 199px;
  font-size: 1.2rem;
  font-family: "Spline Sans Mono", sans-serif;
`;
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
  cursor: pointer;
  overflow: hidden;
  .bottom {
    background: #31323a;
    width: 100%;
    height: 1px;
    margin: 40px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: white;
  }
  .split-and-desc {
    display: flex;
    gap: 10px;
    color: white;
  }
  .split-year {
    align-self: end;
    color: #313139;
    font-size: 12px;
    text-transform: uppercase;
  }
  .split {
    height: 40px;
    width: 1px;
    background-color: #313139;
  }
  .split-desc {
    color: #313139;
    font-size: 12px;
    text-transform: uppercase;
  }
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


