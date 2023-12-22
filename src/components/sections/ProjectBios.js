import React from "react";
import styled from "styled-components";
import ProjectBioCard from "../buttons/ProjectBioCard";
import { useState } from "react";
import ParallaxSection from "./ParallaxSection";
import ProjectArticle from "./ProjectArticle";
import ProjectsList from "./ProjectsList";
import AboutArticle from "./AboutArticle";
import ProjectBiosList from "./ProjectBiosList";

function ProjectBios() {
  const [activeTab, setActiveTab] = useState("0");
  const [article, setArticle] = useState([]);
  let cardClickedBios;
  const handleTabClick = (tabName, articlefromchild) => {
    setActiveTab(tabName);
    setArticle(articlefromchild);
    cardClickedBios = tabName;
    // console.log("card clciked " + articlefromchild);
    //  console.log("card clicke in projects 2 " + cardClickedBios);
  };
  return (
    <BioWrapper>
      <ProjectsColumn>
        <div className="column-desc">
          As a software engineer, I've successfully delivered a diverse range of
          impactful projects, demonstrating proficiency in various technologies
          and a proven track record of project excellence.
        </div>
        <ProjectBiosList theCardClicked={handleTabClick} />
      </ProjectsColumn>
      {/* THE info and description of project in detail */}
      <Wrapper>
        <AboutArticle data={article} title={activeTab} />

        {/* second app */}
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
  background: black;

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

  background: black;
`;

const Wrapper = styled.div`
  overflow: scroll;
  margin-left: 5px;
  gap: 50px;
  flex: 1;
  border-radius: 10px;
  padding-bottom: 139px;
  background: black;
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
