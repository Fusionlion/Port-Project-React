import React from "react";
import styled from "styled-components";
import CourseHero from "./CourseHero";
import CourseIde from "./CourseIde";
export default function Course() {
  return (
    <Wrapper>
      <Background />
      <CourseHero />
      <CourseIde />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: scroll;
  margin-bottom: 300px;
`;

const Background = styled.div`
  background-image: linear-gradient(to top, #05040514, #000, #000);
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
`;
// gatsby develop
