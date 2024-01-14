import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import CardList from "../sections/CardList";
import topicData from "../../data/courses.json";
import Ide from "../sections/Ide";
import FooterSection from "../sections/FooterSection";
import MobileProjectList from "./MobileProjectList";
import MobileCourseList from "./MobileCourseList";
import CourseLessonRow from "./CourseLessonRow";
import LessonRowList from "./LessonRowList";
import CourseDetail from "./CourseDetail";
import CategoryCard from "./Cards/CategoryCard";
import TrendingCards from "./TrendingCards";
import CurrentProjectList from "./lists/CurrentProjectList";
import NumberCourse from "./Cards/NumberCourse";
import MobileProjectDetail from "./MobileProjectDetail";
import MobileProjectDetailArticle from "./MobileProjectDetailArticle";
import CategoryList from "./lists/CategoryList";
import BooksList from "./lists/BooksList";
import CoursesComponent from "./CoursesComponent";

function MobileCourses() {
  const [cardData, setCardData] = useState([]);
  const [showIde, setShowIde] = useState(false);
  const [showArticle, setShowArticle] = useState(false);
  const [showArticel, setShowArticel] = useState(false);
  const [topicClicked, setTopicClicked] = useState();
  const [currLineFromIde, setCurrLineFromIde] = useState();
  const [subjectCurr, setSubjectCurr] = useState();
  const [detailData, setDetailData] = useState([]);
  const [activeTab, setActiveTab] = useState("0");
  const [detailProjectData, setDetailProjectData] = useState([]);

  const handleProjectTabClick = (cardPrints) => {
    // setActiveTab(tabName);
    // setArticle(articlefromchild);
    setDetailData(cardPrints);
    if (cardPrints.article && cardPrints.article.length > 0) {
      setShowArticel(true);
    }

    // console.log("card clciked " + articlefromchild);
    //  console.log("card clicke in projects 2 " + cardClickedBios);
  };
  const handleArrow = () => {
    setShowArticle(false);
  };
  const handleLineFromIde = (line) => {
    setCurrLineFromIde(line);
  };

  const ideRef = useRef();
  const handleArticle = (placeholder) => {
    setShowArticle(true);
  };
  const handleCardClickChild = (print, sub) => {
    setShowIde(true);
    setCardData(print);
    setTopicClicked(print.title);
    setSubjectCurr(sub);
    console.log("here w" + subjectCurr);
    // ideRef.current.scrollIntoView({
    //   behavior: "smooth",
    //   inline: "center",
    //   block: "center",
    // });
  };

  const handleTabClick = (cardPrints) => {
    setShowArticle(true);
    setDetailData(cardPrints);
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // You can also use this effect to scroll to the top whenever some condition changes
    // For example, when a state variable changes
    // window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BodyContain>
        <div className="overview-and-cards">
          <div className="projects-top-content">
            <div className="project-top-left">
              <div className="project-title">Evaluate Your Skills</div>
              <div className="project-title">Comprehensive courses</div>
              <li className="project-title">
                Unlock the door to expertise with TechMastery Courses. Delve
                into the intricacies of data structures, master the art of Java
                programming, and empower your Salesforce development journey.
              </li>
            </div>
            <div className="project-top-right">
              <div className="project-right-number">10</div>
              <div className="project-right-line"></div>
              <div className="project-right-number">04</div>
            </div>
          </div>

          <div className="cards-title"> My Projects</div>
          <div className="cards-horizontal-list">
            <CategoryList theCardClicked={handleTabClick} />
          </div>

          <div className="cards-title"> Books & Research</div>
          <div className="cards-horizontal-list">
            <BooksList theCardClicked={handleTabClick} />
          </div>

          <div className="cards-title"> Current Projects</div>
          <div className="cards-horizontal-list">
            <CurrentProjectList theCardClicked={handleTabClick} />
          </div>

          <div className={ideRef}></div>
        </div>
        {!showIde && (
          <ProjectCards>
            <div className="cards-horizontal-projects">
              {Object.keys(topicData).map((subject, index) => (
                <div key={`${subject}_${index}`} className="subject-container">
                  {index < 1 && (
                    <div className="course-title">
                      {/* <div>{subject}</div> */}
                      <div>Courses</div>
                      {/* <div>
                      {topicData[subject].lesson ?? topicData[subject].length}
                    </div> */}
                    </div>
                  )}
                  <div className="cards-scroll-container">
                    <MobileCourseList
                      count={topicData[subject].length}
                      index={index}
                      key={`${subject}_course_${index}`}
                      subject={subject}
                      clicked={handleCardClickChild}
                      // theCardClicked={() => {
                      //   setClickedSubject(subject);

                      //   console.log(clickedSubject + " " + " " + subject);
                      // }}
                      lineChanged={currLineFromIde}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ProjectCards>
        )}
        <PaddingH>
          <CoursesComponent linksOff="off" />
        </PaddingH>
        {/* end */}
        <FooterSection />
        {console.log(" down" + subjectCurr)}
      </BodyContain>
      {showIde && (
        <CourseDetail
          arrowClicked={() => {
            setShowIde(false);
          }}
          subject={subjectCurr}
        />
      )}
      {showArticle && (
        <MobileProjectDetailArticle
          data={detailData}
          arrowClicked={handleArrow}
        />
      )}
    </>
  );
}

export default MobileCourses;

const PaddingH = styled.div`
  // Your styles here
  padding: 0px 20px;
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
    color: white;
    display: flex;
    justify-content: space-between;
  }

  .cards-horizontal-projects {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    /* flex-wrap: wrap; */
    row-gap: 23px;
    gap: 27px;
  }
  .subject-container {
    overflow: hidden;
  }
  .cards-scroll-container {
    display: flex;
    gap: 10px;
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
  .cards-title {
    // Your styles here
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
    color: white;
    padding: 0px 20px;
  }
  .course-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
    color: white;
    text-align: center;
  }
  .cards-horizontal-list {
    display: flex;
    gap: 7px;
    padding-left: 20px;
    overflow: scroll;
    padding-right: 20px;
    padding-bottom: 20px;
  }
  .projects-top-content {
    display: flex;
    justify-content: space-between;
    position: relative;
    background-image: url(/images/my-svg/header-stars.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom left;
  }
  .cards-horizontal-new {
    display: flex;
    flex-direction: column;
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
    left: 101px;
    rotate: 90deg;
  }

  .project-title {
    font-size: 54px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .project-right-number {
    font-size: 18px;
    font-weight: bold;
    rotate: 267deg;
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
