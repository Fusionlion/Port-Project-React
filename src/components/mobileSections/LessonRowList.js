import React from "react";
import styled from "styled-components";
import topicData from "../../data/courses.json";
import { useState, useEffect } from "react";
import BlackButton from "../../components/buttons/BlackButton";
import CourseLessonRow from "./CourseLessonRow";
function LessonRowList(props) {
  // data is: print.title,print.num,print.desc
  const [activeCard, setActiveCard] = useState("");
  const [activeCardNum, setActiveCardNum] = useState(0);

  const data = topicData[props.subject ?? "Java"].map((record) => {
    return record;
  });
  const [visibleProjects, setVisibleProjects] = useState(5);
  const [clickedProjects, setClickedProjects] = useState([]);
  props.lessonCount(data.length);
  useEffect(() => {
    // Run the function when the relevant prop from the parent changes
    setClickedProjects((prevClickedProjects) => {
      const existingIndex = prevClickedProjects.findIndex(
        (clicked) => clicked.title === activeCard
      );

      if (existingIndex !== -1) {
        // If the card is already in the array, update its click count
        const updatedClickedProjects = [...prevClickedProjects];
        updatedClickedProjects[existingIndex] = {
          ...updatedClickedProjects[existingIndex],
          count: updatedClickedProjects[existingIndex].count + 1,
        };
        return updatedClickedProjects;
      } else {
        // If the card is not in the array, add it with a click count of 1
        return [
          ...prevClickedProjects,
          { num: activeCardNum, title: activeCard, count: 1 },
        ];
      }
    });
  }, [props.lineChanged, activeCard]); // Include the relevant props in the dependency arraydependency array
  const handleCardClick = (cardPrints) => {
    props.theCardClicked(cardPrints);
    setActiveCard(cardPrints.title);
    setActiveCardNum(cardPrints.num);
  };
  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <>
      {data.slice(0, visibleProjects).map(
        (print, index) =>
          // Check if print.lesson exists and is truthy before rendering the card
          print.lesson && (
            <CourseLessonRow
              key={print.num}
              title={print.title}
              desc={print.desc}
              imageSrc={print.image}
              size={print.lesson}
              updateProgress={
                clickedProjects.find((clicked) => clicked.title === print.title)
                  ?.count || 0
              }
              buttonOff="off"
              num={index}
              click={() => handleCardClick(print)}
              buttonLabel={
                clickedProjects.includes(print.num) ? "RE-READ" : "START"
              }
            />
          )
      )}
      {visibleProjects > 1 && visibleProjects < data.length && (
        <MoreButton onClick={showMoreProjects}>Show More</MoreButton>
      )}
    </>
  );
}

export default LessonRowList;
const MoreButton = styled.div`
  // Your styles here
  font-size: 18px;
  background-color: black;
  padding: 17px 20px;
  border-radius: 18px;
  color: #dbc9c9;
  transition: all 0.7s, color 0.7s;
  cursor: pointer;
  border: #ffffff1f solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Spline Sans Mono", sans-serif;
  margin: 0px 20px;
  margin-top: 17px;
  margin-bottom: 20px;
`;
