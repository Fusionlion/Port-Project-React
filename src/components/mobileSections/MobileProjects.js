import React from "react";
import styled from "styled-components";
import MobileProjectCard from "./MobileProjectCard";
import FooterSection from "../sections/FooterSection";
import { useCallback, useState } from "react";
import MobileProjectList from "./MobileProjectList";
import MobileProjectDetail from "./MobileProjectDetail";
import { Link } from "gatsby";
import RoundedImageComponent from "./RoundedImageComponent";
export default function MobileProjects() {
  const [activeTab, setActiveTab] = useState("0");
  const [detailData, setDetailData] = useState([]);

  const [showArticle, setShowArticel] = useState(false);
  const handleArrow = () => {
    console.log("the arrow was clicked");
    setShowArticel(false);
  };
  const handleTabClick = (cardPrints) => {
    // setActiveTab(tabName);
    // setArticle(articlefromchild);
    setDetailData(cardPrints);
    if (cardPrints.article && cardPrints.article.length > 0) {
      setShowArticel(true);
    }
    console.log(detailData + " tawy artic clicked");
    // console.log("card clciked " + articlefromchild);
    //  console.log("card clicke in projects 2 " + cardClickedBios);
  };
  return (
    <Wrapper>
      {!showArticle && (
        <>
          <div className="projects-top-content">
            <div className="project-top-left">
              <div className="project-title">leonardo da Vinci</div>
              <div className="project-title">1452 to 1519</div>
              <div className="project-title">
                Art Museum App Concept designed by Ajay Talwar. Connect with
                them on Dribbble; the global community for designers and
                creative professionals.
              </div>
            </div>
            <div className="project-top-right">
              <div className="project-right-number">10</div>
              <div className="project-right-line"></div>
              <div className="project-right-number">04</div>
            </div>
          </div>
          <Paddy>
            <RoundedImageComponent/>
          </Paddy>
          <ProjectCards>
            <div className="cards-title"> My Projects</div>
            <div className="cards-horizontal-projects">
              <MobileProjectList theCardClicked={handleTabClick} />
            </div>
          </ProjectCards>
          <FooterSection />
        </>
      )}
      {/* show the detail */}
      {showArticle && (
        <MobileProjectDetail data={detailData} arrowClicked={handleArrow} />
      )}
    </Wrapper>
  );
}
const Paddy = styled.div`
  padding: 0px 20px;
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
  padding: 20px;
  margin-top: 20px;
  background-image: url(/images/my-svg/bubbles.svg);
  background-size: cover;
  background-repeat: repeat;
  background-position-y: center;
  .cards-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
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
    background-image: url(/images/my-svg/sea-animals.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom left;
  }
  .project-top-left {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 20px;
    padding-bottom: 72px;

    > :nth-child(1) {
      font-family: "cisnero";
    }
    > :nth-child(2) {
      font-size: 15px;
    }
    > :nth-child(3) {
      font-size: 15px;
      line-height: initial;
      color: tan;
    }
  }
  .project-top-right {
    color: #ffffff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 95px;
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
    background-color: #ffffff;
    margin: 5px 0;
    height: 100px;
  }
`;
