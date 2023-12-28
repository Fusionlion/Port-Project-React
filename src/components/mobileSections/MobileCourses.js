import React, { useState, useRef } from "react";
import styled from "styled-components";
import CardList from "../sections/CardList";
import topicData from "../../data/data.json";
import Ide from "../sections/Ide";
import FooterSection from "../sections/FooterSection";
import MobileProjectList from "./MobileProjectList";
import MobileCourseList from "./MobileCourseList";

function MobileCourses() {
  const [topic, setTopic] = useState([topicData]);
  const [topicClicked, setTopicClicked] = useState(0);
  const [titleClicked, setTitleClicked] = useState(false);
  const data = topicData.map((record) => {
    return record;
  });
  let cardClickedRaw;
  const handleCardClickChild = (print) => {
    // console.log(data[topicClicked].lesson);
    // the title of the card
    cardClickedRaw = print.title;
    console.log(topicClicked + " topic clicked");
    setTopicClicked(print.num);
    setTitleClicked(print.title);
    console.log("card click up top was " + cardClickedRaw + "num was " + print.num);
    // setTopicClicked(card);
    

    // Adjust the value (e.g., 100) based on how much you want to scroll down
  };

  return (
    <BodyContain>
      <div className="overview-and-cards">
        <div className="projects-top-content">
          <div className="project-top-left">
            <div className="project-title">leonardo da Vinci</div>
            <div className="project-title">1452 to 1519</div>
            <div className="project-title">
              Art Museum App Concept designed by Ajay Talwar. Connect with them
              on Dribbble; the global community for designers and creative
              professionals.
            </div>
          </div>
          <div className="project-top-right">
            <div className="project-right-number">10</div>
            <div className="project-right-line"></div>
            <div className="project-right-number">04</div>
          </div>
        </div>
        <Ide
          className="mobile-ide"
          // text={data[topicClicked].lesson}
          text={data[topicClicked].lesson}
          parentCardClicked={topicClicked}
          title={data[topicClicked].title}
          quiz={data[topicClicked].quiz}
          // switchIde={handleSwitching}
        />
      </div>
      <ProjectCards>
        <div className="cards-title"> Data Structures & Algorithms</div>
        <div className="cards-horizontal-projects">
          <MobileCourseList
           
            theCardClicked={handleCardClickChild}
          />
        </div>
      </ProjectCards>

      {/* end */}
      <FooterSection />
    </BodyContain>
  );
}

export default MobileCourses;
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
    color: white;
  }

  .cards-horizontal-projects {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 23px;
    gap: 10px;
  }
`;
const BodyContain = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: "Spline Sans Mono", sans-serif;
  margin-bottom: 167px;
  background: linear-gradient(to top, #000000, #000, #000);
  width: 100%;
  color: white;
  overflow: hidden;

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
    padding-bottom: 22px;

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
  .bottom-container {
    display: flex;
    padding: 20px 0px;
    overflow: scroll;
    gap: 15px;
    border-radius: 20px;
  }
`;
