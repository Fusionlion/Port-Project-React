import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { VscFlame } from "react-icons/vsc"; // Replace 'VscFlame' with your actual icon component
import BirdsLottie from "../components/sections/BirdsLottie";
import Birds from "../components/lottie/Birds";

const cursorAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Cursor = styled.span`
  font-size: 24px;
  animation: ${cursorAnimation} 0.5s ease infinite alternate;
`;

const WelcomeMessage = (props) => {
  const [animateVideo, setanimateVideo] = useState(false);
  const [text, setText] = useState("");
  const [opacityView, setOpacityView] = useState(false);
  let greetingText = "Welcome to my portfolio :)";
  const getRandomColor = () => {
    const colors = ["#FF5733", "#33FF9F", "#3366FF", "#FF33FF", "#FFFF33"]; // Add more colors as needed
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const typingEffect = () => {
      let index = 0;
      const type = () => {
        setText((prevText) => {
          return prevText + greetingText[index]; // Type the next character
        });
        index++;
        if (index === greetingText.length) {
          // Start deletion after 3 seconds

          setTimeout(() => {
            setText("I'm glad you're here!");
          }, 1000);

          setTimeout(() => {
            setOpacityView(true);
          }, 3000);

          setTimeout(() => {
            props.setValue(true);
          }, 4000);
        } else {
          setTimeout(type, 100); // Adjust typing and deleting speed here (in milliseconds)
        }
      };
      type();
    };
    typingEffect();
    return () => {
      setText("");
      // Clear the text when the component unmounts
    };
  }, []);

  return (
    <Container value={props.value} opacityView={opacityView}>
      {/* <BirdsCustom /> */}
      {/* <BirdsCustom /> */}
      <IconWrapper fontColor={getRandomColor()}>
        {/* <VscFlame /> */}
        {/* <RomeHead></RomeHead> */}
        <Video
          opacityView={opacityView}
          animateVideo={animateVideo}
          autoPlay
          loop
          muted
        >
          <source src="/images/my-svg/backvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </IconWrapper>

      <TypingText opacityView={opacityView}>
        {text}
        <Cursor>|</Cursor>
      </TypingText>
    </Container>
  );
};

export default WelcomeMessage;

const Video = styled.video`
  width: 90px;
  height: 90px;
  object-fit: cover;

  /* filter: blur(5px); */
  border-radius: 60px;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.animateVideo ? 1 : 1)};
  filter: hue-rotate(339deg);
  opacity: ${(opacityView) => (opacityView ? "1" : "0")};
  @media screen and (max-width: 1000px) {
    border: #3b262600 1px solid;
    width: 80px;
    height: 80px;
  }
`;

const RomeHead = styled.div`
  // Your styles here
  width: 87px;
  height: 87px;
  background-image: url(/images/my-svg/merilios.png);
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  border: 1px solid #552f1047;
  border-radius: 62px;
  padding: 29px;
`;

const BirdsCustom = styled(Birds)`
  // Your styles here
  opacity: 0 !important;
`;

const Container = styled.div`
  z-index: 105;
  display: flex;
  background-color: ${({ opacityView }) =>
    opacityView ? "#eae0e000" : "#000000"};
  backdrop-filter: ${({ opacityView }) =>
    opacityView ? "blur(0px)" : "blur(38px)"};
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  opacity: ${(opacityView) => (opacityView ? "1" : "0")};
  transition: all ease-in-out 1s;
  display: (${(value) => (value ? "none" : "block")});
  position: fixed;
`;

const TypingText = styled.div`
  /* font-family: "Spline Sans Mono", sans-serif; */
  opacity: ${(opacityView) => (opacityView ? "1" : "0")};
  margin-top: 10px;
  font-size: 15px;
  position: relative;
  background: linear-gradient(
    to right,
    rgb(206 216 222),
    #ba991d,
    rgb(126 172 206)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Spline Sans Mono", sans-serif;
  opacity: ${(opacityView) => (opacityView ? "1" : "0")};
`;

const IconWrapper = styled.div`
  // Your styles here
  color: ${({ fontColor }) =>
    fontColor || "white"}; /* Default to white if no color provided */
  transition: color 1s ease-in-out;
  font-size: 50px;
`;
