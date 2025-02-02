import React from "react";
import styled from "styled-components";
// import ProgressBar from "./ProgressBar";
import { useState } from "react";
import ProgressBar from "../buttons/ProgressBar";
function DribbleCard(props) {
  const [progressValue, setProgressValue] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [titleClicked, setTitleClicked] = useState("");

  // give dummy data if no data found
  // SHOW the number of sentences

  let lessonLength;

  if (props.size) {
    lessonLength = props.size.split(".").length;
  } else {
    // Handle the case when props.size is undefined
    lessonLength = 0; // or any default value you prefer
  }

  const handleProgressChange = (newProgress) => {
    setProgress(newProgress);
    // Do something with the new progress value in the parent component
    // console.log("Progress changed:", newProgress);
  };
  return (
    <Card
      src={props.imageSrc}
      onClick={
        props.link
          ? () => window.open(props.link, "_blank")
          : () => window.open("https://dribbble.com/cranoz", "_blank")
      }
    >
      <ProjectCardStyle onClick={props.tapped} src={props.imageSrc}>
        <div className="number">{props.num}</div>
      </ProjectCardStyle>
      <div className="linear"></div>
      <Content>
        <div className="title">{props.title}</div>

        <div className="desc">{props.desc}</div>

        <ProgressBar
          progressValue={props.updateProgress}
          onProgressChange={handleProgressChange}
          size={lessonLength}
        />
      </Content>
    </Card>
  );
}
export default DribbleCard;
const Content = styled.div`
  padding: 10px 10px;
  z-index: 3;
  position: absolute;
  bottom: 0;
  text-align: start;
  @media screen and (max-width: 1000px) {
    background: black;
    width: 100%;
  }

  .start-btn:hover {
    background-color: black;
    transition: linear 0.2s;
    transform: scale(1.02);
  }
  .start-and-end {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }
  .start {
    color: white;
    padding: 10px;
    transition: linear 0.2s;
  }
`;
const Card = styled.div`
  /* width: 250px; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 10px;
  position: relative;
 border-radius: 17px;
  flex: 1;
  /* min-width: 172px; */

  overflow: hidden;
  border: 1px solid #7d7d7d30;


  @media screen and (min-width: 999px) {
    min-height:none ;
  
     background: #141414;
        flex:1;
    & {
      transition: all 0.2s linear;
    }

    :hover {
      z-index: 0;
      cursor: pointer;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 30px 50px rgba(23, 0, 102, 0.5),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
      transform: scale(0.98);
    }
  }
  /* on iphone */
@media screen and (max-width:1000px){
       min-width: 100%;
       min-height:280px ;
} 
 
  .linear {
    /* position: absolute;
    height: 100%;
    width: 100%;
    /* z-index: 2; */
    /* backdrop-filter: blur(13px);
    background-image: linear-gradient(#ff000000, #000000, #242420);
    border-radius: 17px;
    border: 1px solid #0d0c0c;  */
    position: absolute;
    height: 100%;
    width: 100%;

    background-image: url(${(props) =>
      props.src || "/images/my-svg/falling-rocks.svg"});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 17px;
    overflow: hidden;
    border: 1px solid #0d0c0c;
    /* z-index: 2; */
    bottom: 0;
    filter: blur(26px);
    background-size: 357px;
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
    /* text-transform: uppercase; */
    margin-top: 10px;
    text-align: start;
  }
  .desc {
    font-size: 14px;
    color: white;
    padding-top: 5px;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.8;
    text-align: start;
   @media screen and (min-width: 999px) {
   font-size: 13px;
   line-height: 2;
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
  min-height: 346px;
  border-radius: 10px;
  background-image: url(${(props) =>
    props.src || "/images/my-svg/falling-rocks.svg"});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  cursor: pointer;
  transition: linear 0.2s;
  /* border-radius: 17px; */
  position: relative;

  /* on desktop */
  @media screen and (min-width: 999px) {
    height: 409px;
    border-radius: 17px;
    border: 1px solid #342222;
  }

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
