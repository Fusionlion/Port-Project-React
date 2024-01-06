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
  position: relative;
  .bg-text {
    position: absolute;
    background: linear-gradient(359deg, #000000ad, transparent, transparent);
    height: 100%;
    width: 100%;
    bottom: 0;
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
  margin-bottom: 15px;
`;

const StyledRoundedImage = styled.div`
  width: 100%;
  height: 244px;
  background-image: url("/images/my-svg/proj.png");

  background-size: contain;
  mix-blend-mode: hard-light;
  margin-bottom: 10px;
  background-position: center;
  border: 1px solid #191a1a;
  border-radius: 15px;
`;

const StyledTitleBold = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  border: 1px solid #191a1a;
  border-radius: 319px;
  padding: 19px 89px;
  border-radius: 50% 50%;
  margin-bottom: 10px;
  text-align: center;
  line-height: 1.2;
  text-wrap: nowrap;
`;

const StyledBorderedText = styled.div`
  border: 1px solid #342727;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 19px;
  width: 100%;
  text-align: center;
  overflow: visible;
  line-height: 1.2;
`;

const MobileTextImage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <StyledContainer>
      <StyledTextBold>CodeCraft Chronicles</StyledTextBold>
      <StyledNormalText showMore={showMore}>
        My narrative extends beyond the realm of mere coding; it's about
        empowering individuals with the skills to architect robust software
        solutions and revolutionize the tech landscape. The "CodeCraft
        Chronicles" is a testament to the passion for teaching, a commitment to
        demystifying the complexities of data structures and algorithms, and a
        relentless pursuit of excellence. As we unravel the chapters of Java,
        Salesforce Apex, HTML, and CSS, we invite aspiring developers to join
        this odyssey, where knowledge becomes a beacon illuminating the path to
        success in the ever-evolving tech industry.
        {!showMore && <div className="bg-text"></div>}
      </StyledNormalText>
      {!showMore && (
        <ShowMoreButton onClick={toggleShowMore}>Show More</ShowMoreButton>
      )}
      <StyledRoundedImage></StyledRoundedImage>
      <StyledTitleBold>Full Scale Projects</StyledTitleBold>
      <StyledNormalText showMore={showMore}>
        At the heart of this chronicle lies a dedication to projects that
        transcend the ordinary. From crafting a cutting-edge iOS app that tracks
        fertility cycles and recommends nearby healthcare professionals to
        developing a Salesforce full-stack application for university students,
        the projects undertaken in the "CodeCraft Chronicles" are not mere code;
        they are impactful solutions to real-world challenges. Each project
        serves as a testament to the versatility of skills, encompassing not
        only Java and Salesforce Apex but also a profound understanding of
        frontend development, API integration, and the intricacies of data
        management.
        {!showMore && <div className="bg-text"></div>}
      </StyledNormalText>
      {!showMore && (
        <ShowMoreButton onClick={toggleShowMore}>Show More</ShowMoreButton>
      )}
      <StyledBorderedText>CodeCraft Chronicles</StyledBorderedText>
    </StyledContainer>
  );
};

export default MobileTextImage;
