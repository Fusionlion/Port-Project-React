import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const Wrapper = styled.div`
  // Your styles here
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(props) => props.zIndex || -1};
  @media screen and (min-width: 999px) {
    // Your styles here
    z-index: ${(props) => props.zIndex || 0};
    height: 100vh;
    width: 100%;
    position: fixed;
  }
`;

const Torch = styled.div`
  // Your styles here
  position: fixed;
  top: 0px;
  background: radial-gradient(ellipse at bottom, #000000cc 0%, #000000 50%);
  width: 100%;
  height: 100vh;
  z-index: -2;
`;

// Keyframes for star animation
const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

// Function to generate multiple box shadows
const multipleBoxShadow = (n) => {
  let value = "";
  for (let i = 0; i < n; i++) {
    value += `${Math.floor(Math.random() * 2000)}px ${Math.floor(
      Math.random() * 2000
    )}px #FFF`;
    if (i < n - 1) {
      value += ", ";
    }
  }
  return value;
};

// Styled components
const StyledStarsContainer = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${(props) => multipleBoxShadow(props.n)};
  animation: ${animStar} ${(props) => props.speed}s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${(props) => multipleBoxShadow(props.n)};
  }
`;

const StyledTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 10px;

  span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ParallaxStars = (props) => {
  return (
    // <Wrapper zIndex={props.zIndex}>
    //   <StyledStarsContainer
    //     id="stars"
    //     n={70}
    //     speed={500}
    //   ></StyledStarsContainer>
    //   <StyledStarsContainer
    //     id="stars2"
    //     n={20}
    //     speed={200}
    //   ></StyledStarsContainer>
    //   <StyledStarsContainer
    //     id="stars3"
    //     n={710}
    //     speed={850}
    //   ></StyledStarsContainer>
    //   {/* <Torch /> */}
    // </Wrapper>
    <>nothing</>
  );
};

export default ParallaxStars;
