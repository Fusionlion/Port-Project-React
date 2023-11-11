import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CourseHero from "./CourseHero";
import CourseIde from "./CourseIde";
import FourthSection from "./FourthSection";

export default function Course() {
    const [activeTab, setActiveTab] = useState("Data");

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };
  const handleChildClick = (data) => {
     console.log("Received data in parent:", data);
  };
  return (
    <Wrapper>
      <Background />
      <CourseHero active={handleTabClick} />

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
        <FourthSection />
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
`;

const Background = styled.div`
  background-image: linear-gradient(to top, #000000, #040315, #000);
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
`;
// gatsby develop
