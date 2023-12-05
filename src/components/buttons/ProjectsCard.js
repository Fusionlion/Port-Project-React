import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

function ProjectsCard(props) {
  return (
    <Card>
      <ProjectCardStyle onClick={props.tapped} src={props.imageSrc}>
        <div className="number">{props.num}</div>
      </ProjectCardStyle>
      <div className="linear"></div>
      <Content>
        <div className="title">{props.title}</div>

        <div className="desc">{props.desc}</div>

        <div className="start-btn">START</div>
        <ProgressBar />
        <div className="start-and-end">
          <div className="start">[zero]</div>
          <div className="start">|done|</div>
        </div>
      </Content>
    </Card>
  );
}
export default ProjectsCard;
const Content = styled.div`
  padding: 0px 10px;
  z-index: 3;

  .start-btn {
    border-radius: 20px;
    border: #343434 1px solid;
    /* width: 200px; */
    /* height: 50px; */
    color: white;
    text-align: center;
    margin: 13px 25px;
    padding: 10px 0px;
    cursor: pointer;
    transition: linear 0.2s;
  }
  .start-btn:hover {
    background-color: black;
    transition: linear 0.2s;
    transform: scale(1.02);
  }
  .start-and-end {
    display: flex;
    justify-content: space-between;
  }
  .start {
    color: white;
    padding: 10px;
    transition: linear 0.2s;
  }
`;
const Card = styled.div`
  /* width: 250px; */
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 10px;
  position: relative;
  border-radius: 17px;

  .linear {
    position: absolute;
    height: 100%;
    width: 100%;
    /* z-index: 2; */
    backdrop-filter: blur(13px);
    /* background-image: linear-gradient(#ff000000, #000000, #242420); */
    border-radius: 17px;
    border: 1px solid #0d0c0c;
  }
  .icon-and-title {
    display: flex;
    gap: 10px;
    justify-content: end;
    align-items: center;
  }

  .title {
    font-size: 18px;
    background: linear-gradient(to right, rgb(255 255 255), rgb(146 73 107));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-transform: uppercase;
    margin-top: 10px;
  }
  .desc {
    font-size: 10px;
    color: white;
    padding-top: 5px;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 16;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon-and-desc {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: end;
  }
`;
const ProjectCardStyle = styled.div`
  background-color: black;
  width: 269px;
  height: 303px;
  border-radius: 17px;
  background-image: url("/images/my-svg/falling-rocks.svg");
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  cursor: pointer;
  transition: linear 0.2s;

  position: relative;

  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 30px;
    height: 30px;
    position: absolute;
    font-size: 24px;
    backdrop-filter: blur(10px);
    backdrop-filter: contrast(0.9);
    color: black;
    border-radius: 60px;

    right: 0;
    margin: 10px;
  }
  .project-star-icon {
    height: 24px;
    width: 24px;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/2140px-Golden_star.svg.png);
    background-size: cover;
    background-position: center center;
    filter: grayscale(1);
  }
`;
