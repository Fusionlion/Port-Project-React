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
  @media screen and (min-width: 999px) {
    font-size: 17px;
    line-height: 1.7;
  }
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
  background-size: contain;
  margin-bottom: 10px;
  background-position: center;
  border: 1px solid #191a1a;
  border-radius: 15px;
  @media screen and (min-width: 999px) {
    height: 624px;
  }
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
`;

const StyledTitleBold = styled.div`
  font-weight: bold;
  padding: 19px 59px;
  border-radius: 12px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 1.2;
  background: #0f98ab;
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

const LiveLinkComponent = (props) => {
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false);
  const toggleShowLess = () => {
    setShowMore(false);
    setShowLess(false);
  };
  const toggleShowMore = () => {
    setShowMore(true);
    setShowLess(true);
  };
  const handleTitleClick = () => {
    // Replace 'your_link_url' with the actual URL you want to open in a new tab
    window.open(props.link, "_blank");
  };
  return (
    <StyledContainer key={props.title1}>
      <StyledTextBold key="text-bold-1">
        {props.title1 ?? "Check out this project on github"}
      </StyledTextBold>

      {!showMore && <div className="bg-text" key="bg-text-145"></div>}

      <StyledTitleBold key="title-bold-20" onClick={handleTitleClick}>
        {props.title2 ?? "Open Project"}
      </StyledTitleBold>
    </StyledContainer>
  );
};

export default LiveLinkComponent;
