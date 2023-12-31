import React from "react";
import styled from "styled-components";

const BarChart = ({ language, level }) => {
  return (
    <ChartContainer>
      <Language>{language}</Language>
      <Bar>
        <Filler style={{ height: `${level}%` }} />
      </Bar>
      <Level>{level}%</Level>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Language = styled.div`
  font-size: 16px;
  text-transform: lowercase;
  margin-bottom: 5px;
`;

const Bar = styled.div`
  background-color: #a09595;
  width: 52px;
  height: 158px;
  border-radius: 5px;
  /* overflow: hidden;
    */
`;

const Filler = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #0056b3; */
  background: linear-gradient(0deg, black, #252525);
  border-bottom: double 1px white;
`;

const Level = styled.div`
  font-size: 14px;
  margin-top: 5px;
  color: #555;
`;

export default BarChart;
