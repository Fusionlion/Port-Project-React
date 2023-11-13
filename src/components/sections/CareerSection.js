import React from "react";
import styled from "styled-components";
import TimeLine from "./TimeLine";
export default function CareerSection() {
  return (
    <Wrapper>
      <div className="title">Professional career</div>
      <TimeLine />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: scroll;
  color: #03e903;
  height: 500px;

  .title {
    font-size: 32px;
    color: #03e903;
    font-family: "Pixel12x10", sans-serif;
    padding: 20px 0px;
  }
`;
