import React, { useState } from "react";
import styled from "styled-components";
import topicData from "../../data/data.json";
import Ide from "./Ide";
import ProjectsCard from "../buttons/ProjectsCard";
import BlackButton from "../buttons/BlackButton";

function AboutMeIde() {
  const [topic, setTopic] = useState([topicData]);
  const data = topicData.map((record) => {
    return record;
  });

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
              OVERVIEW
            </div>
            <div className="topic-title" id="topic-big-title">
              Software Developer
            </div>
            <div className="topic-desc" id="topic-desc">
              In computer programming terms, an algorithm is a set of
              well-defined instructions written to solve a particular problem.
              It takes a set of input(s) and produces the desired output.
            </div>
            <BlackButton label="GET STARTED" />
          </div>
          <Ide />
        </div>

        {/* We put the course here/ below */}
        <div className="cards-title">My Projects</div>
        <div className="bottom-container" id="bottom-container">
          {/* <CardList data={data} /> */}
          <ProjectsCard
            title="{print.title}"
            desc="{print.desc}"
            imageSrc="https://cdn.dribbble.com/userupload/11325790/file/original-8157e394170422bbb0927202cc45f001.png?resize=2048x1537"
            num="{print.num}"
          />
          <ProjectsCard
            title="{print.title}"
            desc="{print.desc}"
            imageSrc="https://cdn.dribbble.com/userupload/11325790/file/original-8157e394170422bbb0927202cc45f001.png?resize=2048x1537"
            num="{print.num}"
          />
          <ProjectsCard
            title="{print.title}"
            desc="{print.desc}"
            imageSrc="https://cdn.dribbble.com/userupload/11325790/file/original-8157e394170422bbb0927202cc45f001.png?resize=2048x1537"
            num="{print.num}"
          />
          <ProjectsCard
            title="{print.title}"
            desc="{print.desc}"
            imageSrc="https://cdn.dribbble.com/userupload/11325790/file/original-8157e394170422bbb0927202cc45f001.png?resize=2048x1537"
            num="{print.num}"
          />
          <ProjectsCard
            title="{print.title}"
            desc="{print.desc}"
            imageSrc="https://cdn.dribbble.com/userupload/11325790/file/original-8157e394170422bbb0927202cc45f001.png?resize=2048x1537"
            num="{print.num}"
          />
          <ProjectsCard
            title="{print.title}"
            desc="{print.desc}"
            imageSrc="https://cdn.dribbble.com/userupload/11325790/file/original-8157e394170422bbb0927202cc45f001.png?resize=2048x1537"
            num="{print.num}"
          />
          <ProjectsCard
            title="{print.title}"
            desc="{print.desc}"
            imageSrc="https://cdn.dribbble.com/userupload/11325790/file/original-8157e394170422bbb0927202cc45f001.png?resize=2048x1537"
            num="{print.num}"
          />
          <ProjectsCard
            title="{print.title}"
            desc="{print.desc}"
            imageSrc="https://cdn.dribbble.com/userupload/11325790/file/original-8157e394170422bbb0927202cc45f001.png?resize=2048x1537"
            num="{print.num}"
          />
          <ProjectsCard
            title="{print.title}"
            desc="{print.desc}"
            imageSrc="https://cdn.dribbble.com/userupload/11325790/file/original-8157e394170422bbb0927202cc45f001.png?resize=2048x1537"
            num="{print.num}"
          />
          <ProjectsCard
            title="{print.title}"
            desc="{print.desc}"
            imageSrc="https://cdn.dribbble.com/userupload/11325790/file/original-8157e394170422bbb0927202cc45f001.png?resize=2048x1537"
            num="{print.num}"
          />
          <ProjectsCard
            title="{print.title}"
            desc="{print.desc}"
            imageSrc="https://cdn.dribbble.com/userupload/11325790/file/original-8157e394170422bbb0927202cc45f001.png?resize=2048x1537"
            num="{print.num}"
          />
          <ProjectsCard
            title="{print.title}"
            desc="{print.desc}"
            imageSrc="https://cdn.dribbble.com/userupload/11325790/file/original-8157e394170422bbb0927202cc45f001.png?resize=2048x1537"
            num="{print.num}"
          />
        </div>
      </div>
    </BodyContain>
  );
}

export default AboutMeIde;

const BodyContain = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  font-family: "Spline Sans Mono", sans-serif;
  margin-bottom: 167px;
  background-image: url("/images/my-svg/falling-stars.svg");
  background-repeat: repeat;
  background-position: top right;
  background-size: contain;

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
    align-items: center;
    gap: 20px;
  }

  .topic-title-desc {
    font-size: 26px;
    color: white;
  }
  .topic-title {
    font-family: "Pixel12x10", sans-serif;

    font-size: 30px;
    color: white;
  }
  .topic-desc {
    color: white;
    width: 100%;
    overflow: scroll;
    font-weight: normal;
    font-size: 17px;
    line-height: 130%;
    text-align: center;
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    padding: 19px 2px 19px 2px;
    gap: 70px;
    border-radius: 20px;
    justify-items: center;
  }
  .cards-title {
    color: white;
    font-size: 24px;
    font-family: "Spline Sans Mono", sans-serif;
  }
  .topic-and-lesson {
    display: flex;
    justify-content: space-between;
    gap: 65px;
    flex-direction: row-reverse;
    padding-top: 63px;
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
