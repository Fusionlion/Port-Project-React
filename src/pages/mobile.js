import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import FooterSection from "../components/sections/FooterSection";
import MobileProjects from "../components/mobileSections/MobileProjects";

export default function Mobile() {
  const [showMenu, setShowMenu] = useState(false);
  const [switchPage, setSwitchPage] = useState("home");

  const handleHomeButton = (page) => {
    setSwitchPage("home");
    console.log(switchPage);
  };
  const handleMenuButton = (page) => {
    if (page != "openMenu") {
      setSwitchPage(page);
      console.log(switchPage);
    }

    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <>
      {/* header only show */}
      <MobileHeader>
        <div
          className="mobile-header-left-clicked"
          onClick={() => handleMenuButton("openMenu")}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
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
     
         <MobileProjects />
     
    </>
  );
}


const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
 
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
    font-size: 17px;
    line-height: 130%;
    margin: 20px;
    max-width: 90%;
    text-align: center;
    align-self: center;
    font-size: 23px;
    font-family: "Spline Sans Mono", sans-serif;
  }

  .mobile-welcome-button {
    height: 200px;
    width: 300px;
    color: white;
    background: #0f0687;
    font-size: 32px;
    text-align: center;
    padding: 21px 20px;
    border-radius: 13px;
    place-self: center;
    z-index: 1;
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
  background: #0d18af;
  padding: 20px;
  border-radius: 18px;
  padding-left: 20px;
  text-align-last: right;
  margin-top: 20px;
  .mobile-menu-item {
    font-size: 52px;
    font-family: "Spline Sans Mono", "Times New Roman", Times, serif;
    list-style: oriya;
    color: coral;
    background: black;
    padding: 28px 26px;
    border-radius: 18px;
  }
  .mobile-menu-item:hover {
    border-bottom: 5px black solid;
    cursor: pointer;
  }
`;


const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  height: 170px;
  z-index: 1;
  flex-direction: row-reverse;
  border-bottom: solid 1px #498a4a;
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
  .mobile-name {
    font-size: 62px;
    font-family: "Spline Sans Mono", sans-serif;
    color: white;
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
    width: 84px;
    height: 4px;
    background-color: #fffcfc;
  }
  .mobile-header-right {
    display: flex;
    font-size: 45px;
    gap: 10px;
    align-items: center;
    color: #2c94ea;
    border-radius: 14px;
    /* background: #d1d1d1; */
    padding: 10px 0px;
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

