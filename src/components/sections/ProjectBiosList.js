import React from "react";
import styled from "styled-components";
import CourseCard from "../buttons/CourseCard";
import topicData from "../../data/projectDetailArticleData.json";
import { useState } from "react";
import ProjectsCard from "../buttons/ProjectsCard";
import BlackButton from "../buttons/BlackButton";
function ProjectBiosList({ theCardClicked }) {
  // data is: print.title,print.num,print.desc
  const [activeCard, setActiveCard] = useState("");

  const data = topicData.map((record) => {
    return record;
  });
  const [visibleProjects, setVisibleProjects] = useState(5);
  const [clickedProjects, setClickedProjects] = useState([]);

  const handleCardClick = (titlefromchild, article) => {
    //  console.log("you clicked in project list > " + titlefromchild);
    theCardClicked(titlefromchild, article);
    setActiveCard(titlefromchild);
    // Check if the project is already in the clickedProjects array
    const isClicked = clickedProjects.includes(titlefromchild);

    if (isClicked) {
      // Remove the project from clickedProjects if it was previously clicked
      //  setClickedProjects((prev) => prev.filter((project) => project !== num));
    } else {
      // Add the project to clickedProjects if it was not previously clicked
      //  setClickedProjects((prev) => [...prev, num]);
    }
  };

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 5);
  };

  return (
    <>
      {data.slice(0, visibleProjects).map((print, index) => (
        <ProjectsCard
          key={print.num}
          title={print.title}
          desc={print.desc}
          imageSrc={print.image}
          num={index}
          click={handleCardClick}
          article={print.article}
          buttonLabel={
            clickedProjects.includes(print.num) ? "RE-READ" : "START"
          }
        />
      ))}
      {visibleProjects < data.length && (
        <BlackButton label="Show More" onClick={showMoreProjects} />
      )}
    </>
  );
}

export default ProjectBiosList;
