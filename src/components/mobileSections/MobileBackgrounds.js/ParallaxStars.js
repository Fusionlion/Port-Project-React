import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const Wrapper = styled.div`
  // Your styles here
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Torch = styled.div`
  // Your styles here
  position: fixed;
  top: 0px;
  background: radial-gradient(ellipse at bottom, #ff5c07e6 0%, #090a0f 100%);
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

const ParallaxStars = () => {
  return (
    <Wrapper>
      <StyledStarsContainer
        id="stars"
        n={700}
        speed={50}
      ></StyledStarsContainer>
      <StyledStarsContainer
        id="stars2"
        n={200}
        speed={100}
      ></StyledStarsContainer>
      <StyledStarsContainer
        id="stars3"
        n={100}
        speed={150}
      ></StyledStarsContainer>
      <Torch />
    </Wrapper>
  );
};

export default ParallaxStars;
