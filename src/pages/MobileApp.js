import React, { useState } from "react";
import styled from "styled-components";
import MobileProjects from "../components/mobileSections/MobileProjects";
import MobileProjectDetail from "../components/mobileSections/MobileProjectDetail";
import "../components/styles/Font.css";
import MobileHome from "../components/mobileSections/MobileHome";
import MobileCourses from "../components/mobileSections/MobileCourses";

export default function MobileApp() {
  const [switchPage, setSwitchPage] = useState("home");
  const [showMenu, setShowMenu] = useState(false);
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
  };
  return (
    <MobileLayout>
      {/* header only show */}
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
          <li className="mobile-menu-item" onClick={handleMenuButton}>
            ABOUT
          </li>
          <li className="mobile-menu-item" onClick={handleMenuButton}>
            PRIVACY POLICY
          </li>
        </MobileMenu>
      )}
      {/* <MobileProjects /> */}
      {switchPage == "home" && <MobileHome page={handleMenuButton} />}
      {switchPage == "projects" && <MobileProjects />}
      {switchPage == "courses" && <MobileCourses />}
    </MobileLayout>
  );
}
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
  gap: 15px;
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
  backdrop-filter: blur(3px);
  border-radius: 12px;
  border-bottom: 1px solid #111010;
  .mobile-menu-item {
    font-size: 22px;
    font-family: "Spline Sans Mono", "Times New Roman", Times, serif;
    list-style: oriya;
    color: #cbc9c8;
    background: #000000;
    padding: 13px 16px;
    border-radius: 11px;
    border: 1px solid #322c20;
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
  border-bottom: solid 1px #232523;
  padding: 0px 15px;
  position: fixed;
  width: 100%;
  backdrop-filter: blur(7px);
  background-color: black;
  background-image: url(/images/my-svg/header-stars.svg);
  background-position: center;
  .mobile-header-left {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .mobile-name {
    font-size: 26px;
    font-family: "Spline Sans Mono", sans-serif;
    color: white;
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
