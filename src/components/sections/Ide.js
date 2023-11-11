import React, { useEffect } from "react";
import styled from "styled-components";
const Ide = ({ data }) => {
  var text = [
    "we are the ones who are right",
    "they will never catch us that is a fact",
  ];

  var line = 0;
  function handleClick() {
    line++;
    console.log(text[line] + " test");
    console.log("You clicked next");
  }

  return (
    <Wrapper>
      <div className="lesson" id="typedtext">
        <div id="console-prompt">
          Get Started<a className="blink">?</a>
        </div>
        <div className="old">//{text[line--]}</div>
        <div className="old">//{text[line]}</div>
        <div className="typing">{line}</div>
      </div>
      <div className="next-ide-btn" onClick={handleClick}>
        {" "}
        Next
      </div>
    </Wrapper>
  );
};

export default Ide;

const Wrapper = styled.div`
  background-color: #000000;
  color: white;
  border-radius: 17px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 482px;
  width: 658px;
  padding: 20px;
  font-size: 20px;
  font-family: "Spline Sans Mono", sans-serif;
  position: relative;
  border: 1px #3f3939 solid;

  .next-ide-btn {
    padding: 10px;
    position: absolute;
    border-radius: 5px;
    bottom: 0;
    right: 0;
    border: white 1px solid;
    margin: 20px;
    cursor: pointer;
  }
  .lesson {
    flex: 1;

    padding: 5px 2px;
    border-radius: 10px;
    overflow: scroll;
  }
  .typing {
    background-color: #121212;
    border-radius: 11px;
    padding: 9px 16px;
    animation: all 2s;
  }
  .old {
    padding: 9px 16px;
    color: #948f8f;
  }
  .blink {
    color: orange;
    animation: 2s linear infinite condemned_blink_effect;
  }

  @keyframes condemned_blink_effect {
    0% {
      visibility: hidden;
    }
    50% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  @-webkit-keyframes blink {
    50% {
      border-color: tranparent;
    }
  }
`;
