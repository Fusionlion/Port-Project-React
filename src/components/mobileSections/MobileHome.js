import React, { useEffect, useState } from "react";

import styled from "styled-components";
import FooterSection from "../sections/FooterSection";
import ThreeImagesComponent from "./ThreeImagesComponent";
import RoundedImageComponent from "./RoundedImageComponent";
import CoursesComponent from "./CoursesComponent";
export default function MobileHome(props) {
  const [text, setText] = useState("Let's get started :)");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 180); // Adjust the interval based on your needs

    return () => clearInterval(interval);
  }, [text]);
  return (
    <Wrapper>
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
      <div className="mobile-welcome-button">GET STARTED</div>
      <div className="after-button-text">
        <br />
        Learn the best tools and platforms.Make your code efficient and learn
        new methodologies in programming.
      </div>
      <TypingText>
        <div className="font-sa">{text.substring(0, index)} !</div>
      </TypingText>
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
      <FooterSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 30px;
  overflow: scroll;
  position: relative;
  background: linear-gradient(to top, #000000, #000000, #000000);
  .padding-default {
    padding: 0px 20px;
  }
  .after-button-text {
    text-align: center;
    color: bisque;
    font-size: 14px;
    font-family: "Spline Sans Mono", sans-serif;
    line-height: 1.2;
  }
  .mobile-welcome-button {
    text-align: center;
    font-size: 22px;
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
  min-height: 326px;
  width: 335px;
  overflow: visible;
  border: 1px #633e00fc solid;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  background-color: black;
  margin: 20px auto;
  background-image: url(/images/my-svg/merilios.png);
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  border-radius: 244px;
  box-shadow: 0px 90px 90px -60px rgba(255, 165, 0, 0.7);
  position: relative;
  background-image: url(/images/my-svg/bubbles.svg);
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
    overflow: hidden;
  }

  .curved-text {
    position: absolute;
    top: 50%;
    right: 0;
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
  font-size: 18px;
  line-height: initial;
  padding-bottom: 20px;
  padding-top: 30px;
  text-align: justify;
  /* background-color: #100f0e47; */
  border-radius: 12px;
  color: #ff9500;
  text-align: center;
  margin-bottom: 20px;
  /* padding-left: 10px;
  padding-right: 10px; */
  margin-top: 20px;
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
