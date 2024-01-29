import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

function ProjectBioCard(props) {
  return (
    <Card>
      <ProjectCardStyle onClick={props.tapped} src={props.imageSrc}>
        <div className="number">{props.num}</div>
      </ProjectCardStyle>
      <div className="linear"></div>
      <Content>
        <div className="project-bio-card-title">{props.title}</div>

        <div className="desc">{props.desc}</div>

        {!props.hideStartButton && (
          <div className="start-btn" onClick={props.tapped}>
            START
          </div>
        )}
        <ProgressBar />
        <div className="start-and-end">
          <div className="start">[Swift]</div>
          <div className="start">|SwiftUI|</div>
        </div>
      </Content>
    </Card>
  );
}
export default ProjectBioCard;
const Content = styled.div`
  padding: 0px 20px;
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
    font-family: "Spline Sans Mono", sans-serif;
  }
  .start-btn:hover {
    background-color: black;
    transition: linear 0.2s;
    transform: scale(1.02);
  }
  .start-and-end {
    display: flex;
    justify-content: space-between;
    font-family: "Spline Sans Mono", sans-serif;
    padding: 0px 0px 13px 0px;
  }
  .start {
    color: white;
    padding: 10px 0px;
    transition: linear 0.2s;
    font-family: "Spline Sans Mono", sans-serif;
  }
`;
const Card = styled.div`
  width: 100%;
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
    z-index: 2;
    background-image: linear-gradient(#ff000000, #000000, #0d0d0d);
    border-radius: 17px;
  }
  .icon-and-title {
    display: flex;
    gap: 10px;
    justify-content: end;
    align-items: center;
  }

  .project-bio-card-title {
    font-size: 18px;
    background: linear-gradient(to right, rgb(91 161 207), rgb(255 255 255));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-transform: uppercase;
    margin-top: 10px;
    font-family: "Pixel12x10", sans-serif;
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
    font-family: "Spline Sans Mono", sans-serif;
    line-height: 1.5;
    @media screen and (min-width: 999px) {
      font-size: 16px;
    }
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
  width: 100%;
  height: 360px;
  border-radius: 12px;
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
