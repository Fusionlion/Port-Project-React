import React, { useState, useRef } from "react";
import styled from "styled-components";
import CardList from "../sections/CardList";
import topicData from "../../data/courses.json";
import Ide from "../sections/Ide";
import FooterSection from "../sections/FooterSection";
import MobileProjectList from "./MobileProjectList";
import MobileCourseList from "./MobileCourseList";

function MobileCourses() {
  const [cardData, setCardData] = useState([]);

  const [topicClicked, setTopicClicked] = useState();
  const [currLineFromIde, setCurrLineFromIde] = useState();
  const handleLineFromIde = (line) => {
    setCurrLineFromIde(line);
  };
  const handleCardClickChild = (print) => {
    setCardData(print);
    setTopicClicked(print.title);
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use 'auto' for instant scrolling
    });
  };

  return (
    <BodyContain>
      <div className="overview-and-cards">
        <div className="projects-top-content">
          <div className="project-top-left">
            <div className="project-title">Evaluate Your Skills</div>
            <div className="project-title">Comprehensive courses</div>
            <li className="project-title">
              Unlock the door to expertise with TechMastery Courses. Delve into
              the intricacies of data structures, master the art of Java
              programming, and empower your Salesforce development journey.
            </li>
          </div>
          <div className="project-top-right">
            <div className="project-right-number">10</div>
            <div className="project-right-line"></div>
            <div className="project-right-number">04</div>
          </div>
        </div>
        <Ide
          text={cardData.lesson}
          parentCardClicked={topicClicked}
          title={cardData.title}
          quiz={cardData.quiz}
          updateLineParent={handleLineFromIde}
          // switchIde={handleSwitching}
        />
      </div>
      <ProjectCards>
        <div className="cards-horizontal-projects">
          {Object.keys(topicData).map((subject, index) => (
            <div key={`${subject}_${index}`}>
              <div className="cards-title">
                <div>{subject}</div>
                <div>
                  {topicData[subject].lesson ?? topicData[subject].length}
                </div>
              </div>
              <div className="cards-horizontal-projects">
                <MobileCourseList
                  key={`${subject}_course_${index}`}
                  subject={subject}
                  theCardClicked={handleCardClickChild}
                  lineChanged={currLineFromIde}
                />
              </div>
            </div>
          ))}
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
    display: flex;
    justify-content: space-between;
  }

  .cards-horizontal-projects {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 23px;
    gap: 27px;
  }
`;
const BodyContain = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: "Spline Sans Mono", sans-serif;
  background: linear-gradient(to top, #000000, #000, #000);
  width: 100%;
  color: white;
  overflow: hidden;

  .projects-top-content {
    display: flex;
    justify-content: space-between;
    position: relative;
    background-image: url(/images/my-svg/falling-rocks.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom left;
  }
  .project-top-left {
    height: 439px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 20px;
    padding-bottom: 22px;

    > :nth-child(1) {
      font-family: "cisnero";
      font-size: 52px;
      background: linear-gradient(to right, rgb(255 255 255), rgb(70 86 157));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 5px 9px 11px #000000, 1px -1px 0px #151417;
    }
    > :nth-child(2) {
      font-size: 15px;
      line-height: 1.2;
      font-weight: normal;
      color: gray;
    }
    > :nth-child(3) {
      font-size: 15px;
      line-height: initial;
      color: tan;
      line-height: 1.2;
      font-weight: normal;
      list-style: katakana-iroha;
    }
  }
  .project-top-right {
    color: #ffffff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5px;
    position: absolute;
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
