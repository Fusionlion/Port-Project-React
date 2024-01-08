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
  background-size: contain;
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

const MobileTextImage = (props) => {
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
  return (
    <StyledContainer>
      <StyledTextBold>{props.title1 ?? "CodeCraft Chronicles"}</StyledTextBold>
      {props.text1 &&
        (props.text1.split(".").length <= 5
          ? props.text1.split(".").map((sentence, index, array) => (
              <StyledNormalText key={index} showMore={showMore}>
                {sentence}
                {index !== array.length - 1 && "."}
              </StyledNormalText>
            ))
          : props.text1.split(".").map(
              (sentence, index, array) =>
                (showMore || index < 2) && (
                  <>
                    <StyledNormalText key={index} showMore={showMore}>
                      {sentence}
                      {index % 5 === 4 && index !== array.length - 1 && <br />}
                      {/* Add a line break every 5th period, but not after the last sentence */}
                    </StyledNormalText>

                    {index === props.text1.split(".").length - 1 && (
                      <>
                        {showMore && (
                          <ShowMoreButton
                            key={"showMorebButton" + index}
                            onClick={toggleShowLess}
                          >
                            Show Less
                          </ShowMoreButton>
                        )}
                      </>
                    )}

                    {!showMore && index === 1 && (
                      <ShowMoreButton
                        key={"showLess-Button" + index}
                        onClick={toggleShowMore}
                      >
                        Show More
                      </ShowMoreButton>
                    )}
                  </>
                )
            ))}
      {!showMore && <div className="bg-text"></div>}
      <StyledRoundedImage
        style={{
          backgroundImage: `url(${
            props.url ?? "images/my-svg/falling-rocks.svg"
          })`,
        }}
      ></StyledRoundedImage>
      <StyledTitleBold>{props.title2 ?? "Full Scale Projects"}</StyledTitleBold>

      {props.text2 &&
        (props.text2.split(".").length <= 5
          ? props.text2.split(".").map((sentence, index, array) => (
              <StyledNormalText key={index} showMore={showMore}>
                {sentence}
                {index !== array.length - 1 && "."}
              </StyledNormalText>
            ))
          : props.text2.split(".").map(
              (sentence, index, array) =>
                (showMore || index < 3) && (
                  <>
                    <StyledNormalText key={index} showMore={showMore}>
                      {sentence}
                      {index !== array.length - 1 && "."}
                      {index % 5 === 4 && index !== array.length - 1 && <br />}
                      {/* Add a line break every 5th period, but not after the last sentence */}
                    </StyledNormalText>

                    {index === props.text2.split(".").length - 1 && (
                      <>
                        {showMore && (
                          <ShowMoreButton
                            key={"showMorebButton" + index}
                            onClick={toggleShowLess}
                          >
                            Show Less
                          </ShowMoreButton>
                        )}
                      </>
                    )}

                    {!showMore && index === 2 && (
                      <ShowMoreButton
                        key={"showLess-Button" + index}
                        onClick={toggleShowMore}
                      >
                        Show More
                      </ShowMoreButton>
                    )}
                  </>
                )
            ))}
      {!showMore && <div className="bg-text"></div>}

      <StyledBorderedText>
        {props.title3 ?? "CodeCraft Chronicles"}
      </StyledBorderedText>
    </StyledContainer>
  );
};

export default MobileTextImage;
