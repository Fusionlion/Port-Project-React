import React, { useState, useRef } from "react";
import styled from "styled-components";
import CardList from "./CardList";
import topicData from "../../data/data.json";
import Ide from "./Ide";
import FooterSection from "./FooterSection";
import CourseRawIde from "./CourseRawIde";
import IdeQuiz from "./IdeQuiz";
function CourseIde({ setActiveCardParent }) {
  const [topic, setTopic] = useState([topicData]);
  const [topicClicked, setTopicClicked] = useState(0);
  const [titleClicked, setTitleClicked] = useState(false);
  const data = topicData.map((record) => {
    return record;
  });
  let cardClickedRaw;
  const handleCardClickChild = (card, num) => {
    // console.log(data[topicClicked].lesson);
    // the title of the card
    cardClickedRaw = card;
    console.log(topicClicked + " topic clicked");
    setTopicClicked(num);
    setTitleClicked(card);
    console.log("card click up top was " + cardClickedRaw + "num was " + num);
    // setTopicClicked(card);
    setActiveCardParent(card);

    // Adjust the value (e.g., 100) based on how much you want to scroll down
  };

  return (
    <BodyContain>
      <div className="left">
        <div className="left-header">
          <div className="circle"></div>
          <div className="unselected-circle"></div>
          <div className="unselected-circle"></div>
          <div className="unselected-circle"></div>
        </div>
        <div className="time">00/05</div>
      </div>
      <div className="overview-and-cards">
        <div className="topic-and-lesson">
          <div className="topic-container">
            <div className="topic-title-desc" id="topic-title">
             {"START WITH THE FUNDEMENTALS"} 
            </div>
            <div className="topic-title" id="topic-big-title">
              OVERVIEW
            </div>
            <div className="topic-desc" id="topic-desc">
              In computer programming terms, an algorithm is a set of
              well-defined instructions written to solve a particular problem.
              It takes a set of input(s) and produces the desired output.
            </div>
            <div className="topic-button" id="next-button">
              {topicClicked > 0 ? "IN-PROGRESS" : "GET STARTED"}
            </div>
          </div>

          <Ide
            // text={data[topicClicked].lesson}
            text={data[topicClicked].lesson}
            parentCardClicked={topicClicked}
            title={data[topicClicked].title}
            quiz={data[topicClicked].quiz}
            // switchIde={handleSwitching}
          />
        </div>

        {/* We put the course here/ below */}
        <div className="cards-title">Data Structures & Algorithms</div>
        <div className="bottom-container" id="bottom-container">
          <CardList data={data} theCardClicked={handleCardClickChild} />
        </div>

        {/* We put the course here/ below */}
        <div className="cards-title">React JS</div>
        <div className="bottom-container" id="bottom-container">
          <CardList data={data} theCardClicked={handleCardClickChild} />
        </div>
        {/* We put the course here/ below */}
        <div className="cards-title">Java Full Stack</div>
        <div className="bottom-container" id="bottom-container">
          <CardList data={data} theCardClicked={handleCardClickChild} />
        </div>

        {/* We put the course here/ below */}
        <div className="cards-title">Salesforce Developer</div>
        <div className="bottom-container" id="bottom-container">
          <CardList data={data} theCardClicked={handleCardClickChild} />
        </div>

        {/* end */}
        <FooterSection />
      </div>
    </BodyContain>
  );
}

export default CourseIde;

const BodyContain = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  font-family: "Spline Sans Mono", sans-serif;
  margin-bottom: 167px;
  background: linear-gradient(to top, #000000, #000, #1606cd00);
  /* background-image: url(/images/my-svg/sea-animals.svg);
  background-size: contain;
  background-repeat: repeat;
  background-position: bottom; */
  /* The line at the most left side */
  .left {
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 40px;
    height: 80%;
    color: white;
    gap: 5px;
    opacity: 0.3;
  }
  .button {
    background-color: #f7f6f6;
    padding: 10px 20px;
    border-radius: 19px;
  }
  .overview-and-cards {
    display: flex;
    flex-direction: column;
    padding-right: 10px;
    justify-content: center;
    gap: 50px;
    width: 100%;
    padding-left: 40px;
  }

  .topic-container {
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
  }

  .topic-title-desc {
    font-size: 26px;
    color: white;
  }
  .topic-title {
    font-family: "ACCELERARE", sans-serif;

    font-size: 70px;
    color: white;
  }
  .topic-desc {
    font-size: 20px;
    color: white;
    width: 100%;
    line-height: 1.3;
    overflow: scroll;
  }
  .topic-button {
    font-size: 22px;
    background-color: blue;
    padding: 10px 30px;
    border-radius: 10px;
    color: white;
    transition: all 0.7s, color 0.7s;
    cursor: pointer;
  }
  .topic-button:hover {
    background-color: rgb(41, 41, 106);
  }

  .thai {
    display: flex;
    font-size: 52px;
    color: rgba(255, 255, 255, 0.041);
  }
  .join-button:hover {
    cursor: pointer;
    border-radius: 50px;
    background-color: rgb(59, 80, 200);
    color: black;
    padding: 10px 23px;
  }
  .topic-footer {
    flex: 0.1;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;
  }

  .time {
    writing-mode: vertical-lr;
    text-orientation: sideways-left;
    margin-right: 10px;
  }
  .left-header {
    flex: 1;
    background-color: #cdcacab5;
    width: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: #000000 1px solid;
    margin-right: 20px;
  }
  .circle {
    width: 15px;
    height: 30px;
    background-color: inherit;
    border-radius: 30px;
  }
  .unselected-circle {
    width: 10px;
    height: 10px;
    background-color: inherit;
    border-radius: 30px;
  }

  .bottom-container {
    display: flex;
    padding: 20px 0px;
    overflow: scroll;
    gap: 15px;
    border-radius: 20px;
  }
  .cards-title {
    color: white;
    font-size: 24px;
    font-family: "Spline Sans Mono", sans-serif;
  }
  .topic-and-lesson {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding-right: 80px;

    /* background-image: url(/images/my-svg/first.svg); */
    background-attachment: fixed;
    background-size: contain;
    background-repeat: repeat-x;
  }
  .ide {
    background-color: #1b1b1b;
    color: white;
    border-radius: 17px;
    display: flex;
    flex: 1;
    height: 350px;
    width: 100%;
    padding: 20px;
    margin: 40px 10px;
    font-size: 20px;
    font-family: monospace;
  }
  .lesson {
    flex: 1;

    padding: 5px 2px;
    border-radius: 10px;
    overflow: scroll;
  }
  .typing {
    background-color: #121212;
    border-radius: 11px;
    padding: 9px 16px;
    animation: all 2s;
  }
  .old {
    padding: 9px 16px;
    color: #948f8f;
  }

  .topic-card {
    display: flex;
    flex-direction: column;
    min-width: 180px;
    flex-basis: 190px;
    height: 260px;
    background: #ffffff;
    padding: 10px;
    gap: 1%;
    border-radius: 13px;
  }
  .topic-card-selected {
    display: flex;
    flex-direction: column;
    min-width: 170px;
    height: 260px;
    padding: 10px;
    gap: 1%;
    border-radius: 13px;
  }
  .topic-picture {
    background-color: rgb(107, 68, 68);
    height: 70px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-image: url("https://images.hdqwalls.com/wallpapers/one-moment-4j.jpg");
    background-size: cover;
    border-radius: 8px;
    overflow: hidden;
  }
  .topic-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
  .topic-card-title-desc {
    font-size: medium;
    color: #f8f4f4;
  }
  .topic-card-title {
    text-transform: uppercase;
    font-size: auto;
    color: #fefdfd;
    width: fit-content;
  }
  .topic-card-ln {
    color: #ebb462;
  }
  .topic-card-desc {
    font-size: small;
    height: 90px;
    overflow: hidden;
    font-family: "Schibsted Grotesk", sans-serif;
  }
  .topic-card-button {
    display: flex;

    justify-content: center;
    align-items: center;
    background: linear-gradient(145deg, #cfcfcf, #f6f6f6);
    box-shadow: 10px 10px 20px #c4c4c4, -10px -10px 20px #ffffff;
    padding: 10px 20px;
    border-radius: 10px;
    color: #000;
    transition: color 0.7s;
    cursor: pointer;
  }

  .card-button,
  .card-button-selected {
    background-color: blue;
    display: flex;
    justify-content: center;
    padding: 10px 30px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
  }
  .card-button-selected {
    background-color: rgb(25, 25, 29);
  }
  .card-button:hover,
  .card-button-selected:hover {
    background-color: rgb(175, 110, 31);
  }

  @media (max-width: 50rem) {
    .features {
      display: none;
    }
    .left {
      display: none;
    }
    .body-contain {
      overflow: scroll;
    }

    .body-contain {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .topic-container {
      justify-content: center;
      align-items: center;
      margin-top: 10%;
      text-align: center;
    }
    .ide {
      width: fit-content;
      height: fit-content;
    }

    .bottom-container {
      display: flex;
      overflow: visible;
      flex-wrap: wrap;
    }
    .topic-card {
      flex: 30%;
      box-shadow: none;
    }
    .topic-and-lesson {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
  }
`;
