import React from "react";
import styled from "styled-components";
import ProjectBioCard from "../buttons/ProjectBioCard";
import { useState } from "react";
import ParallaxSection from "./ParallaxSection";
import ProjectArticle from "./ProjectArticle";

function ProjectBios() {
  const [activeTab, setActiveTab] = useState("Showcase");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <BioWrapper>
      <ProjectsColumn>
        <div className="column-desc">
          As a software engineer, I've successfully delivered a diverse range of
          impactful projects, demonstrating proficiency in various technologies
          and a proven track record of project excellence.
        </div>

        <ProjectBioCard
          title="MyHealth+"
          desc="I developed an iOS application using Xcode, which serves as a sophisticated platform for meticulously monitoring fertility windows, as well as seamlessly facilitating appointments with healthcare professionals, thereby delivering a holistic solution for the management of reproductive health. This app empowers users with the ability to autonomously manage their fertility, while ensuring effortless access to specialized medical consultations when requisite."
          imageSrc="https://remezcla.com/wp-content/uploads/2022/10/GettyImages-1430670718-1424x1068.jpg"
          num="1"
          tapped={() => handleTabClick("Fusion")}
        />
        <ProjectBioCard
          title="Fusion+"
          imageSrc="https://remezcla.com/wp-content/uploads/2022/10/GettyImages-1430670718-1424x1068.jpg"
          desc="I developed an iOS application using Xcode, which serves as a sophisticated platform for meticulously monitoring fertility windows, as well as seamlessly facilitating appointments with healthcare professionals, thereby delivering a holistic solution for the management of reproductive health. This app empowers users with the ability to autonomously manage their fertility, while ensuring effortless access to specialized medical consultations when requisite."
          tapped={() => handleTabClick("Fusion")}
        />
        <ProjectBioCard
          title="Fuze"
          imageSrc="/images/my-svg/stock-app.png"
          desc="I engineered an iOS application through Xcode that provides a cutting-edge interface for users to engage in the intricate world of stock trading, offering real-time market data, advanced analysis tools, and seamless trade execution capabilities, thereby enabling individuals to participate in the dynamic and complex realm of financial markets with agility and sophistication. This app empowers users with the tools and insights needed to navigate the intricate landscape of stock trading, fostering informed decision-making and facilitating efficient execution of investment strategies."
          tapped={() => handleTabClick("Mathis")}
        />
        <ProjectBioCard
          title="Showcase"
          imageSrc="/images/my-svg/showcase.png"
          desc="I developed a Salesforce product showcase page using Apex, HTML, and CSS, creating a compelling and visually engaging platform within the Salesforce ecosystem. This page empowers businesses to effectively present their products, enhancing their sales and marketing strategies with a rich and dynamic user experience."
        />
      </ProjectsColumn>
      {/* THE info and description of project in detail */}
      <Wrapper>
        <div
          className={`tab-content-item ${
            activeTab === "Showcase" ? "fade-in" : "fade-out"
          }`}
        >
          <ParallaxSection />
        </div>
        {/* second app */}
        <div
          className={`tab-content-item ${
            activeTab === "Fusion" ? "fade-in" : "fade-out"
          }`}
        >
          <ProjectArticle />
        </div>
      </Wrapper>
    </BioWrapper>
  );
}

export default ProjectBios;

const ProjectsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  overflow: scroll;
  border-right: 1px solid #c486605c;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 139px;
  width: 290px;

  .column-desc {
    font-family: "Spline Sans Mono", sans-serif;
    text-align: end;
    line-height: 23px;
    background-clip: text;
    background: linear-gradient(to right, rgb(255 255 255), rgb(146 73 107));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;
const BioWrapper = styled.div`
  backdrop-filter: blur(21px);
  border-radius: 18px;
  /* border: 1px #ffffff12 solid; */
  height: 100vh;
  width: 100%;
  border-radius: 14px;
  padding: 10px 15px;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
  display: flex;
  overflow: hidden;
`;

const Wrapper = styled.div`
  overflow: scroll;
  margin-left: 5px;
  gap: 50px;
  flex: 1;
  border-radius: 10px;
  padding-bottom: 139px;

  .tab-content-item {
    transition: transform 0.3s ease-in-out;
    transition: opacity 0.7s linear;
    transform: translateX(100%);
  }

  .fade-in {
    transform: translateX(0);
  }

  .fade-out {
    transform: translateX(-150%);
    opacity: 0;
  }
`;
