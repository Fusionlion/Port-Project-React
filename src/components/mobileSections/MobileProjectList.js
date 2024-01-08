import React from "react";
import styled from "styled-components";
import topicData from "../../data/projectDetailArticleData.json";
import { useState } from "react";
import BlackButton from "../../components/buttons/BlackButton";
import MobileProjectCard from "./MobileProjectCard";
function MobileProjectList(props) {
  // data is: print.title,print.num,print.desc
  const [activeCard, setActiveCard] = useState("");

  const data = topicData.map((record) => {
    return record;
  });
  const [visibleProjects, setVisibleProjects] = useState(5);
  const [clickedProjects, setClickedProjects] = useState([]);

  const handleCardClick = (cardPrints) => {
    //  console.log("you clicked in project list > " + titlefromchild);
    props.theCardClicked(cardPrints);
    // console.log("hahh " + articlefromchild + "from child articelll");
    // setActiveCard(titlefromchild);
    // Check if the project is already in the clickedProjects array
    // const isClicked = clickedProjects.includes(titlefromchild);

    // if (isClicked) {
    //   // Remove the project from clickedProjects if it was previously clicked
    //   //  setClickedProjects((prev) => prev.filter((project) => project !== num));
    // } else {
    //   // Add the project to clickedProjects if it was not previously clicked
    //   //  setClickedProjects((prev) => [...prev, num]);
    // }
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
            <MobileProjectCard
              key={print.num}
              title={print.title}
              desc={print.desc}
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

export default MobileProjectList;

const ProjectMoreButton = styled.div`
  background-color: black;
  padding: 10px 30px;
  border-radius: 26px;
  color: #dbc9c9;
  -webkit-transition: all 0.7s, color 0.7s;
  -webkit-transition: all 0.7s, color 0.7s;
  transition: all 0.7s, color 0.7s;
  cursor: pointer;
  border: #ffffff1f solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Spline Sans Mono", sans-serif;
  width: 100%;
  margin: 10px 86px;
  font-size: 18px;
  background: linear-gradient(to right, rgb(255 255 255), rgb(146 73 107));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-transform: uppercase;
  &:hover {
    color: orange;
    margin: 0px 40px;
  }
`;
