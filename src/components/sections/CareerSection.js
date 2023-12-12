import React from "react";
import styled from "styled-components";
import TimeLine from "./TimeLine";
import Resume from "./Resume";
export default function CareerSection() {
  return (
    <Wrapper>
      <div className="title">Professional career</div>
      <Resume />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: scroll;
  color: #03e903;
  padding: 0px 50px;
  height: 100%;
  width: 100%;
  padding-bottom: 50px;

  .title {
    font-size: 32px;
    color: #03e903;
    font-family: "Pixel12x10", sans-serif;
    padding: 20px 0px;
  }
`;
