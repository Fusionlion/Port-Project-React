import React from "react";
import styled from "styled-components";

function BookCard(props) {
  return (
    <Card>
      <ProjectCardStyle onClick={props.tapped} src={props.imageSrc}>
        <div className="number"> 1 </div>
      </ProjectCardStyle>
      <div className="icon-and-title">
        <div className="title">{props.title}</div>
      </div>

      <div className="icon-and-desc">
        <div className="project-star-icon"></div>
        <div className="desc">{props.desc}</div>
      </div>
    </Card>
  );
}
export default BookCard;
const Card = styled.div`
  width: 194px;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 10px;

  .icon-and-title {
    display: flex;
    gap: 5px;
    justify-content: start;
    align-items: center;
  }
  .project-star-icon {
    height: 24px;
    width: 24px;

    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/2140px-Golden_star.svg.png);
    background-size: cover;
    background-position: center center;
    filter: grayscale(1);
  }
  .title {
    font-size: 18px;
    font-family: "Pixel12x10", sans-serif;
    background: linear-gradient(to right, rgb(255 255 255), rgb(146 73 107));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-transform: uppercase;
    margin-top: 10px;
  }
  .desc {
    font-size: 10px;
    color: #a99b9b;
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
    gap: 1px;
    align-items: center;
    justify-content: end;
  }
`;
const ProjectCardStyle = styled.div`
  background-color: black;
  width: 194px;
  height: 291px;
  border-radius: 10px;
  background-image: url("/images/my-svg/falling-rocks.svg");
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  cursor: pointer;
  transition: linear 0.2s;

  position: relative;

  &:hover {
    transition: linear 0.2s;
    transform: scale(1.02);
  }
  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 34px;
    height: 34px;
    position: absolute;
    font-size: 24px;
    backdrop-filter: blur(10px);
    /* backdrop-filter: contrast(0.9); */
    background-color: black;
    color: white;
    border-radius: 60px;
    font-family: "Spline Sans Mono", sans-serif;
    left: 0;
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
