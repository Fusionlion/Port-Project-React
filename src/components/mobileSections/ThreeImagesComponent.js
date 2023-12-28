import React from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: justify;
  line-height: 1.5;
  margin: 20px 0;
`;

const StyledImage = styled.div`
  width: ${(props) => (props.isMiddle ? "200px" : "100px")};
  height: ${(props) => (props.isMiddle ? "279px" : "200px")};
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
  color: bisque;
  font-size: 17px;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  line-height: 1.5;
  padding: 20px;
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

const ThreeImagesComponent = () => {
  return (
    <div>
      <StyledImageContainer>
        <StyledImage
          src="https://qph.cf2.quoracdn.net/main-qimg-0c2f4f674f12955ae42d6196ed556e57-lq"
          isMiddle={false}
        />
        <StyledImage
          src="https://i.redd.it/b7qfov5w5rca1.png"
          isMiddle={true}
        />
        <StyledImage
          src="https://i.pinimg.com/564x/46/46/01/464601bf0415d42b53995b517cc1cd5c.jpg"
          isMiddle={false}
        />
      </StyledImageContainer>

      <StyledTextButtonContainer>
        <StyledText>
          Fusion presents smart data for your code, algorithms, and work at a
          glance. It's an indispensable tool for developers everywhere, as it
          can be used by beginner to uber-experts alike.
        </StyledText>
        <StyledButton>projects.</StyledButton>
      </StyledTextButtonContainer>
    </div>
  );
};

export default ThreeImagesComponent;
