import { useEffect, useState } from "react";
import styled from "styled-components";

const ReadProgress = ({ progressValue }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Update progress when the prop changes
    setProgress(progressValue);
  }, [progressValue]);

  return (
    <ProgressBarContainer>
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #0a00ff;
  border-radius: 25px;
  margin: 20px 0;

  .progress-bar {
    height: 100%;
    line-height: 20px;
    text-align: center;
    color: #fff;
    background-color: #525252;
    border-radius: 10px;
    transition: width 0.3s ease;
  }
`;

export default ReadProgress;
