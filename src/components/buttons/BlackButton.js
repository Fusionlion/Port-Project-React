import React from "react";
import styled from "styled-components";

export default function BlackButton(props) {
  return <Wrapper>{props.label}</Wrapper>;
}

const Wrapper = styled.div`
  font-size: 22px;
  background-color: black;
  padding: 10px 30px;
  border-radius: 10px;
  color: white;
  -webkit-transition: all 0.7s, color 0.7s;
  transition: all 0.7s, color 0.7s;
  cursor: pointer;
  border: #ffffff40 solid 1px;
`;
