import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Ide = (props) => {
  const [line, setLine] = useState(0);
  const [alreadyTypedText, setAlreadyTypedText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [ideButton, setIdeButton] = useState("Click Me!");
  const [isTyping, setIsTyping] = useState(true);
  const lessonRef = useRef(null);

  const sample = [props.text ?? "nothing to see here"];
  const message = sample[0].toString();
  const text = message.split(".");

  const [blinkClass, setBlinkClass] = useState("button-blink");
  const { onButtonClick, parentCardClicked } = props;
  // Update the previous value for the next comparison
  // useRef to store the previous value
  const previousParentCardClickedRef = useRef(parentCardClicked);

  useEffect(() => {
    // This block of code will run whenever parentCardClicked changes
    console.log("Parent card clicked:", parentCardClicked);

    // You can perform additional actions based on the change
    // For example, you can call a function:
    // yourFunction(parentCardClicked);

    // Or you can check if it's still the same or changed
    if (parentCardClicked === previousParentCardClickedRef.current) {
      console.log("Parent card is still the same.");
      setBlinkClass("button-blink next-ide-btn");
    } else {
      console.log("Parent card has changed.");
      setDisplayText(props.title ?? "Click to get started!");
      setIsTyping(false);
      setBlinkClass("button-no-blink next-ide-btn");

      setAlreadyTypedText("");
    }

    // Update the previous value for the next comparison
    previousParentCardClickedRef.current = parentCardClicked;
  }, [parentCardClicked]);
  useEffect(() => {
    const currentText = text[line];
    if (!currentText || !isTyping) return;

    let i = 0;
    const interval = setInterval(() => {
       if (line == 0) {
         setAlreadyTypedText((prevText) => props.title);
       }
      setDisplayText((prevText) => prevText + currentText[i]);
      i++;
      lessonRef.current.scrollTop = lessonRef.current.scrollHeight;

      if (i === currentText.length) {
        setIsTyping(false);
        clearInterval(interval);

        // Scroll to the bottom after typing
        // if (lessonRef.current) {
        // lessonRef.current.scrollTop = lessonRef.current.scrollHeight;
        // }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [line, isTyping]);

  function handleClick() {
   
    console.log(line);
    if (onButtonClick) {
      onButtonClick();
    }
    const currentText = text[line];
    if (currentText !== undefined) {
      setAlreadyTypedText(
        (prevText) => prevText + "\n" + currentText + "." + "\n"
      );
      setLine((prevLine) => prevLine + 1);
      setDisplayText(""); // Clear displayed text when moving to the next line
    } else {
      setDisplayText("Im afraid that's all folks :{");
    }

    setIsTyping(true);
  }

  return (
    <Wrapper>
      <div className="lesson" id="typedtext" ref={lessonRef}>
        <div id="console-prompt">
          Shall we get started<a className="blink">?</a>
        </div>
        <div style={{ whiteSpace: "pre-line" }} className="old">
          {alreadyTypedText}
        </div>
        <div className="typing">{displayText}</div>
      </div>

      <div className="ide-buttons-right">
        <div className="next-ide-btn">
          {line}/{text.length}
        </div>
        {!isTyping && (
          <div className={blinkClass} onClick={handleClick}>
            {ideButton}
          </div>
        )}
      </div>

      {/* ide background video ------------------------- */}
      {line == 0 && (
        <Video autoPlay loop muted>
          <source src="/images/my-svg/backvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      )}
      {line != 0 && <div className="background-ide"></div>}
      {/* Your other content goes here */}
    </Wrapper>
  );
};

export default Ide;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 4;
  filter: blur(5px);
  border-radius: 24px;
`;

const Wrapper = styled.div`
  background-color: #000;
  z-index: 6;
  color: white;
  border-radius: 24px;
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
  position: relative;
  .background-ide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    border-radius: 24px;
  }
  .ide-buttons-right {
    display: flex;
    gap: 10px;
    padding: 10px;
    position: absolute;
    margin: 5px 10px;
    bottom: 0;
    right: 0;
    z-index: 5;
    flex-flow: row-reverse;
  }
  .next-ide-btn {
    border-radius: 7px;
    padding: 10px;
    border: #483f3f 1px solid;

    cursor: pointer;
  }
  .lesson {
    flex: 1;
    margin-bottom: 58px;
    padding: 5px 2px;
    border-radius: 10px;
    overflow: scroll;
    z-index: 5;
  }
  .typing {
    background-color: black;
    border: 1px solid #292929;
    border-radius: 11px;
    padding: 9px 16px;
    animation: all 2s;
    text-align: start;
    text-transform: lowercase;
    z-index: 5;
  }
  .old {
    padding: 33px 16px;
    color: #948f8f;
    line-height: 1.5;
    text-align: justify;
    text-transform: lowercase;
    font-size: medium;
    z-index: 5;
  }
  .button-no-blink {
    background-color: #000;
    color: #c0453d;
    animation: 2s linear;
    cursor: pointer;
  }
  .button-blink {
    background-color: #000;
    color: #c0453d;
    animation: 2s linear infinite condemned_blink_effect;
  }
  .blink {
    padding: 3px 6px;
    color: orange;
    animation: 2s linear infinite condemned_blink_effect;
  }

  .button-blink:hover {
    color: gray;
    animation: 2s linear;
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
