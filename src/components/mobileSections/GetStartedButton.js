import React from "react";
import styled from "styled-components";

export default function GetStartedButton(props) {
  const handleclicked = () => {
    props.clicked();
  };
  return <Wrapper onClick={handleclicked}>Get Started</Wrapper>;
}

const Wrapper = styled.div`
  // Your styles here
  text-align: center;
  font-size: 20px;
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
  margin: 0px 58px;
  z-index: 5;
`;
