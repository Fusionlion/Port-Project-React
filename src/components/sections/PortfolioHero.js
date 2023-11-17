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
      <div className="top-left-and-right">
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

        <TopRightContent>
          <Bust />

          <div className="icons-and-desc">
            <div className="social-icons">
              <div className="social-text">
                Read the <br />
                biagraphy
              </div>
              <div className="social-app-1"></div>
              <div className="social-app-2"></div>
              <div className="social-app-3"></div>
              <div className="social-app-4"></div>
            </div>
            <div className="after-social-desc">
              Writing code is an art form where precision meets creativity, and
              like a well-crafted joke, the beauty of code is often in its
              elegance and efficiency. When code is expressive and clear, it
              communicates its purpose effortlessly. Much like humor, the best
              code requires no explanation; it simply works seamlessly,
              conveying its brilliance to those who appreciate the craftsmanship
              behind it.
            </div>
          </div>
        </TopRightContent>
      </div>

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

const TopRightContent = styled.div`
  justify-content: center;
  display: flex;
  flex: 1;
  position: relative;

  @media screen and (max-width: 1000px) {
    justify-content: space-between;
    align-items: center;
    height: 400px;
    flex: none;
  }
  .icons-and-desc {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1000px) {
      flex: 1;
      justify-content: end;
      align-items: end;
    }
  }
  .social-icons {
    position: absolute;
    padding: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
    gap: 20px;

    top: 69px;
    @media screen and (max-width: 1000px) {
      right: 52px;
      position: relative;
      flex-direction: row;
      top: 0;
    }
  }
  .after-social-desc {
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
    @media screen and (max-width: 1000px) {
      position: relative;
      flex-direction: row;
      top: 0;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 1000px) {
    overflow: visible;

    height: 120%;
   
  }
  .top-left-and-right {
    display: flex;

    justify-content: space-between;

    @media screen and (max-width: 1000px) {
      /* Your styles for screens with a maximum width of 430 pixels go here */
      flex-direction: column;
    }
  }
  .bottom {
    background: #31323a;
    height: 1px;
    margin: -40px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: bottom;
    color: white;
    bottom: 0;
    width: 100%;
    font-family: "Spline Sans Mono", sans-serif;
    @media screen and (max-width: 1000px) {
      width: 90%;
      overflow: hide;
    }
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
const Bust = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  right: 122px;
  position: absolute;
  background-image: url(/images/my-svg/merilios.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: hue-rotate(198deg);
  /* filter: drop-shadow(10px 19px 22px #3f0f444f); */

  @media screen and (max-width: 1000px) {
    background-position: right;
    position: relative;
    flex: 1;
    height: 300px;
    width: 100%;
    right: 0px;
  }
`;

const TextWrapper = styled.div`
  width: 690px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  margin: 0 auto;
  padding: 200px 30px;
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding-right: 150px;
    padding: 45px 30px;
  }
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
