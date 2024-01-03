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
`;

const StyledImage = styled.div`
  width: ${(props) => (props.isMiddle == "middle" ? "200px" : "140px")};
  height: ${(props) => (props.isMiddle == "middle" ? "208px" : "160px")};
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: ${(props) =>
    props.isMiddle === "left"
      ? "center center"
      : props.isMiddle === "right"
      ? "center right"
      : "center center"};
  border-radius: 8px;
  border: 1px #3e3e3e solid;
  position: relative;
  overflow: hidden;

  .name {
    position: absolute;
    color: white;
    background: linear-gradient(1deg, #000000, #000000, black);
    bottom: 0;
    width: 100%;
    font-size: 9px;
    text-align: center;
    height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #202020;
  }
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
  return (
    <div>
      <StyledTextButtonContainer>
        {props.title && <Title>{props.title}</Title>}

        <StyledText>
          Fusion presents smart data for your code, algorithms, and work at a
          glance. It's an indispensable tool for developers everywhere, as it
          can be used by beginner to uber-experts alike.
        </StyledText>
        <StyledImageContainer>
          <StyledImage
            src="https://user-images.githubusercontent.com/74889517/182249015-9292982d-095e-4414-8af5-76909f905cfa.png"
            isMiddle={"left"}
          ></StyledImage>
          <StyledImage
            src="https://user-images.githubusercontent.com/74889517/182240184-175f842b-08bf-448a-bb24-60e7589b37c0.png"
            isMiddle={"middle"}
          >
            <div className="name">Health +</div>
          </StyledImage>
          <StyledImage
            src="https://user-images.githubusercontent.com/74889517/182249026-b848efe2-f972-42e5-baad-fd9038d9caaf.png"
            isMiddle={"right"}
          ></StyledImage>
        </StyledImageContainer>
        <StyledButton onClick={props.buttonClicked}>projects.</StyledButton>
      </StyledTextButtonContainer>
    </div>
  );
};

export default ThreeImagesComponent;
