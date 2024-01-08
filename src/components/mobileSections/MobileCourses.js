import React, { useState, useEffect, useRef } from "react";
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
  const ideRef = useRef();
  const handleCardClickChild = (print) => {
    setCardData(print);
    setTopicClicked(print.title);
    // Scroll to the top of the page

    ideRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  };
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // You can also use this effect to scroll to the top whenever some condition changes
    // For example, when a state variable changes
    // window.scrollTo(0, 0);
  }, []);

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
          innerRef={ideRef} // Assign the ref to the Ide component
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
            <div key={`${subject}_${index}`} className="subject-container">
              <div className="cards-title">
                <div>{subject}</div>
                <div>
                  {topicData[subject].lesson ?? topicData[subject].length}
                </div>
              </div>
              <div className="cards-scroll-container">
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
  .subject-container {
    overflow: hidden;
  }
  .cards-scroll-container {
    display: flex;
    gap: 10px;
    overflow: scroll;
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
    background-image: url(/images/my-svg/header-stars.svg);
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
      background: linear-gradient(to right, rgb(255 239 239), rgb(252 0 202));
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
      list-style: katakana-iroha;
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
