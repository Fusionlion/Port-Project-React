import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CourseHero from "./CourseHero";
import CourseIde from "./CourseIde";
import FifthSection from "./FifthSection";

export default function Course() {
  const [activeTab, setActiveTab] = useState("start");
 const [activeCard, setActiveCard] = useState("card");
  const handleTabClick = (tabName) => {
    console.log("the name is " + tabName);
    setActiveTab(tabName);
  };
  const handleCardClickChild = (card) => {
    console.log("card clikde was" + card);
    setActiveCard(card);
  };
  return (
    <Wrapper>
      <Background />
      {activeTab === "start" && <CourseHero setActiveTab={handleTabClick} />}

      <div
        className={`tab-content-item ${
          activeTab === "start" || activeTab === "hide-hero"
            ? "fade-in"
            : "fade-out"
        }`}
      >
        {activeTab === "hide-hero" && <div> <br></br>
        <br></br>
        <br></br> </div>}
        
        <CourseIde setActiveCardParent={handleCardClickChild} />
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
  background-image: linear-gradient(to top, #000000, #040315, #0000);
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
`;
// gatsby develop
