import React from "react";
import styled from "styled-components";
import topicData from "../../../data/courseStore/CurrentProjects.json";
import CurrentProject from "../Cards/CurrentProject";
import { useState } from "react";

import MobileProjectCard from "../MobileProjectCard";
function CurrentProjectList(props) {
  // data is: print.title,print.num,print.desc
  const [activeCard, setActiveCard] = useState("");

  const data = topicData.map((record) => {
    return record;
  });
  const [visibleProjects, setVisibleProjects] = useState(2);
  const [clickedProjects, setClickedProjects] = useState([]);

  const handleCardClick = (cardPrints) => {
    props.theCardClicked(cardPrints);
  };

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 5);
  };

  return (
    <>
      {data.slice(0, visibleProjects).map(
        (print, index) =>
          // Check if print.article exists and is truthy before rendering the card
          print.article && (
            <CurrentProject
              key={print.num}
              title={print.title}
              desc={print.desc}
              stack={print.stack}
              date={print.date}
              subtitle={print.subtitle}
              imageSrc={print.image}
              num={index}
              article={print.article}
              click={() => handleCardClick(print)}
              buttonLabel={
                clickedProjects.includes(print.num) ? "RE-READ" : "START"
              }
            />
          )
      )}
      {visibleProjects < data.length && (
        <ProjectMoreButton onClick={showMoreProjects}>
          Show More
        </ProjectMoreButton>
      )}
    </>
  );
}

export default CurrentProjectList;

const ProjectMoreButton = styled.div`
  background-color: black;
  padding: 10px 30px;
  border-radius: 26px;
  color: #dbc9c9;
  -webkit-transition: all 0.7s, color 0.7s;
  -webkit-transition: all 0.7s, color 0.7s;
  transition: all 0.7s, color 0.7s;

  border: #ffffff1f solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Spline Sans Mono", sans-serif;

  margin: 10px 86px;
  font-size: 18px;
  background: linear-gradient(to right, rgb(255 255 255), rgb(146 73 107));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-transform: uppercase;
  transition: all linear 0.2s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-5px);
  }
  @media screen and (min-width: 999px) {
    margin: 0;
  }
`;
