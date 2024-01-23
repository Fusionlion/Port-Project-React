import React from "react";
import styled from "styled-components";
import topicData from "../../../data/courseStore/BooksData.json";
import { useState } from "react";
import BookCard from "../Cards/BookCard";
function BooksList(props) {
  // data is: print.title,print.num,print.desc
  const data = topicData.map((record) => {
    return record;
  });
  const [visibleProjects, setVisibleProjects] = useState(2);

  const handleCardClick = (cardPrints) => {
    props.theCardClicked(cardPrints);
  };
  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 5);
  };

  function getRandomImageFromArray() {
    const imageArray = [
      "https://cdn.dribbble.com/userupload/7917165/file/original-2ee851cb5a4743e4d0a1771d3f8f98ef.png?resize=1504x1128",
      "https://cdn.dribbble.com/userupload/11646234/file/original-b3acc991281af850055263cbbad2d651.png?resize=2048x1021&vertical=center",
      "https://cdn.dribbble.com/userupload/3271720/file/original-176c25fd991eb0e6ea23875d304d56d1.jpg?resize=2400x1800",
      // Add more image URLs as needed
    ];

    // Generate a random index to pick a random image from the availableImages array
    const randomIndex = Math.floor(Math.random() * imageArray.length);

    // Get the random image URL from the availableImages array
    const randomImageUrl = imageArray[randomIndex];

    return randomImageUrl;
  }

  return (
    <>
      {data.slice(0, visibleProjects).map(
        (print, index) =>
          // Check if print.article exists and is truthy before rendering the card
          print.article && (
            <BookCard
              cardFont={index % 2 === 0 ? "Grivas Personal Use" : "Nasi Podeng"}
              key={print.num + index}
              title={print.title}
              desc={print.desc}
              imageSrc={print.image}
              num={index}
              buttonOff="off"
              article={print.article}
              click={() => handleCardClick(print)}
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

export default BooksList;

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
