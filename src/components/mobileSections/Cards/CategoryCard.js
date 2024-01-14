import React, { useState } from "react";
import styled from "styled-components";
import {
  FaHtml5,
  FaSalesforce,
  FaJava,
  FaPlaneDeparture,
  FaPhp,
  FaPython,
  FaCss3,
} from "react-icons/fa";
// Example icon (replace with your own)
const ExampleIcon = styled.span`
  font-size: 24px;
  margin-right: 8px;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;

  border-radius: 9px;
  background: ${(props) => props.gradient};
  transition: box-shadow 0.3s ease;
  padding: 10px 16px;
  > :nth-child(2) {
    width: max-content;
  }
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Cards = styled.div`
  // Your styles here
  display: flex;
  gap: 7px;
  padding-left: 20px;
  overflow: scroll;
  padding-right: 20px;
  padding-bottom: 20px;
`;

const CategoryCard = (props) => {
  // WEHEN START IS CLICKED ON THE CARD
  const handleStartClick = () => {
    // SEND A MESSAGE UP THAT CARD START WAS CLICKED
    props.click();
  };
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 5)]; // Adjusted to generate very dark colors
    }
    return color;
  };
  const getRandomGradient = () => {
    const colors = [getRandomColor(), getRandomColor()];

    return `linear-gradient(to right, ${colors.join(", ")})`;
  };

  return (
    <>
      <CardContainer onClick={handleStartClick} gradient={getRandomGradient}>
        <ExampleIcon>
          <FaJava />
        </ExampleIcon>
        <div>{props.title}</div>
      </CardContainer>
    </>
  );
};

export default CategoryCard;
