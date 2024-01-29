import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 54px;
  font-weight: bold;
  margin: 20px 0;
  font-family: "cisnero";
  text-align: center;
  background: linear-gradient(to right, rgb(0 228 255), rgb(35 206 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 5px 9px 11px #000000, 1px -1px 0px #4f0000;

  @media screen and (min-width: 999px) {
    font-size: 79px;
    line-height: 1.2;
  }
`;
const StyledImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: justify;
  line-height: 1.5;
  margin: 20px 0;
  gap: 10px;
  flex-wrap: wrap;
`;

const StyledImage = styled.div`
  /* width: ${(props) => (props.isMiddle ? "200px" : "140px")}; */
  height: 280px;
  min-width: 100%;
  /* height: ${(props) => (props.isMiddle ? "208px" : "160px")}; */
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  flex: 1;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 999px) {
    & {
      transition: all 0.2s linear;
    }

    :hover {
      cursor: pointer;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 30px 60px rgba(23, 0, 102, 0.5),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
      transform: translateY(-5px);
    }
  }

  @media screen and (min-width: 999px) {
    height: 804px;
    border-radius: 13px;
  }
  .name {
    position: absolute;
    color: #070707;
    bottom: 0;
    width: 100%;
    font-size: 12px;
    /* text-align: center; */
    height: 19px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-top: 1px solid #20202005;
    backdrop-filter: blur(7px);
    display: flex;
  }
`;

const StyledTextButtonContainer = styled.div`
  text-align: center;
`;

const StyledText = styled.div`
  text-align: center;
  color: white;
  font-size: 17px;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: justify;
  line-height: 1.5;
  @media screen and (min-width: 999px) {
    font-size: 17px;
    line-height: 1.7;
  }
`;

const StyledButton = styled.div`
  padding: 10px 60px;
  text-align: center;
  font-size: 17px;
  background-color: black;

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
  margin: 12px 69px;

  @media screen and (min-width: 999px) {
    padding: 20px 12px;
    background-color: #000000;
    border-radius: 58px;
    /* display: grid; */
    grid-template-columns: 53px auto;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    border: 1px solid #171616;
    font-family: "Spline Sans Mono", sans-serif;
    color: aliceblue;
    margin: 5px 424px;
    text-align: center;
  }
`;

const ThreeImagesComponent = (props) => {
  const images = [
    "https://cdn.dribbble.com/userupload/4468779/file/original-3f14fe5382d3dc561a57af692a5b97cb.jpg?resize=2400x1800",
    "https://cdn.dribbble.com/userupload/9177759/file/original-d57495d059eb995d8515f3c27f37c2df.jpg?resize=2048x1536",
    "https://cdn.dribbble.com/userupload/5037488/file/original-cc1c543e24796eaaad7df4c8c607aaeb.png?resize=2048x1536&vertical=center",
    "https://user-images.githubusercontent.com/74889517/182240184-175f842b-08bf-448a-bb24-60e7589b37c0.png",
    "https://user-images.githubusercontent.com/74889517/182249026-b848efe2-f972-42e5-baad-fd9038d9caaf.png",
    "https://cdn.dribbble.com/userupload/5037487/file/original-d58fe78b48391be3883b852b2e5090a7.png?resize=2048x1536&vertical=center",
    "https://cdn.dribbble.com/userupload/10634461/file/original-c113412acf43e890dfba66921b388e8b.png?resize=1504x1128",
    "https://cdn.dribbble.com/userupload/2991686/file/original-70d4656dd207db0f5a8cbbe5089ac9b2.png?resize=2048x1536&vertical=center",
    "https://cdn.dribbble.com/users/14638622/screenshots/20547638/media/254f3a25105133ce6ea7546b373cfd18.png?resize=1600x1200&vertical=center",
    "https://cdn.dribbble.com/users/2387542/screenshots/11704764/media/f26d6ffe6823a8b34df7d5c18a9e907a.png?resize=1600x1200&vertical=center",
  ];

  // Shuffle the array using the Fisher-Yates algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  let shuffledImages = shuffleArray(images.slice()); // Initialize the shuffled array
  // Function to get a random image from the shuffled array
  const getRandomImage = () => {
    // Check if the shuffled array is empty, shuffle again if needed
    if (shuffledImages.length === 0) {
      shuffledImages = shuffleArray(images.slice()); // Create a copy to avoid modifying the original array
    }

    return shuffledImages.pop();
  };

  const addPaddingAfterFifthSentence = (text) => {
    const sentences = text.split(". ");
    const updatedText = sentences.map((sentence, index, array) => (
      <React.Fragment key={index}>
        {sentence}
        {index !== array.length - 1 && "."}
        {
          index % 4 === 3 && (
            <div style={{ padding: "10px" }} />
          ) /* Add a line break after every fifth sentence */
        }
        {index % 4 === 3 && (
          <>
            <div style={{ padding: "5px" }} />
            <StyledImage src={getRandomImage()} isMiddle={"center"}>
              <div className="name">1</div>
            </StyledImage>
            <div style={{ padding: "10px" }} />
            <StyledImage src={getRandomImage()} isMiddle={"center"}>
              <div className="name">1</div>
            </StyledImage>
            <div style={{ padding: "10px" }} />
          </>
        )}
      </React.Fragment>
    ));

    return updatedText;
  };
  return (
    <div>
      <StyledTextButtonContainer>
        {props.title && <Title>{props.title}</Title>}

        <StyledText>
          {addPaddingAfterFifthSentence(
            props.text ??
              "Fusion presents smart data for your code, algorithms, and work at a glance. It's an indispensable tool for developers everywhere, as it can be used by beginner to uber-experts alike. Explore the vast possibilities of data-driven insights, streamline your coding experience, and elevate your projects to new heights. With Fusion, you're not just writing code; you're crafting intelligent solutions. Dive into a world where innovation meets efficiency, and let Fusion empower your coding journey. Harness the power of data with Fusion – where every line of code tells a story, and every algorithm is a masterpiece. Join the Fusion revolution today!"
          )}
        </StyledText>
        {/* {!props.imagesOff && (
          <StyledImageContainer>
            <StyledImage src={getRandomImage()} isMiddle={"left"}>
              <div className="name">1</div>
            </StyledImage>
            <StyledImage src={getRandomImage()} isMiddle={"middle"}>
              <div className="name">design +</div>
            </StyledImage>
            <StyledImage src={getRandomImage()} isMiddle={"right"}>
              <div className="name">2</div>
            </StyledImage>
          </StyledImageContainer>
        )} */}
        <StyledButton
          onClick={
            props.link
              ? () => window.open(props.link, "_blank")
              : props.buttonClicked
          }
        >
          {props.buttonLabel ?? "projects."}
        </StyledButton>
      </StyledTextButtonContainer>
    </div>
  );
};

export default ThreeImagesComponent;
