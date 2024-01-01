import React from "react";
import styled from "styled-components";

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
  }
  .bottom-border {
    border-bottom: 1px solid #3c3c3c;
    padding-bottom: 10px;
  }
  .section {
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
    width: 100%;
    height: 76px;
    background: aliceblue;
    border-radius: 7px;
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
    background-color: #1f1f23;
    background-size: cover;
    position: relative;
    border-radius: 12px;
    border: 1px solid #181616;
  }
  .section-svg {
    height: 492px;
    background-image: url(/images/my-svg/exploded_mockup.png);
    background-size: contain;
    position: absolute;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-transform: scale(1.7);
    -ms-transform: scale(1.7);
    -webkit-transform: scale(1.7);
    -ms-transform: scale(1.7);
    transform: scale(2.2);
    left: 27px;
  }
  .flip-text-1 {
    transform: rotate(270deg);
    top: 244px;
    right: 20px;
    position: absolute;
    font-size: 42px;
  }
  .flip-text-2 {
    transform: rotate(270deg);
    top: 139px;
    right: -116px;
    position: absolute;
    font-size: 82px;
  }
`;

const AboutMeComponent = () => {
  return (
    <StyledComponent>
      {/* Second Div */}
      <div className="section-image">
        <div className="section-svg"></div>
        <div className="flip-text-1">software</div>
        <div className="flip-text-2">developer</div>
      </div>

      {/* Third Div */}
      <div className="section bottom-border">
        <div className="bold-text">Bold Text</div>
        <div>Smaller Text</div>
      </div>

      {/* Fourth Div */}
      <div className="section ">
        <div className="space"></div>
        <div>
          I have extensive experience in coding for all languages (Java,
          Javascript, Apex, Salesforce), as well as designing graphics on
          various platforms including HTML and CSS.
        </div>
      </div>
      <div className="bold-text">Work History</div>
    </StyledComponent>
  );
};

export default AboutMeComponent;
