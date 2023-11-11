import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CourseHero from "./CourseHero";
import CourseIde from "./CourseIde";
import FifthSection from "./FifthSection";

export default function Course() {
  const [activeTab, setActiveTab] = useState("Data");

  const handleTabClick = (tabName) => {
    console.log("the name is " + tabName);
    setActiveTab(tabName);
  };
  return (
    <Wrapper>
      <Background />
      <CourseHero setActiveTab={handleTabClick} />

      <div
        className={`tab-content-item ${
          activeTab === "Data" ? "fade-in" : "fade-out"
        }`}
      >
        <CourseIde />
      </div>
      <div
        className={`tab-content-item ${
          activeTab === "React" ? "fade-in" : "fade-out"
        }`}
      >
        <FifthSection />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: scroll;
  margin-bottom: 300px;
  .tab-content-item {
  
    transition: all 3s ease-in-out; /* Adjust the transition timing function as needed */
  }

  .fade-in {
    opacity: 1;
    transition: opacity 0.7s ease-in-out;
  }
  .fade-out {
    transition: opacity 0.7s ease-in-out;
    opacity: 0;
  }
`;

const Background = styled.div`
  background-image: linear-gradient(to top, #000000, #040315, #000);
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
`;
// gatsby develop
