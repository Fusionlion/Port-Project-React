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
  gap: 5px;
  flex-wrap: nowrap;
`;

const StyledImage = styled.div`
  width: ${(props) => (props.isMiddle ? "200px" : "140px")};
  height: ${(props) => (props.isMiddle ? "208px" : "160px")};
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const StyledTextButtonContainer = styled.div`
  text-align: center;
`;

const StyledText = styled.p`
  text-align: center;
  color: white;
  font-size: 17px;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: justify;
  line-height: 1.5;
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
  margin: 0px 69px;
`;

const ThreeImagesComponent = (props) => {
  const images = [
    "https://cdn.dribbble.com/userupload/9177759/file/original-d57495d059eb995d8515f3c27f37c2df.jpg?resize=2048x1536",
    "https://user-images.githubusercontent.com/74889517/182249015-9292982d-095e-4414-8af5-76909f905cfa.png",
    "https://cdn.dribbble.com/users/6822466/screenshots/19779255/media/f2740e42ba8a89888519f20846814f62.png?resize=1600x1200&vertical=center",
    "https://user-images.githubusercontent.com/74889517/182240184-175f842b-08bf-448a-bb24-60e7589b37c0.png",
    "https://user-images.githubusercontent.com/74889517/182249026-b848efe2-f972-42e5-baad-fd9038d9caaf.png",
    "https://cdn.dribbble.com/userupload/2919546/file/original-26217fe72f6e9140f90038f92045d1e0.png?resize=1504x1128",
    "https://cdn.dribbble.com/users/116739/screenshots/5451395/attachments/1180329/01-full.png?resize=800x600&vertical=center",
    "https://cdn.dribbble.com/userupload/10634461/file/original-c113412acf43e890dfba66921b388e8b.png?resize=1504x1128",
    "https://cdn.dribbble.com/userupload/3226653/file/original-49b22d25b280c4101f5f99fdbc9fe092.png?resize=1504x1128",
    "https://cdn.dribbble.com/userupload/3481642/file/original-37fc75acd6740374cd19b722027e0fed.png?resize=1504x1128",
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
    const updatedText = sentences.map((sentence, index) => (
      <React.Fragment key={index}>
        {sentence}
        {
          index % 4 === 3 && (
            <div style={{ padding: "10px" }} />
          ) /* Add a line break after every fifth sentence */
        }
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
        <StyledButton
          onClick={() =>
            props.link ? window.open(props.link, "_blank") : props.buttonClicked
          }
        >
          {props.buttonLabel ?? "projects."}
        </StyledButton>
      </StyledTextButtonContainer>
    </div>
  );
};

export default ThreeImagesComponent;
