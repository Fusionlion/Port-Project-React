import React from "react";
import styled, { keyframes } from "styled-components";
import ParallaxStars from "./MobileBackgrounds.js/ParallaxStars";

export default function LoadingScreen() {
  return (
    <Wrapper>
      <StyledLoading />
      <ParallaxStars />
    </Wrapper>
  );
}
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Wrapper = styled.div`
  // Your styles here
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(25);
  z-index: 99;
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(9px);
  overflow: hidden;
`;

const StyledLoading = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 100px;
  height: 100px;

  animation: ${rotate} 1s linear infinite;
`;
