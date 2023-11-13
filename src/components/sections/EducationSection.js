import React from "react";
import styled from "styled-components";
export default function EducationSection() {
  return (
    <Wrapper>
      <div className="title">Education</div>
      <div className="edu">
        Saint Peter's University
        <br />
        Year | 2021
        <br />
        Computer Science
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .title {
    font-size: 32px;
    color: #03e903;
    font-family: "Pixel12x10", sans-serif;
    padding: 20px 0px;
  }
  .edu {
    color: white;
    background-color: #0a0f1e;
    padding: 20px;
    border-radius: 8px;
    line-height: 19px;
    font-family: "Spline Sans Mono", sans-serif;
  }
`;
