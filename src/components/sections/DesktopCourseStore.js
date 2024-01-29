import React, { useState, useEffect, useRef } from "react";
import { FaAtom, FaBookReader, FaRProject, FaDove } from "react-icons/fa";
import styled from "styled-components";

import topicData from "../../data/courses.json";

import ParallaxStars from "../mobileSections/MobileBackgrounds.js/ParallaxStars";
import CoursesComponent from "../mobileSections/CoursesComponent";
import BooksList from "../mobileSections/lists/BooksList";
import CategoryList from "../mobileSections/lists/CategoryList";
import MobileProjectDetailArticle from "../mobileSections/MobileProjectDetailArticle";
import CurrentProjectList from "../mobileSections/lists/CurrentProjectList";
import CourseDetail from "../mobileSections/CourseDetail";
import MobileCourseList from "../mobileSections/MobileCourseList";
import FooterSection from "./FooterSection";
import CoursesChart from "./CoursesChart";

function DesktopCourseStore() {
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
    <Wrapper>
      {!showArticle && !showIde && (
        <BodyContain>
          <div className="overview-and-cards">
            <div className="projects-top-content">
              <div className="project-top-left">
                <div className="project-title">Evaluate Your Skills</div>
                <div className="project-title">Comprehensive courses</div>
                <li className="project-title">
                  Unlock the door to expertise with TechMastery Courses. Delve
                  into the intricacies of data structures, master the art of
                  Java programming, and empower your Salesforce development
                  journey.
                </li>
              </div>
            </div>

            <div className="cards-title">
              Trending
              <FaAtom />
            </div>
            <div className="cards-vertical-list">
              <CategoryList theCardClicked={handleTabClick} />
            </div>

            <div className="cards-title">
              {" "}
              Books & Research <FaBookReader />
            </div>
            <div className="cards-horizontal-list">
              <BooksList theCardClicked={handleTabClick} />
            </div>

            <div className="cards-title">
              {" "}
              Current Projects <FaRProject />
            </div>
            <div className="cards-vertical-list">
              <CurrentProjectList theCardClicked={handleTabClick} />
            </div>

            <div className={ideRef}></div>
          </div>

          <div className="cards-title">
            Courses <FaDove />
          </div>
          {!showIde && (
            <ProjectCards>
              <div className="cards-horizontal-projects">
                {Object.keys(topicData).map((subject, index) => (
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
      )}
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
      {/* <ParallaxStars /> */}
    </Wrapper>
  );
}

export default DesktopCourseStore;
const Wrapper = styled.div`
  // Your styles here
  position: relative;
  overflow: scroll;
  /* backdrop-filter: blur(18px); */
  background: repeating-linear-gradient(45deg, black, transparent 100px);
`;
const PaddingH = styled.div`
  // Your styles here
  padding: 0px 20px;
`;

const ProjectCards = styled.div`
  padding: 20px;
  background-image: url(/images/my-svg/bubbles.svg);
  background-size: cover;
  background-repeat: repeat;
  background-position-y: center;

  @media screen and (min-width: 999px) {
    padding: 0px 20px 60px 20px;
    border-bottom: 1px #ffffff2b solid;
  }
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

    @media screen and (min-width: 999px) {
      flex-direction: row;
      overflow: scroll;
      flex-wrap: wrap;
    }
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
  /* background: linear-gradient(to top, #000000, #000, #0006); */
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
    display: flex;
    justify-content: space-between;
  }
  .course-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
    color: white;
    text-align: start;
  }
  .cards-horizontal-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 20px;

    padding-right: 20px;
    padding-bottom: 30px;
    @media screen and (min-width: 999px) {
      flex-direction: column;
    }
  }
  .cards-vertical-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 20px;

    padding-right: 20px;
    padding-bottom: 30px;
    @media screen and (min-width: 999px) {
      flex-direction: row;
    }
  }
  .projects-top-content {
    display: flex;
    justify-content: space-between;
    position: relative;
    background-image: url(/images/my-svg/header-stars.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom left;
    border-radius: 12px;
    overflow: hidden;
    margin-top: 50px;
  }
  .projects-svg {
    background-color: wheat;
    height: 300px;
    width: 100%;
    background-image: url(https://cdn.dribbble.com/users/440670/screenshots/18041731/media/66e1f56….jpg?resize=1600x1200&vertical=center);
    flex: 1;
    position: relative;
    left: -8px;
    /* bottom: 0; */
    padding: 20px;
    top: 79px;
    background-size: contain;
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
    flex: 1;

    > :nth-child(1) {
      font-family: "cisnero";
      font-size: 52px;
      background: linear-gradient(to right, rgb(255 239 239), rgb(252 0 202));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 5px 9px 11px #000000, 1px -1px 0px #151417;
      @media screen and (min-width: 999px) {
        font-size: 92px;
        width: 600px;
      }
    }
    > :nth-child(2) {
      font-size: 15px;
      line-height: 1.2;
      font-weight: normal;
      color: gray;
      padding-bottom: 10px;
      padding-top: 5px;
      @media screen and (min-width: 999px) {
        font-size: 15px;
      }
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
      backdrop-filter: blur(42px);
      border: 1px solid #28272745;
      border-radius: 11px;
      padding: 11px;
      background: #0a0a0a;
      @media screen and (min-width: 999px) {
        font-size: 16px;
      }
    }
  }

  .bottom-container {
    display: flex;
    padding: 20px 0px;
    overflow: scroll;
    gap: 15px;
    border-radius: 20px;
  }
`;
