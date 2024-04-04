import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import MobileProjects from "../components/mobileSections/MobileProjects";
import MobileProjectDetail from "../components/mobileSections/MobileProjectDetail";
import "../components/styles/Font.css";
import MobileHome from "../components/mobileSections/MobileHome";
import MobileCourses from "../components/mobileSections/MobileCourses";
import PrivacyComponent from "../components/mobileSections/PrivacyComponent";
import ParallaxStars from "../components/mobileSections/MobileBackgrounds.js/ParallaxStars";
import BirdsLottie from "../components/sections/BirdsLottie";
import MobileDribble from "../components/mobileSections/MobileDribble";

export default function MobileApp() {
  const [switchPage, setSwitchPage] = useState("home");
  const [showMenu, setShowMenu] = useState(false);
  const [isFaded, setFaded] = useState(false);
  const handleHomeButton = (page) => {
    setSwitchPage("home");
    setShowMenu(false);
  };

  const handleShowMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };
  const handleMenuButton = (page) => {
    if (switchPage != "") {
      setSwitchPage(page);
      setShowMenu(false);
    }
    if (page === "Portfolio") {
      setFaded(false);
    } else {
      setFaded(true);
    }
  };
  return (
    <MobileLayout>
      {/* header only show */}
      <ParallaxStars />
      <FadeContent faded={isFaded}>
        <BirdsLottie />
      </FadeContent>
      <MobileHeader>
        <div className="mobile-header-left" onClick={handleShowMenu}>
          <div
            className={showMenu ? "burger-line-clicked" : "burger-line"}
          ></div>
          <div
            className={showMenu ? "burger-line-clicked" : "burger-line"}
          ></div>
          <div
            className={showMenu ? "burger-line-clicked" : "burger-line"}
          ></div>
        </div>
        <div className="mobile-header-right">
          {/* <div className="columns">
            <div className="mobile-email">zab.charles@gmail.com</div>
            <div className="mobile-phone">201-267-5068</div>
          </div> */}
          <div className="right-header-icon"></div>
          <div className="mobile-name" onClick={handleHomeButton}>
            Portfolio
          </div>
        </div>
      </MobileHeader>
      {/* show menu when menu button is clicked */}
      {showMenu && (
        <MobileMenu>
          <li
            className="mobile-menu-item"
            onClick={() => handleMenuButton("projects")}
          >
            PROJECTS
          </li>
          <li
            className="mobile-menu-item"
            onClick={() => handleMenuButton("courses")}
          >
            COURSES
          </li>
          <li
            className="mobile-menu-item"
            onClick={() => handleMenuButton("ui/ux")}
          >
            UI/UX
          </li>
          <li
            className="mobile-menu-item"
            onClick={() => handleMenuButton("privacy")}
          >
            PRIVACY POLICY
          </li>
        </MobileMenu>
      )}
      {/* <MobileProjects /> */}
      {switchPage == "home" && <MobileHome page={handleMenuButton} />}
      {switchPage == "projects" && <MobileProjects />}
      {switchPage == "courses" && <MobileCourses />}
      {switchPage == "privacy" && <PrivacyComponent />}
      {switchPage == "ui/ux" && <MobileDribble />}
    </MobileLayout>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    
  }
  to {
    opacity: 1;
   
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const FadeContent = styled.div`
  opacity: ${({ faded }) => (faded ? 0 : 1)};
  /* display: ${({ faded }) => (faded ? "none" : "block")}; */
  mix-blend-mode: ${({ faded }) => (faded ? "hard-light" : "inherit")};
  transition: all 0.9s ease-in-out;
  animation: ${({ faded }) => (faded ? fadeOut : fadeIn)}
    ${({ faded }) => (faded ? "0.9s" : "3.5s")} ease-in-out;
`;
const MobileMenu = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  color: black;
  padding-top: 40px;
  gap: 9px;
  -webkit-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
  -webkit-animation: all 1s ease-in-out;
  animation: all 1s ease-in-out;
  z-index: 99;
  border-radius: 12px;
  color: white;
  /* background: #000000; */
  padding: 20px;
  padding-left: 20px;
  text-align-last: right;
  position: fixed;
  top: 68px;
  width: 100%;
  background-color: black;
  border-radius: 12px;
  border-bottom: 1px solid #111010;
  text-transform: lowercase;
  .mobile-menu-item {
    font-size: 22px;
    font-family: "Spline Sans Mono", "Times New Roman", Times, serif;
    list-style: oriya;
    color: #cbc9c8;
    /* background: #000000; */
    padding: 13px 16px;
    border-bottom: 1px solid #444040;
  }
  .mobile-menu-item:hover {
    border-bottom: 5px black solid;
    cursor: pointer;
  }
`;
const Spacer = styled.div`
  height: 90px;
`;
const MobileLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;
const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  height: 80px;
  z-index: 100;
  flex-direction: row-reverse;
  border-bottom: solid 1px #2325235c;
  padding: 0px 15px;
  position: fixed;
  width: 100%;
  background-color: black;
  /* background-image: url(/images/my-svg/header-stars.svg); */
  background-position: center;
  background-position: bottom center;
  background-size: cover;
  border-bottom: 1px solid #2b2929;

  .mobile-header-left {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .mobile-name {
    font-size: 23px;
    color: white;
    position: relative;
    top: 1px;
    left: -4px;
    background: linear-gradient(to right, rgb(222 222 222), rgb(86 112 211));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Spline Sans Mono", sans-serif;
  }
  .burger-line {
    width: 27px;
    height: 2px;
    background-color: aliceblue;
  }
  .burger-line-clicked {
    width: 27px;
    height: 2px;
    background-color: #ec9bff;
  }
  .mobile-header-right {
    display: flex;
    font-size: 45px;
    align-items: center;
    color: #2c94ea;
    border-radius: 14px;
    /* background: #d1d1d1; */
    text-align: end;
    gap: 5px;

    /* border: #95434333 solid 1px; */
  }
  .right-header-icon {
    background-image: url(/images/my-svg/icon.png);
    height: 30px;
    width: 30px;
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
