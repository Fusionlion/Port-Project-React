import React from "react";
import styled from "styled-components";
import CourseCard from "../buttons/CourseCard";
import topicData from "../../data/data.json";
import { useState } from "react";
function CardList({ theCardClicked }) {
  // data is: print.title,print.num,print.desc
 const [activeCard, setActiveCard] = useState("");
 const handleCardClick = (cardClicked) => {
  //  console.log("the card from cardlist is " + cardClicked);
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
         <CourseCard
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

export default CardList;
