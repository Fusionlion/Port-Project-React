import React from "react";
import styled from "styled-components";

function ProjectCardx(props) {
  return (
    <ProjectCardStyle src={props.imageSrc}>
      <div className="title">{props.title}</div>
      <div className="icon-and-desc">
        <div className="desc">{props.desc}</div>
      </div>
    </ProjectCardStyle>
  );
}
export default ProjectCardx;

const ProjectCardStyle = styled.div`
  background-color: black;
  min-width: 166px;
  height: 237px;
  border-radius: 12px;
  background-image: url("/images/my-svg/falling-rocks.svg");
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  gap: 5px;
  display: flex;
  flex-direction: column;
  text-align: end;
  cursor: pointer;
  transition: linear 0.2s;
  &:hover {
    transition: linear 0.2s;
    transform: scale(1.02);
  }
  .title {
    font-size: 18px;
    font-family: "Times New Roman", serif;
    margin-top: 255px;
    color: white;
    text-transform: uppercase;
  }
  .desc {
    font-size: 10px;
    color: white;
    padding-left: 10px;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 16;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "Spline Sans Mono", sans-serif;
  }
  .icon-and-desc {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: end;
  }
  .project-star-icon {
    height: 24px;
    width: 24px;

    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/2140px-Golden_star.svg.png);
    background-size: cover;
    background-position: center center;
  }
`;
