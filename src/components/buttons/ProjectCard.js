import React from "react";
import styled from "styled-components";


function ProjectCard(props) {
 
  return (
    <Card>
      <Blur src={props.imageSrc} />
      <ProjectImage src={props.imageSrc} />
      <div className="title">{props.title}</div>
      <div className="desc">{props.desc}</div>
      <div onClick={props.tap} className="start">Start</div>
    </Card>
  );
}

export default ProjectCard;


const Card = styled.div`
  background: rgba(15, 14, 71, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  color: white;
  width: 244px;
  height: 350px;
  border-radius: 13px;
  gap: 16px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &:hover {
    /* Define your hover effect styles here */
overflow: visible ;
  }

  .title {
    font-family: "Cisnero";
    font-size: x-large;
    color: orange;
    align-self: center;
  }
  .desc {
    font-size: small;
    padding-left: 10px;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
  }
  .start {
    align-self: center;
    color: white;
    background-color: #1c1a46;
    padding: 10px 50px;
    margin-bottom: 11px;
    border-radius: 7px;
    cursor: pointer;
  }
  .start :hover {
    background-color: #7431672b;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 150px;
  margin-top: -3px;
  background-image: url(${(props) => props.src}); /* Use props.src here */
  background-repeat: repeat;
  background-size:cover;
`;

const Blur = styled.div`
  background-image: url(${(props) => props.src}); /* Use props.src here */
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  background-size: cover;
  filter: blur(90px);
  mix-blend-mode: multiply;
`;
// % gatsby develop
