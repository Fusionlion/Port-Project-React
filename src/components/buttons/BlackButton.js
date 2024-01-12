import React from "react";
import styled from "styled-components";

export default function BlackButton(props) {
  return <Wrapper onClick={props.clicked}>{props.label}</Wrapper>;
}

const Wrapper = styled.div`
  font-size: 22px;
  background-color: black;
  padding: 10px 30px;
  border-radius: 26px;
  color: #dbc9c9;
  -webkit-transition: all 0.7s, color 0.7s;
  -webkit-transition: all 0.7s, color 0.7s;
  transition: all 0.7s, color 0.7s;
  cursor: pointer;
  border: #ffffff1f solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Spline Sans Mono", sans-serif;

  &:hover {
    color: orange;
    margin: 0px 40px;
  }
`;
