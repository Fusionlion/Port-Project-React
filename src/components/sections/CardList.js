import React from "react";
import styled from "styled-components";
import CourseCard from "../buttons/CourseCard";
function CardList({ data }) {
    // data is: print.title,print.num,print.desc
  return (
    <>
      {data.map((print) => {
          return (
              <CourseCard title={print.title} desc={print.desc} imageSrc={print.image} num={print.num} />
      
        );
      })}
    </>
  );
}

export default CardList;
