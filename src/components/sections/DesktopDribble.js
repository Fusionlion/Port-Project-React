import React, { useEffect } from "react";
import styled from "styled-components";
import { GiBrokenHeartZone } from "react-icons/gi";
import { useCallback, useState } from "react";

import MobileDribbleDetail from "../mobileSections/MobileDribbleDetail";
import FooterSection from "./FooterSection";
import ThreeImagesComponent from "../mobileSections/ThreeImagesComponent";
import DribbleCardList from "../mobileSections/DribbleCardList";

export default function DesktopDribble() {
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
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add this line for smooth scrolling
    });

    // You can also use this effect to scroll to the top whenever some condition changes
    // For example, when a state variable changes
    // window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      {!showArticle && (
        <>
          <div className="projects-top-content">
            <div className="project-top-left">
              <div className="project-title">A showcase of my UI works</div>
              <div className="project-title">Hands-on experience</div>
              <div className="project-title">
                Welcome to my world of UI design, where creativity meets the
                purpose and every pixel tells a story. I am thrilled to share a
                glimpse of my remarkable journey as a UI designer and showcase
                some of my most captivating works.
              </div>
            </div>
            <div className="project-top-right">
              <div className="project-right-number">10</div>
              <div className="project-right-line"></div>
              <div className="project-right-number">04</div>
            </div>
          </div>

          <ProjectCards>
            <TopTitle>
              <div>My Projects</div>
              <div className="right-title">
                <GiBrokenHeartZone />
              </div>
            </TopTitle>
            <div className="cards-horizontal-projects">
              <DribbleCardList theCardClicked={handleTabClick} />
            </div>
          </ProjectCards>

          <Paddy>
            <ThreeImagesComponent
              buttonLabel="Dribble"
              link="https://dribbble.com/cranoz"
              title="Check out more designs on Dribble"
              text="I think that’s the point that a lot of designers might be missing that the ultimate goal is actually solving a problem. While aesthetics play an important role on the experience they’re certainly not the whole story. So the question is what’s the key to this next visual language to take advantage of new opportunities including a whole new spatial computing era."
            />
          </Paddy>

          <FooterSection />
        </>
      )}
      {/* show the detail */}
      {showArticle && (
        <MobileDribbleDetail data={detailData} arrowClicked={handleArrow} />
      )}
    </Wrapper>
  );
}
const Paddy = styled.div`
  padding: 20px 20px;
`;
const TopTitle = styled.div`
  font-family: "Spline Sans Mono", sans-serif;
  font-size: 17px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: white;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const ProjectCards = styled.div`
  padding: 0px 20px;
  background-image: url(/images/my-svg/bubbles.svg);
  background-size: cover;
  background-repeat: repeat;
  background-position-y: center;

  border-bottom: 1px #ffffff2b solid;
  padding-bottom: 45px;
  .cards-title {
    font-size: 16px;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;

const Wrapper = styled.div`
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  /* background-color: black; */
  position: relative;

  @media screen and (max-width: 999px) {
    background-color: black;
  }

  .projects-top-content {
    display: flex;
    justify-content: space-between;
    position: relative;
    /* background-image: url(/images/my-svg/lines.svg);
    background-size: cover;
    background-repeat: repeat-y;
    background-position: left top; */
    backdrop-filter: blur(31px);
    border: 1px solid #2e2d2d;
    border-radius: 18px;
    margin: 99px 10px 0px 10px;

    @media screen and (max-width: 999px) {
      display: flex;
      justify-content: space-between;
      position: relative;
      background-image: url(/images/my-svg/lines.svg);
      background-size: cover;
      background-repeat: repeat-y;
      background-position: left top;
    }
  }
  .project-top-left {
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 20px;
    margin-top: 12px;

    > :nth-child(1) {
      font-family: "cisnero";
      font-size: 72px;
      max-width: 757px;
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
      font-size: 16px;
      color: gray;
      font-weight: normal;
    }
    > :nth-child(3) {
      font-size: 17px;
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
      max-width: 983px;
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
