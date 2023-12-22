import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProgressBar = (props) => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    let interval;

    if (props.progressValue) {
      // Simulating progress increase over time
      interval = setInterval(() => {
        const newProgress = (prevProgress) =>
          prevProgress < 100 ? prevProgress + 10 : 100;
        setProgress(newProgress);

        // Pass the progress value to the parent component
        props.onProgressChange(newProgress);
      }, 1000);
    }
    // Clear the interval when progress reaches 100
    if (progress >= 100) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [props.progressValue, props.onProgressChange]);

 

  return (
    <ProgressBarContainer>
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {/* {progress}% */}
      </div>
    </ProgressBarContainer>
  );
};

export default ProgressBar;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  border: 1px #343434 solid;
  border-radius: 25px;
  margin: 20px 0;
  overflow:hidden ;
  .progress-bar {
    height: 100%;
    line-height: 20px;
    text-align: center;
    color: #fff;
    background-color: #525252;
    
    transition: width 0.3s linear;
  }
`;
