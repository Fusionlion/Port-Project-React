import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// ... (other imports and declarations)

const Ide = (props) => {
  const [line, setLine] = useState(0);
  const [quiz, setQuiz] = useState(false);
  const [alreadyTypedText, setAlreadyTypedText] = useState("");
  const [displayText, setDisplayText] = useState("Click to begin");
  const [ideButton, setIdeButton] = useState("Click Me!");
  const [isTyping, setIsTyping] = useState(false);
  const lessonRef = useRef(null);

  const sample = [props.text ?? "nothing to see here"];
  const message = sample[0].toString();
  const text = message.split(/\.(?![^()]*\))/);

  const [blinkClass, setBlinkClass] = useState("button-blink");
  const { onButtonClick, parentCardClicked } = props;
  const previousParentCardClickedRef = useRef(parentCardClicked);

  const items = text;
  const [displayedItems, setDisplayedItems] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);

  const questions = props.quiz;
  const [displayedQuestions, setDisplayedQuestions] = useState([]);

  const [shouldShake, setShouldShake] = useState(false);

  const [allQuestionsTyped, setAllQuestionsTyped] = useState(false);
  const [allPickedAnswers, setPickedAnswers] = useState([]);
  const [allRightPickedAnswers, setRightPickedAnswers] = useState([]);
  // Function to update the picked answers
  var isCorrect = false;

  const updatePickedAnswers = (newAnswer) => {
    setPickedAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
  };
  const handleRighQuestionSelection = (selectedAnswer) => {
    // Update state with the selected answer
    // Check if the selected answer is not already in the array
    if (!allRightPickedAnswers.includes(selectedAnswer)) {
      // Update state with the selected answer
      setRightPickedAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    }

    // Check if the selected answer is incorrect
    /* Add your logic to check if the answer is correct */

    // If the answer is incorrect, trigger the shake animation
    if (!isCorrect) {
      setShouldShake(true);

      // Reset shouldShake after the animation completes
      setTimeout(() => {
        setShouldShake(false);
      }, 500); // 500ms is the duration of the shake animation
    }
  };

  // When a multiple choice has been tapped (each)
  const handleAnswerSelection = (selectedAnswer) => {
    let ex =
      currentQuestionIndex == 0
        ? currentQuestionIndex
        : currentQuestionIndex - 1;
    // Call the function to update picked answers
    // console.log(ex + " CORRECT index from data");
    // console.log(props.quiz[ex].question + " question from data");
    //  console.log(props.quiz[ex].answer + " CORRECT ANSWER from data");
    if (props.quiz[ex].answer == selectedAnswer) {
      isCorrect = true;
      setDisplayText("thats correct :)");
      handleRighQuestionSelection(selectedAnswer);
    } else {
      isCorrect = false;
      setDisplayText("thats incorrect :(");
    }

    //   if the answer is not in all picked set it
    if (!allPickedAnswers.includes(selectedAnswer)) {
      updatePickedAnswers(selectedAnswer);
    }

    // Your other logic here
  };

  const handleReset = () => {
    setDisplayedQuestions([]);
    setAlreadyTypedText("");
    setDisplayedItems([]);
    setAllQuestionsTyped(false);
    setcurrentQuestionIndex(0);
    setDisplayText("click ( me ) to start");
    setAllQuestionsTyped(false);
    setPickedAnswers([]);
    setRightPickedAnswers([]);
    setLine(0);
    setCurrentIndex(0);
  };
  // quiz button is clicked
  const handleQuizButton = () => {
    if (questions === undefined) {
      return;
    }
    // RESETS EVERYTHING WHEN SWITCHING LESSON AND QUIZ

    if (quiz) {
      setQuiz(false);
    } else {
      setQuiz(true);
    }
    handleReset();
  };

  const handleStartQuizClick = () => {
    if (currentQuestionIndex > 0 && displayText != "thats correct :)") {
      setDisplayText("answer correctly to move to the next question! :/");
      return;
    }
    console.log("starting quiz" + currentIndex + " " + questions.length);
    if (currentQuestionIndex > questions.length) {
      console.log("terminated");
      return;
    }
    if (questions && questions.length > 0 && currentQuestionIndex < 3) {
      setDisplayedQuestions((prevItems) => [
        ...prevItems,
        questions[currentQuestionIndex].question,
      ]);

      handleClick();
    } else {
      setAllQuestionsTyped(true);
      setDisplayText("No more im afraid");
    }
  };

  //for lesson
  const handleNextClick = () => {
    setDisplayedItems((prevItems) => [...prevItems, items[currentIndex]]);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // for the lesson
  const handleClick = () => {
    if (!quiz) {
      handleNextClick();
    }

    setIsTyping(true);
    setLine((prevLine) => prevLine + 1);
    props.updateLineParent(line);
    const currentText = text[currentIndex];
    if (currentText !== undefined) {
      setAlreadyTypedText(
        (prevText) => prevText + "\n" + currentText + "." + "\n"
      );
    } else {
      setDisplayText("Im afraid that's all folks :{");
    }

    if (onButtonClick) {
      onButtonClick();
    }
    setDisplayText("");
  };

  // when the cards below are clicked
  useEffect(() => {
    if (parentCardClicked === previousParentCardClickedRef.current) {
      setBlinkClass("button-blink next-ide-btn");
    } else {
      setIsTyping(false);
      setBlinkClass("button-no-blink next-ide-btn");
      handleReset();
      setDisplayText(props.title ?? "click to start");
    }

    previousParentCardClickedRef.current = parentCardClicked;
  }, [parentCardClicked]);

  useEffect(() => {
    // current line being typed
    let currentText;
    if (
      quiz &&
      questions &&
      questions.length > 0 &&
      currentQuestionIndex >= 0 &&
      currentQuestionIndex < questions.length
    ) {
      currentText = questions[currentQuestionIndex].question;
      setAllQuestionsTyped(false);
    } else {
      currentText = text[line];

      if (currentText !== undefined) {
        if (currentText.trimStart().startsWith("('")) {
          currentText = "Refer to the following image!";
        }
      } else {
        // Handle the case when currentText is undefined
        currentText = "pick a subject to start :)";
      }
    }

    if (!currentText || !isTyping) return;

    let i = 0;
    const interval = setInterval(() => {
      // only show in lesson and not quiz
      if (!quiz) {
        setDisplayText((prevText) => prevText + currentText[i]);
      } else {
        setDisplayText((prevText) => prevText + currentText[i]);
      }
      i++;
      lessonRef.current.scrollTop = lessonRef.current.scrollHeight;

      // add the question to already seen in old

      if (
        currentText.trim().endsWith("?") &&
        questions[currentQuestionIndex] &&
        questions[currentQuestionIndex].options &&
        i <= questions[currentQuestionIndex].options.length
      ) {
        setDisplayedQuestions((prevItems) => [
          ...prevItems,
          questions[currentQuestionIndex].options[i - 1],
        ]);
      }

      if (i === currentText.length) {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 20);

    setcurrentQuestionIndex((prevIndex) => prevIndex + 1);
    return () => clearInterval(interval);
  }, [line, isTyping]);

  return (
    <Wrapper ref={props.innerRef}>
      <div className="lesson" id="typedtext" ref={lessonRef}>
        <div id="console-prompt">
          {currentQuestionIndex > 0 ? props.title : "Shall we get started"}
          <a className="blink">?</a>
        </div>
        {!quiz ? (
          <div>
            {displayedItems.map((item, index) => {
              const match = item.match(/\(\(([^)]+)\)\)/);
              const url = match ? match[1] : null;

              return (
                <div key={index} className={url ? "" : "old"}>
                  {url ? (
                    <div
                      className="ide-image"
                      style={{
                        backgroundImage: `url("${
                          url.includes("/")
                            ? url
                            : `"/images/my-svg/falling-rocks.svg")`
                        }")`,
                      }}
                      placeholder={url}
                    />
                  ) : (
                    <>{item.length < 4 ? "//Refer to the image above" : item}</>
                  )}
                </div>
              );
            })}
            <div className="typing">{displayText}</div>
          </div>
        ) : (
          // QUESYIONS TYPER
          <div>
            {displayedQuestions.map((item, index) =>
              item.trim().endsWith("?") ? (
                <div className="old" key={index}>
                  {item}
                </div>
              ) : (
                // if its an answer
                <div
                  className={`${
                    allPickedAnswers.includes(item)
                      ? allRightPickedAnswers.includes(item)
                        ? "picked-and-correct"
                        : !shouldShake // Add the condition for shaking
                        ? "picked-but-incorrect shake" // Apply the shake class
                        : "picked-but-incorrect"
                      : "not-picked"
                  }`}
                  key={index}
                  onClick={() => handleAnswerSelection(item)}
                >
                  {item}
                </div>
              )
            )}
            <div className="typing">{displayText}</div>
          </div>
        )}
        {/* Question BUTTONS  */}
      </div>

      <div className="ide-buttons-right">
        <div className="next-ide-btn" onClick={handleQuizButton}>
          {!quiz
            ? questions !== undefined && questions.length !== undefined
              ? "Quiz"
              : "No-Quiz"
            : allQuestionsTyped
            ? "Back to lesson"
            : (quiz ? currentQuestionIndex : currentIndex) + "/" + questions !==
                undefined && questions.length !== undefined
            ? questions.length
            : 0}
        </div>

        {!quiz ? (
          <div className="flex-gap-10">
            {!isTyping && (
              <div className={blinkClass} onClick={handleClick}>
                <span>{ideButton}</span>
              </div>
            )}
            <div className="next-ide-btn">
              {quiz ? currentQuestionIndex : line}/{text.length}
            </div>
          </div>
        ) : (
          <div className="next-ide-btn" onClick={handleStartQuizClick}>
            {allQuestionsTyped
              ? "You're done"
              : line > 1 || currentQuestionIndex > 0
              ? "Next"
              : "Start Quiz"}
          </div>
        )}
      </div>

      {/* ide background video ------------------------- */}
      {line === 0 && (
        <Video autoPlay loop muted>
          <source src="/images/my-svg/backvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      )}
      {line !== 0 && <div className="background-ide"></div>}
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
  /* filter: blur(5px); */
  border-radius: 24px;
  @media screen and (max-width: 768px) {
    border: #1c1b1b 1px solid;
  }
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

  @media screen and (max-width: 768px) {
    height: 394px;
    width: 100%;
    font-size: 16px;
    border: #191918c9 1px solid;
    transform: scale(0.93);
    border-radius: 16px;
  }
  .flex-gap-10 {
    display: flex;
    gap: 10px;
  }
  #console-prompt {
    padding-bottom: 20px;
    @media screen and (max-width: 768px) {
      padding-bottom: 10px;
      text-align: center;
    }
  }
  .background-ide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    border-radius: 24px;
    @media screen and (max-width: 768px) {
      /* background: url(/images/my-svg/falling-rocks.svg); */
      /* background-size: cover; */
      /* filter: hue-rotate(137deg); */
    }
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
    padding: 10px 8px;
    background-color: black;
    border: #483f3f 1px solid;

    cursor: pointer;
  }
  .lesson {
    flex: 1;
    margin-bottom: 38px;
    padding: 5px 2px;
    border-radius: 10px;
    overflow: scroll;
    z-index: 5;
    @media screen and (max-width: 768px) {
      margin-bottom: 42px;
      padding: 5px 0px;
    }
  }
  .typing {
    background-color: black;
    border: 1px solid #292929;
    border-radius: 11px;
    padding: 9px 16px;
    animation: all 2s;
    text-align: start;
    line-height: 1.2;
    text-transform: lowercase;
    z-index: 5;
    @media screen and (max-width: 768px) {
      background-color: black;
      border: none;
      border-top: 1px solid #292929;
      border-radius: 0px;
      padding: 9px 8px;
      -webkit-animation: all 2s;
      animation: all 2s;
      text-align: start;
      line-height: 1.3;
      text-transform: lowercase;
    }
  }

  .typing-question {
    background-color: black;
    border: 1px solid #292929;
    border-radius: 11px;
    padding: 9px 16px;
    margin: 10px 20px;
    animation: all 2s;
    text-align: start;
    line-height: 1.2;
    text-transform: lowercase;
    z-index: 5;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
  }
  .picked-and-correct {
    background-color: black;
    color: green;
    border: 1px solid #292929;
    border-radius: 11px;
    padding: 9px 16px;
    margin: 10px 20px;
    animation: all 2s;
    text-align: start;
    line-height: 1.2;
    text-transform: lowercase;
    z-index: 5;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
  }
  .picked-but-incorrect {
    background-color: black;
    color: red;
    border: 1px solid #292929;
    border-radius: 11px;
    padding: 9px 16px;
    margin: 10px 20px;
    animation: all 2s;
    text-align: start;
    line-height: 1.2;
    text-transform: lowercase;
    z-index: 5;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(-10px);
    }
    40% {
      transform: translateX(10px);
    }
    60% {
      transform: translateX(-10px);
    }
    80% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .shake {
    animation: shake 0.5s ease-in-out;
  }
  .not-picked {
    background-color: black;
    color: white;
    border: 1px solid #292929;
    border-radius: 11px;
    padding: 9px 16px;
    margin: 10px 20px;
    animation: all 2s;
    text-align: start;
    line-height: 1.2;
    text-transform: lowercase;
    z-index: 5;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
  }
  .picked-and-correct:hover,
  .not-picked:hover,
  .picked-and-incorrect:hover {
    background-color: #100f0f;
    margin: 10px 0px;
  }
  .ide-image {
    background-image: url("/images/my-svg/falling-rocks.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    width: 100%;
    height: 399px;
    margin: 20px 0px;
    background-color: black;
    border-radius: 9px;

    @media screen and (max-width: 1000px) {
      height: 244px;
      background-position: center center;
      border: 1px solid #292929;
    }
  }
  .old {
    padding: 33px 16px;
    color: #948f8f;
    line-height: 1.5;
    text-align: justify;
    text-transform: lowercase;
    font-size: medium;
    z-index: 5;
    @media screen and (max-width: 768px) {
      color: #4f4a4a;
      padding: 7px 5px;
      line-height: 1.2;
      text-align: justify;
    }
  }
  .button-no-blink {
    background-color: #000;
    color: #c0453d;
    animation: 2s linear;
    cursor: pointer;
  }
  .button-blink {
    color: #c0453d;
    border: -7px #3e3a3a solid;
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
      color: gray;
    }
    50% {
      visibility: hidden;
    }
    100% {
      color: red;
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
