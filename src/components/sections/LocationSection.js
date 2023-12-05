import React from "react";
import styled from "styled-components";

export default function LocationSection(props) {
  return (
    <Wrapper>
      <Liner />
      <span>Location</span>

      {props.location}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: white;
  font-family: "Spline Sans Mono", sans-serif;
  display: flex;
  align-items: center;
  line-height: 18px;

  span {
    color: orange;
    padding-right: 20px;
  }
`;
const Liner = styled.div`
  height: 3px;
  width: 50px;
  background-color: orange;
  margin-right: 20px;
`;
