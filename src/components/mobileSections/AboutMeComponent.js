import React from "react";
import styled from "styled-components";
import { GiChewedHeart } from "react-icons/gi";
const StyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  color: white;
  border-bottom: 1px solid #3c3c3c;
  padding-bottom: 19px;
  overflow: hidden;
  .bold-text {
    font-family: "Spline Sans Mono", sans-serif;
    font-size: 14px;
    @media screen and (min-width: 999px) {
      font-size: 17px;
    }
  }
  .bottom-border {
    border-bottom: 1px solid #3c3c3c;
    padding-bottom: 10px;
  }
  .section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-family: "Spline Sans Mono", sans-serif;
    line-height: 1.2;
    gap: 18px;
    text-align: justify;
    > :nth-child(1) {
      display: none;
      @media screen and (min-width: 999px) {
        display: flex;
      }
    }
    > :nth-child(2) {
      line-height: 1.5;
      text-align: justify;
      background: #141414;
      padding: 12px 10px;
      border-top: 1px solid #323239;
      border-bottom: 1px solid #323239;
    }
    @media screen and (min-width: 999px) {
      flex-direction: row;
      font-size: 18px;
      line-height: 1.5;
      background: #141414;
      padding-right: 18px;
      border-radius: 12px;
    }
  }
  .section-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-family: "Spline Sans Mono", sans-serif;
    line-height: 1.2;
    gap: 18px;
    text-align: justify;
  }
  .space {
    /* width: 100%;
    height: 99px;
    background-image: url(/images/my-svg/merilios.png);
    border-radius: 7px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; */
    width: 100%;
    height: 101px;
    background-image: url(https://github.com/zabloncharles/Port-Project-React/blob/main/public/images/my-svg/armor.png?raw=true);
    border-radius: 7px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    @media screen and (min-width: 999px) {
      min-height: 240px;
      border-right: #211f1f solid 1px;
      margin-right: 57px;
    }
    /* border: solid #131111 1px; */
  }
  .title {
    font-size: 54px;
    font-weight: bold;
    font-family: "cisnero";
    text-align: center;
    background: linear-gradient(to right, rgb(0 228 255), rgb(35 206 255));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 5px 9px 11px #000000, 1px -1px 0px #4f0000;
  }
  .column-text {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #dedede;
    font-size: 14px;
    font-family: "Spline Sans Mono", sans-serif;
    line-height: 1.2;
  }
  .section-image {
    height: 500px;
    /* background-image: url("https://w0.peakpx.com/wallpaper/323/210/HD-wallpaper-night-mountains-minimalist-8k-mountains-minimalism-minimalist-artist-artwork-digital-art-dark-black.jpg"); */
    background-color: #0b0b0b;
    background-size: cover;
    border-radius: 12px;
    position: relative;

    /* border: 1px solid #181616; */
    @media screen and (min-width: 999px) {
      height: 670px;
      position: relative;
      overflow: visible;
      box-shadow: 0px 20px 0 0px #404040;
      margin-bottom: 20px;
    }
  }
  .image-intro {
    position: absolute;
    color: #fffcfc;
    bottom: 20px;
    left: 10px;
    display: flex;
    color: #7f7f7f;
    gap: 5px;
    align-items: center;
    > :nth-child(1) {
      font-size: 18px;
      color: red;
    }
    > :nth-child(2) {
      font-family: "Spline Sans Mono", sans-serif;
      line-height: 1.5;
      width: 256px;
      font-size: 12px;
      padding-left: 5px;
      text-wrap: balance;
    }
    @media screen and (min-width: 999px) {
      position: absolute;
      color: #fffcfc;
      font-size: 16px;
      bottom: 40px;
      left: 20px;
      display: flex;
      gap: 20px;
      align-items: center;
      > :nth-child(1) {
        font-size: 38px;
      }
      > :nth-child(2) {
        font-family: "Spline Sans Mono", sans-serif;
        line-height: 1.5;
        width: 300px;
        border-left: white solid 1px;
        padding-left: 10px;
        text-wrap: balance;
      }
    }
  }
  .section-svg {
    height: 492px;
    background-image: url(/images/my-svg/exploded.png);
    background-size: contain;
    position: absolute;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-transform: scale(1.7);
    -ms-transform: scale(1.7);
    -webkit-transform: scale(1.7);
    -ms-transform: scale(1.7);
    transform: scale(1.9);
    left: 27px;
    top: 9px;
    @media screen and (min-width: 999px) {
      top: 92px;
      height: 482px;
    }
  }
  .flip-text-1 {
    transform: rotate(270deg);
    top: 244px;
    right: -68px;
    position: relative;
    font-size: 42px;
    font-family: "spline sans mono";
    @media screen and (min-width: 999px) {
      top: 54px;
      right: -397px;
    }
  }
  .flip-text-2 {
    transform: rotate(270deg);
    top: 139px;
    right: -128px;
    position: relative;
    font-size: 82px;
    font-family: "cisnero", sans-serif;
    background: linear-gradient(to right, rgb(255 255 255), rgb(249 146 84));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 7px 7px 4px #000000, 1px -1px 0px #151417;
    @media screen and (min-width: 999px) {
      top: -33px;
      right: -485px;
      font-size: 122px;
    }
  }
`;

const AboutMeComponent = () => {
  return (
    <StyledComponent>
      {/* Second Div */}
      <div className="section-image">
        <div className="image-intro">
          <GiChewedHeart />
          <div>
            I design and code beautifully simple things, and I love what I do.
          </div>
        </div>
        <div className="section-svg"></div>
        <div className="flip-text-1">software</div>
        <div className="flip-text-2">developer</div>
      </div>

      {/* Third Div */}
      <div className="section-top bottom-border">
        <div className="bold-text">About Me</div>
        <div>S.E</div>
      </div>

      {/* Fourth Div */}
      <div className="section">
        <div className="space"></div>
        <div>
          I have extensive experience in coding for all languages (Java,
          Javascript, HTML, React, Lua, Apex, Python, Salesforce 'Apex'), as
          well as designing graphics on various platforms including HTML and
          CSS.
        </div>
      </div>
      <div className="bold-text">Work History</div>
    </StyledComponent>
  );
};

export default AboutMeComponent;
