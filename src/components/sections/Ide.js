import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Ide = () => {
  const [line, setLine] = useState(0);
  const [alreadyTypedText, setAlreadyTypedText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const text = [
    "Click start to learn about my journey",
    "They will never catch us; that is a fact",
  ];

  useEffect(() => {
    const currentText = text[line];
    if (!currentText || !isTyping) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + currentText[i]);
      i++;

      if (i === currentText.length) {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [line, isTyping]);

  function handleClick() {
    const currentText = text[line];
    if (currentText !== undefined && currentText.trim().length > 0) {
      setAlreadyTypedText(
        (prevText) => "\n" + prevText + "\n" + currentText + "\n"
      );
      setLine((prevLine) => prevLine + 1);
      setDisplayText(""); // Clear displayed text when moving to the next line
    } else {
      setDisplayText("Im afraid that's all folks :{");
    }

    setIsTyping(true);
    console.log("You clicked Next");
  }

  return (
    <Wrapper>
      <div className="lesson" id="typedtext">
        <div id="console-prompt">
          Shall we get started<a className="blink">?</a>
        </div>
        <div className="old">//{alreadyTypedText}</div>
        <div className="typing">{displayText}</div>
      </div>
      {!isTyping && (
        <div className="next-ide-btn" onClick={handleClick}>
          Next
        </div>
      )}
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
    padding: 33px 16px;
    color: #948f8f;
    line-height: 1.5;
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
