import React from "react";
import styled from "styled-components";
import MobileProjectCard from "./MobileProjectCard";
import FooterSection from "../sections/FooterSection";
import { useCallback, useState } from "react";
import MobileProjectList from "./MobileProjectList";
import MobileProjectDetail from "./MobileProjectDetail";
import { Link } from "gatsby";
import RoundedImageComponent from "./RoundedImageComponent";
import MidSectionComponent from "./MidSectionComponent";
import ThreeImagesComponent from "./ThreeImagesComponent";
import PictureComponent from "./PictureComponent";
import MobileProjectDetailArticle from "./MobileProjectDetailArticle";
export default function MobileProjects() {
  const [activeTab, setActiveTab] = useState("0");
  const [detailData, setDetailData] = useState([]);

  const [showArticle, setShowArticel] = useState(false);
  const handleArrow = () => {
    setShowArticel(false);
  };
  const handleTabClick = (cardPrints) => {
    // setActiveTab(tabName);
    // setArticle(articlefromchild);
    setDetailData(cardPrints);
    if (cardPrints.article && cardPrints.article.length > 0) {
      setShowArticel(true);
    }

    // console.log("card clciked " + articlefromchild);
    //  console.log("card clicke in projects 2 " + cardClickedBios);
  };
  return (
    <Wrapper>
      {!showArticle && (
        <>
          <div className="projects-top-content">
            <div className="project-top-left">
              <div className="project-title">
                A Software Developer's Odyssey
              </div>
              <div className="project-title">Hands-on experience</div>
              <div className="project-title">
                I've successfully completed numerous projects, showcasing my
                expertise in crafting robust and efficient software solutions. I
                take pride in my ability to seamlessly collaborate with back-end
                developers, design APIs, and deploy large-scale software with
                precision.
              </div>
            </div>
            <div className="project-top-right">
              <div className="project-right-number">10</div>
              <div className="project-right-line"></div>
              <div className="project-right-number">04</div>
            </div>
          </div>

          <ProjectCards>
            <div className="cards-title"> My Projects</div>
            <div className="cards-horizontal-projects">
              <MobileProjectList theCardClicked={handleTabClick} />
            </div>
          </ProjectCards>

          <Paddy>
            <ThreeImagesComponent
              buttonLabel="GitHub"
              link="https://github.com/zabloncharles/"
              title="Check out more pojects on github"
              text="Discover an array of compelling projects on my GitHub profile, showcasing the culmination of years of experience as a seasoned software developer. With a focus on Java programming, Salesforce development, front-end design, and iOS app design, each repository is a testament to my commitment to pushing the boundaries of technology. From intricate Java solutions to the complexities of Salesforce, engaging front-end designs, and innovative iOS applications, the projects reflect a journey fueled by a passion for innovation and a deep understanding of cutting-edge technologies. Delve into the intricacies of code, explore the nuances of problem-solving, and witness the evolution of skills in this GitHub portfolio. Whether you're a coding enthusiast or a fellow developer, these projects serve as a narrative of exploration, highlighting the relentless pursuit of mastery in the ever-evolving digital landscape. Check out the extensive collection on GitHub and join the journey of continuous learning and technological excellence."
            />
          </Paddy>

          <FooterSection />
        </>
      )}
      {/* show the detail */}
      {showArticle && (
        <MobileProjectDetailArticle
          data={detailData}
          arrowClicked={handleArrow}
        />
      )}
    </Wrapper>
  );
}
const Paddy = styled.div`
  padding: 20px 20px;
`;
const BackgroundProjects = styled.div`
  background-image: url("/images/my-svg/first.svg");
  background-size: cover;
  height: 100%;
  width: 100%;
  z-index: -1;
  position: absolute;
  overflow: hidden;
  background-color: black;
`;
const ProjectCards = styled.div`
  padding: 0px 20px;
  background-image: url(/images/my-svg/bubbles.svg);
  background-size: cover;
  background-repeat: repeat;
  background-position-y: center;
  .cards-title {
    font-size: 15px;
    color: white;
    padding-top: 5px;
    padding-bottom: 10px;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 16;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.8;
    font-weight: normal;
  }

  .cards-horizontal-projects {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 23px;
    gap: 10px;
  }
`;

const Wrapper = styled.div`
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  background-color: black;
  position: relative;

  .projects-top-content {
    display: flex;
    justify-content: space-between;
    position: relative;
    background-image: url(/images/my-svg/lines.svg);
    background-size: cover;
    background-repeat: repeat-y;
    background-position: left top;
  }
  .project-top-left {
    height: 473px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 20px;
    margin-top: 26px;

    > :nth-child(1) {
      font-family: "cisnero";
      font-size: 52px;
      background: linear-gradient(
        to left,
        rgb(218 47 47),
        white,
        rgb(244 31 169)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 5px 9px 11px #000000, 1px -1px 0px #151417;
      font-weight: normal;
    }
    > :nth-child(2) {
      font-size: 15px;
      color: gray;
      font-weight: normal;
    }
    > :nth-child(3) {
      font-size: 13px;
      color: white;
      padding-top: 5px;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 16;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.8;
      font-weight: normal;
    }
  }
  .project-top-right {
    color: #494444;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 95px;
    position: absolute;
    right: 0;
  }

  .project-title {
    font-size: 54px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .project-right-number {
    font-size: 18px;
    font-weight: bold;
  }

  .project-right-line {
    width: 2px;
    background-color: #494444;
    margin: 5px 0;
    height: 100px;
  }
`;
