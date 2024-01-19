import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ThreeImagesComponent from "../mobileSections/ThreeImagesComponent";
import RoundedImageComponent from "../mobileSections/RoundedImageComponent";
import CoursesComponent from "../mobileSections/CoursesComponent";
import AboutMeComponent from "../mobileSections/AboutMeComponent";
import EmploymentHistoryComponent from "../mobileSections/EmploymentHistoryComponent";
import CodingExpertiseComponent from "../mobileSections/CodingExpertiseComponent";
import CertificateComponent from "../mobileSections/CertificateComponent";
import BookComponent from "../mobileSections/BookComponent";

import FooterSection from "./FooterSection";
import GetStartedButton from "../buttons/GetStartedButton";
export default function PortfolioHero(props) {
  // const [text, setText] = useState("Let's get started :)");
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % text.length);
  //   }, 180); // Adjust the interval based on your needs

  //   return () => clearInterval(interval);
  // }, [text]);
  return (
    <Wrapper>
      <BGroundBlack />

      <BGround />
      {/* <BGroundBottom /> */}
      <MobileWelcomeTitle>
        <div className="mobile-title-big">welcome</div>
        <div className="mobile-title-big">PORTFOLIO</div>
      </MobileWelcomeTitle>
      <MobileWelcomeImage>
        <div className="my-name">
          <div>CHARLES</div>
          <div></div>
        </div>
        <div className="curved-text-container">
          <p className="curved-text">ZABLON</p>
        </div>
      </MobileWelcomeImage>
      <MobileDesc>
        What everyone said was true. You cannot learn how to code by reading,
        listening or watching someone else do it. You have to get your hands
        dirty! I am a software developer building interfaces and accessible
        applications. Welcome to my personal slice of the internet.I'm glad
        you're here!
      </MobileDesc>
      <GetStartedButton
        clicked={() => {
          props.page("courses");
        }}
      />
      <div className="after-button-text">
        <br />
        Step into my digital realm, where technology meets innovation, and join
        me on a journey of coding, creativity, and continuous learning.
      </div>
      {/* <TypingText>
        <div className="font-sa">{text.substring(0, index)} !</div>
      </TypingText> */}
      <AboutMeComponent />
      <EmploymentHistoryComponent />
      <CodingExpertiseComponent />
      <CertificateComponent />
      <ThreeImagesComponent
        title="Projects"
        buttonClicked={() => {
          props.page("projects");
        }}
      />
      <RoundedImageComponent />
      <CoursesComponent
        buttonClicked={() => {
          props.page("courses");
        }}
      />
      <BookComponent />
      <FooterSection />
    </Wrapper>
  );
}

const BGroundBottom = styled.div`
  height: 800px;
  width: 100vw;
  background-image: url(/images/my-svg/undersea.svg);
  background-size: cover;
  background-position: center top;
  position: absolute;
  left: 0;
  background-repeat: no-repeat;
  bottom: -158px;
`;
const BGround = styled.div`
  height: 800px;
  width: 100vw;
  /* background-image: url(/images/my-svg/sea-animals.svg); */
  background-size: cover;
  background-position: center top;
  position: absolute;
  left: 0;
  background-repeat: no-repeat;
  top: 15px;
`;
const BGroundBlack = styled.div`
  height: 800px;
  width: 100vw;
  /* background-color: black; */
  position: absolute;
  z-index: -6;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 30px;
  position: relative;
  align-items: center;
  /* background: linear-gradient(to top, #000000, #000000, #000000); */
  .padding-default {
    padding: 0px 20px;
  }
  .after-button-text {
    text-align: center;
    color: bisque;
    font-size: 14px;
    font-family: "Spline Sans Mono", sans-serif;
    line-height: 1.2;
    padding-bottom: 35px;
  }
  .mobile-welcome-button {
    text-align: center;
    font-size: 20px;
    background-color: black;
    padding: 10px 30px;
    border-radius: 26px;
    color: #dbc9c9;
    -webkit-transition: all 0.7s, color 0.7s;
    -webkit-transition: all 0.7s, color 0.7s;
    transition: all 0.7s, color 0.7s;
    cursor: pointer;
    border: #ffffff1f solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Spline Sans Mono", sans-serif;
    margin: 0px 58px;
  }
`;
const MobileWelcomeTitle = styled.div`
  padding-bottom: 20px;
  padding-top: 81px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  /* font-family: "Spline Sans Mono", sans-serif; */
  .mobile-title-big {
    font-size: 32px;
    color: black;
    z-index: 1;
  }
  > :nth-child(1) {
    font-size: 18px;
    color: white;
    color: #bbbbbd;
    box-shadow: 5px 5px 10px #000000, -5px -5px 10px #151417;
    padding: 8px 10px;
    border-radius: 8px;
    margin-bottom: 12px;
    text-align: center;
    text-transform: uppercase;
    font-family: "SF Display Pro", sans-serif;
  }
  > :nth-child(2) {
    font-size: 52px;
    font-family: "accelerare", sans-serif;
    background: linear-gradient(to right, rgb(255 255 255), rgb(249 146 84));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 5px 9px 11px #000000, 1px -1px 0px #151417;
    /* text-shadow: 1px -1px #06022a; */
    /* font-family: "SF Pro Display", sans-serif; */
  }
`;
const MobileWelcomeImage = styled.div`
  /* position: relative;
  min-height: 326px;
  width: 243px;
  overflow: visible;
  border: 1px #633e00fc solid;
  align-self: center;
  background-color: black;
  margin: 20px auto; /* Adjust margin as needed */
  /* background-image: url(/images/my-svg/merilios.png);
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  align-self: center;
  border-radius: 244px;
  box-shadow: 0px 90px 90px -60px rgba(255, 165, 0, 0.7);
  position: relative; */
  min-height: 354px;
  width: 100%;
  overflow: visible;
  /* border: 1px #633e00fc solid; */
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  /* background-color: black; */
  margin: 20px auto;
  /* background-image: url(/images/my-svg/merilios.png); */
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  border-radius: 358px;
  /* box-shadow: 0px 90px 90px -60px rgb(142 33 33 / 70%); */
  position: relative;
  /* background-image: url(/images/my-svg/falling-rocks.svg); */
  background-size: cover;
  background-position: center center;

  .my-name {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 82px;
    font-family: "cisnero";
    color: aliceblue;

    > :nth-child(2) {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-image: url(/images/my-svg/merilios.png);
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
      min-height: 326px;
      width: 243px;
      border: 1px #7c7973fc solid;
      border-radius: 244px;
    }
  }
  .curved-text-container {
    position: relative;
    width: 300px;
    height: 150px;
  }

  .curved-text {
    position: absolute;
    top: 50%;
    right: -479px;
    transform: translate(-50%, -50%)
      rotate(calc(360deg / var(--total) * var(--index)))
      translateY(calc(var(--radius, 5) * -1ch));
    font-size: 20px;
    text-align: center;
    color: white;
    font-family: "cisnero";
  }
`;

const MobileDesc = styled.div`
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 23px;
  line-height: 1.2;
  padding-bottom: 20px;
  /* padding-top: 30px; */
  text-align: justify;

  color: #d1d1d1;
  text-align: center;
  margin-top: 20px;
  text-align: justify;
  text-align-last: center;
  font-family: "Lavire Personal Use", sans-serif;
  background: linear-gradient(to top, rgb(86 86 86), rgb(255 255 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  .first-character {
    font-weight: 400;
    float: left;
    font-size: 198px;
    line-height: 105px;
    padding-top: 40px;
    padding-right: 8px;
    /* padding-left: 3px; */
    font-family: "Source Sans Pro", sans-serif;
  }
`;
const TypingText = styled.div`
  margin: 50px 0px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  .font-sa {
    font-family: "cisnero", sans-serif;
    color: white;
    align-self: center;
    font-size: 18px;
    text-align: center;
    width: 350px;
  }
`;
