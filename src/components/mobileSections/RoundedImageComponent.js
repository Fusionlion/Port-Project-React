import React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px;
  color: white;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const StyledTextBold = styled.div`
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 10px;
`;

const StyledNormalText = styled.div`
  margin-bottom: 10px;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: justify;
  line-height: 1.5;
  display: ${(props) => (props.showMore ? "block" : "-webkit-box")};
  -webkit-line-clamp: 9; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media screen and (min-width: 999px) {
    font-size: 17px;
    line-height: 1.7;
  }
`;

const ShowMoreButton = styled.button`
  background-color: #151313;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
  z-index: 99;
`;

const StyledRoundedImage = styled.div`
  width: 100%;
  height: 244px;
  background-image: url("https://github.com/zabloncharles/Port-Project-React/blob/main/public/images/my-svg/watch-project.png?raw=true");

  background-size: cover;
  margin-bottom: 10px;
  background-position: center;
  @media screen and (min-width: 999px) {
    height: 656px;
  }
`;

const StyledTitleBold = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  border: 1px solid #4a8895;
  border-radius: 319px;
  padding: 19px 89px;
  border-radius: 50% 50%;
  margin-bottom: 10px;
  text-align: center;
  line-height: 1.2;
  text-wrap: nowrap;
`;

const StyledBorderedText = styled.div`
  border: 1px solid #254349;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 19px;
  width: 100%;
  text-align: end;
  overflow: visible;
  line-height: 1.2;
`;

const RoundedImageComponent = (props) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(true);
  };
  return (
    <StyledContainer>
      <StyledTextBold>CAN YOU FEEL THE LOVE</StyledTextBold>
      <StyledNormalText showMore={showMore} onClick={toggleShowMore}>
        In the dynamic realm of software development, my journey is best
        reflected in the projects I've undertaken—each a testament to my skills
        and commitment to crafting impactful solutions. This section showcases
        the diverse range of projects I've brought to life, offering a glimpse
        into my proficiency across various technologies and my dedication to
        addressing real-world challenges.
      </StyledNormalText>
      {!showMore && (
        <ShowMoreButton onClick={toggleShowMore}>Show More</ShowMoreButton>
      )}
      <StyledRoundedImage></StyledRoundedImage>
      <StyledTitleBold>Full Scale Projects</StyledTitleBold>
      <StyledNormalText showMore={showMore} onClick={toggleShowMore}>
        As a seasoned Java developer and frontend specialist, I've successfully
        navigated the intricacies of building scalable and responsive user
        interfaces. The fusion of these skills has been pivotal in crafting
        visually appealing and highly functional applications. Additionally, my
        prowess in Salesforce Apex—the backbone of Salesforce development—adds
        another layer to my capabilities, enabling me to create comprehensive
        solutions in the Salesforce ecosystem. My portfolio stands as a
        testament to the breadth and depth of my skills, ready to meet the
        demands of innovative software development.
      </StyledNormalText>
      <StyledBorderedText>
        Java, Frontend Development, and Salesforce Apex
      </StyledBorderedText>
    </StyledContainer>
  );
};

export default RoundedImageComponent;
