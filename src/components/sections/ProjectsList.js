import React from "react";
import styled from "styled-components";
import CourseCard from "../buttons/CourseCard";
import topicData from "../../data/data.json";
import { useState } from "react";
import ProjectsCard from "../buttons/ProjectsCard";
function ProjectsList({ theCardClicked }) {
  // data is: print.title,print.num,print.desc
  const [activeCard, setActiveCard] = useState("");
  const handleCardClick = (cardClicked) => {
    console.log("the name is " + cardClicked);
    theCardClicked(cardClicked);
    setActiveCard(cardClicked);
  };
  const data = topicData.map((record) => {
    return record;
  });
  return (
    <>
      {data.map((print) => {
        return (
          <ProjectsCard
            title={print.title}
            desc={print.desc}
            imageSrc={print.image}
            num={print.num}
            click={() => handleCardClick(print.num)}
          />
        );
      })}
    </>
  );
}

export default ProjectsList;
