import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProgressBar = (props) => {
  let shows;
  if (props.progressValue == props.size) {
    shows = 100;
  } else {
    shows = (props.progressValue / props.size) * 100;
  }

  return (
    <>
      {" "}
      {shows > 1 && (
        <ProgressBarContainer>
          <div className="progress-bar" style={{ width: `${shows}%` }}>
            {/* {progress}% */}
          </div>
        </ProgressBarContainer>
      )}
    </>
  );
};

export default ProgressBar;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  border: 1px #343434 solid;
  border-radius: 25px;
  margin: 20px 0;
  overflow: hidden;
  .progress-bar {
    height: 100%;
    line-height: 20px;
    text-align: center;
    color: #fff;
    background-color: #525252;

    transition: width 0.3s linear;
  }
`;
