import React from "react";
import styled from "styled-components";
export default function MobileHome() {
  const [text, setText] = useState("Let's get started :)");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 180); // Adjust the interval based on your needs

    return () => clearInterval(interval);
  }, [text]);
  return (
    <Wrapper>
      <MobileWelcomeTitle>
        <div className="mobile-title-big">zablon charles</div>
        <div className="mobile-title-big">PORTFOLIO</div>
      </MobileWelcomeTitle>
      <MobileWelcomeImage></MobileWelcomeImage>
      <MobileDesc>
        What everyone said was true. You cannot learn how to code by reading,
        listening or watching someone else do it. You have to get your hands
        dirty! I am a software developer building interfaces and accessible
        applications. Welcome to my personal slice of the internet.I'm glad
        you're here!
      </MobileDesc>
      <div className="mobile-welcome-button">GET STARTED</div>
      <div class="after-button-text">
        <br />
        Learn the best tools and platforms.Make your code efficient and learn
        new methodologies in programming.
      </div>
      <TypingText>
        <div className="font-sa">{text.substring(0, index)} !</div>
      </TypingText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 30px;
  overflow: scroll;
  position: relative;
  background: linear-gradient(to top, #000000, #06041a, #1506c8);
`;
const MobileWelcomeTitle = styled.div`
  padding-bottom: 20px;
  padding-top: 81px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  /* font-family: "Spline Sans Mono", sans-serif; */
  .mobile-title-big {
    font-size: 132px;
    color: black;
    z-index: 1;
  }
  > :nth-child(1) {
    font-size: 42px;
    color: white;
    color: #4d67de;
    box-shadow: 5px 5px 10px #060237, -5px -5px 10px #1606cd;
    padding: 8px 10px;
    border-radius: 10px;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
    font-family: "SF Display Pro", sans-serif;
  }
  > :nth-child(2) {
    font-size: 122px;
    font-family: "accelerare", sans-serif;
    background: linear-gradient(to right, rgb(255 255 255), rgb(249 146 84));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px -1px #06022a;
    /* font-family: "SF Pro Display", sans-serif; */
  }
`;
const MobileWelcomeImage = styled.div`
  position: relative;
  min-height: 662px;
  width: 474px;
  overflow: visible;
  border: 1px #633e00fc solid;
  align-self: center;
  background-color: black;
  margin: 20px auto; /* Adjust margin as needed */
  background-image: url(/images/my-svg/merilios.png);
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  align-self: center;
  border-radius: 244px;
  box-shadow: 0px 90px 90px -60px rgba(255, 165, 0, 0.7);
`;

const MobileDesc = styled.div`
  font-family: "Bodoni Moda", serif;
  font-size: 40px;
  line-height: initial;
  padding-bottom: 20px;
  padding-top: 40px;
  text-align: justify;
  background-color: #100f0e47;
  border-radius: 12px;
  color: white;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  text-align: center;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  .first-character {
    font-weight: 400;
    float: left;
    font-size: 198px;
    line-height: 105px;
    padding-top: 40px;
    padding-right: 8px;
    /* padding-left: 3px; */
    font-family: "Source Sans Pro", sans-serif;
  }
`;
const TypingText = styled.div`
  margin: 50px 0px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  .font-sa {
    font-family: "cisnero", sans-serif;
    color: white;
    align-self: center;
    height: 160px;
    font-size: 42px;
    width: 350px;
  }
`;
