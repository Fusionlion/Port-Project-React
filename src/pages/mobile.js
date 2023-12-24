import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import FooterSection from "../components/sections/FooterSection";

export default function Mobile() {
  const [showMenu, setShowMenu] = useState(false);
  const [text, setText] = useState("Let's get started :)");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 180); // Adjust the interval based on your needs

    return () => clearInterval(interval);
  }, [text]);

  const handleMenuButton = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <MobileWrapper>
      <div className="mobile-hero-background"></div>
      <div className="mobile-stars-background"></div>
      <MobileHeader>
        <div
          className={
            showMenu ? "mobile-header-left-clicked" : "mobile-header-left"
          }
          onClick={handleMenuButton}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        <div className="mobile-header-right">
          <div className="columns">
            <div className="mobile-email">zab.charles@gmail.com</div>
            <div className="mobile-phone">201-267-5068</div>
          </div>
          <div className="right-header-icon"></div>
        </div>
      </MobileHeader>
      {/* show menu when menu button is clicked */}
      {showMenu && (
        <MobileMenu>
          <li className="mobile-menu-item" onClick={handleMenuButton}>
            PROJECTS
          </li>
          <li className="mobile-menu-item" onClick={handleMenuButton}>
            COURSES
          </li>
          <li className="mobile-menu-item" onClick={handleMenuButton}>
            ABOUT
          </li>
          <li className="mobile-menu-item" onClick={handleMenuButton}>
            PRIVACY POLICY
          </li>
        </MobileMenu>
      )}

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
    </MobileWrapper>
  );
}

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
const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 30px;
  overflow: scroll;
  position: relative;
  background: linear-gradient(to top, #000000, #06041a, #1506c8);
  .columns {
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 1;
  }
  .mobile-hero-background {
    position: absolute;
    background-image: url(/images/my-svg/two-waves.svg);
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
    background-blend-mode: color-dodge;
    background-position: bottom;
    background-repeat: repeat-x;
    height: 600px;
    width: 100%;
    z-index: 0;
    overflow: hidden;
    left: 0;
    top: 190px;
  }
  .mobile-stars-background {
    position: absolute;
    background-image: url(/images/my-svg/header-stars.svg);
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
    background-blend-mode: color-dodge;
    background-position: bottom;
    background-repeat: repeat;
    height: 600px;
    width: 100%;
    z-index: 0;
    overflow: hidden;
    left: 0;
    top: 0;
  }
  .after-button-text {
    color: rgba(238, 230, 230, 0.7);
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 130%;
    margin: 20px;
    max-width: 90%;
    text-align: center;
    align-self: center;
  }

  .mobile-welcome-button {
    font-size: 50px;
    padding: 50px 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 500px;
    border-radius: 18px;
    color: white;
    transition: transform 0.7s, color 0.7s;
    cursor: pointer;
    background: #473b2e2e;
    box-shadow: 0px 0px 1px #615f5c00, 0px 0px 2px #ffc67b;
    transition: all 0.6s;
    align-self: center;
  }
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
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  padding-top: 40px;
  gap: 15px;
  transition: all 1s ease-in-out;
  animation: all 1s ease-in-out;
  z-index: 1;
  border-radius: 12px;
  color: white;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  padding-left: 20px;
  .mobile-menu-item {
    font-size: 62px;
    font-family: "accelerare", "Times New Roman", Times, serif;
    list-style: hebrew;
  }
  .mobile-menu-item:hover {
    border-bottom: 5px black solid;
    cursor: pointer;
  }
`;
const MobileWelcomeImage = styled.div`
  min-height: 500px;
  width: 100%;
  border-radius: 30px;
  background-image: url(/images/my-svg/merilios.png);
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  border-bottom: 1px #633e00 solid;
  z-index: 1;
`;
const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  height: 170px;
  z-index: 1;
  .mobile-header-left {
    display: flex;

    height: 100%;
    flex-direction: column;
    gap: 2px;
    justify-content: space-evenly;
    cursor: pointer;

    align-items: center;
    border-radius: 14px;
    margin: 10px 0px;
  }
  .mobile-header-left-clicked {
    display: flex;
    flex-direction: column;
    gap: 2px;
    justify-content: space-between;
    cursor: pointer;
    height: 90px;
    align-items: center;
    border-radius: 14px;
    padding: 20px;
  }
  .burger-line {
    width: 105px;
    height: 4px;
    background-color: black;
  }
  .mobile-header-right {
    display: flex;
    font-size: 45px;
    gap: 10px;
    align-items: center;
    color: #2c94ea;
    border-radius: 14px;
    /* background: #d1d1d1; */
    padding: 10px 22px;
    text-align: end;
   
    /* border: #95434333 solid 1px; */
  }
  .right-header-icon {
    background-image: url(/images/my-svg/icon.png);
    height: 85px;
    width: 85px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    filter: hue-rotate(292deg);
  }
  .mobile-email,
  .mobile-phone {
    font-family: "Spline Sans Mono", sans-serif;
    /* font-size: 25px; */
  }
`;
const MobileWelcomeTitle = styled.div`
  padding-bottom: 20px;
  padding-top: 81px;
  display: flex;
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
    font-size: 62px;
    color: white;
    background: #0e0482;
    box-shadow: 5px 5px 10px #060237, -5px -5px 10px #1606cd;
    padding: 8px 10px;
    border-radius: 10px;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
    font-family: "SF Display Pro", sans-serif;
  }
  > :nth-child(2) {
    font-size: 132px;
    font-family: "accelerare", sans-serif;
    background: linear-gradient(to right, rgb(255 255 255), rgb(249 146 84));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px -1px #06022a;
    /* font-family: "SF Pro Display", sans-serif; */
  }
`;
