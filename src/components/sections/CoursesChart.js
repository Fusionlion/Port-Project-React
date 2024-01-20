// src/components/LineChart.js
import React from "react";
import styled from "styled-components";

const LineChartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #ddd;
  top: 212px;
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  width: 15px;
  height: ${(props) => props.height}%;
  left: ${(props) => props.left}%;
  background-color: #2196f3;
`;

const CoursesChart = ({ data }) => {
  const max = Math.max(...data);
  const scale = 100 / max;

  return (
    <LineChartContainer>
      {data.map((value, index) => (
        <Line key={index} height={value * scale} left={index * 20} />
      ))}
      {/* Render connecting lines */}
      {data.length > 1 &&
        data.map((value, index) =>
          index < data.length - 1 ? (
            <svg
              key={`line-${index}`}
              height="100%"
              width="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <line
                x1={`${index * 20 + 7.5}%`}
                y1={`${data[index] * scale}%`}
                x2={`${(index + 1) * 20 + 7.5}%`}
                y2={`${data[index + 1] * scale}%`}
                stroke="#2196f3"
                strokeWidth="2"
              />
            </svg>
          ) : null
        )}
    </LineChartContainer>
  );
};

export default CoursesChart;
