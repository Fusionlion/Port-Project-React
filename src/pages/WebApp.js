import React from "react";
import SEO from "../components/layout/seo";
import { Link } from "gatsby";
import styled from "styled-components";
import "../components/styles/Font.css";
import { useState } from "react";
import ProjectBios from "../components/sections/ProjectBios";
import Course from "../components/sections/Course";
import AboutSection from "../components/sections/AboutMeSection";
import PortfolioHero from "../components/sections/PortfolioHero";
import MenuOptions from "../components/buttons/MenuOptions";

function WebApp() {
  const [activeTab, setActiveTab] = useState("Portfolio");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const [isToggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!isToggled);
  };

  return (
    <AboutMe>
      <SEO title="Fusion | Welcome to my portfolio" />
      <Bubbles />
      <Lines />

      <Backdrop>
        <div className="header">
          <div className="left-section">
            <div className="logo"></div>
            <div className="title" onClick={() => handleTabClick("Portfolio")}>
              Portfolio
            </div>
          </div>
          <div className="middle-section">
            {/* Tab bar for home starts here */}
            <div
              className={`tab ${activeTab === "Portfolio" ? "active" : ""}`}
              onClick={() => handleTabClick("Portfolio")}
            >
              <div
                className={`tab ${
                  activeTab === "Portfolio"
                    ? "middle-btn"
                    : "middle-btn-inactive"
                }`}
              >
                {" "}
                Home
              </div>
            </div>
            {/* Tab bar for home ends here */}
            <div
              className={`tab ${activeTab === "Projects" ? "active" : ""}`}
              onClick={() => handleTabClick("Projects")}
            >
              <div
                className={`tab ${
                  activeTab === "Projects"
                    ? "middle-btn"
                    : "middle-btn-inactive"
                }`}
              >
                {" "}
                Projects
              </div>
            </div>

            {/* Add more tabs here as needed */}
            <div
              className={`tab ${activeTab === "Course" ? "active" : ""}`}
              onClick={() => handleTabClick("Course")}
            >
              <div
                className={`tab ${
                  activeTab === "Course" ? "middle-btn" : "middle-btn-inactive"
                }`}
              >
                {" "}
                Course
              </div>
            </div>

            {/* the about me section */}
            <div
              className={`tab ${activeTab === "About" ? "active" : ""}`}
              onClick={() => handleTabClick("About")}
            >
              <div
                className={`tab ${
                  activeTab === "About" ? "middle-btn" : "middle-btn-inactive"
                }`}
              >
                {" "}
                About
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="right-section-icon"></div>
            <div
              className={`right-section-drop-down ${
                isToggled ? "right-section-drop-down-active" : ""
              }`}
              onClick={handleClick}
            ></div>
          </div>
        </div>

        {/* Home content */}
        <div
          className={`tab-content-item ${
            activeTab === "Home" ? "fade-in" : "fade-out"
          }`}
        >
          <div className="character"></div>
          <div className="body-behind">
            <div className="left-behind">
              <div className="pt-and-title">
                <SmallImage src="https://pngimg.com/d/robot_PNG40.png"></SmallImage>
                <div className="pt-title">
                  Software <br />
                  Engineer
                </div>
              </div>

              <SmallImage src="https://cdn.dribbble.com/userupload/4090463/file/original-a9e1688848511656a0ba71886a53665d.png?resize=1504x1128"></SmallImage>
              <SmallImage src="https://cdn.dribbble.com/userupload/4087783/file/original-dbebf5699aad9099c9ce35e80a99b165.png?resize=1504x1128"></SmallImage>
            </div>
            <div className="right-social-behind">
              <div className="social-text">
                Read the <br />
                biagraphy
              </div>
              <div className="social-app-1"></div>
              <div className="social-app-2"></div>
              <div className="social-app-3"></div>
              <div className="social-app-4"></div>
            </div>
          </div>
          <ForeGround>
            <div className="body-front">
              {/* The name and the years */}
              <div className="front-top">
                <div className="front-left">
                  <div className="front-left-name">
                    Zablon <br /> Charles
                  </div>
                  <div className="front-left-years">
                    <div className="front-start-year">
                      <div className="front-left-born">Born</div>
                      <div className="front-left-year">30 NOV 1830</div>
                      <div className="front-left-born">
                        FLorida, Missouri, U.S
                      </div>
                    </div>
                    <div className="spacer"> </div>
                    <div className="front-start-year">
                      <div className="front-left-born">Born</div>
                      <div className="front-left-year">30 NOV 1830</div>
                      <div className="front-left-born">
                        FLorida, Missouri, U.S
                      </div>
                    </div>
                  </div>
                </div>
                {/* The cards are here */}
              </div>
              {/* The timeline  */}
              <div className="bottom">
                <div className="split-and-desc">
                  <div class="split-year">2010 November</div>
                  <div className="split"></div>
                  <div className="split-desc">U.S.P.S</div>
                </div>
                <div className="split-and-desc">
                  <div class="split-year">2112 November</div>
                  <div className="split"></div>
                  <div className="split-desc">Revature</div>
                </div>
                <div className="split-and-desc">
                  <div class="split-year">2012 November</div>
                  <div className="split"></div>
                  <div className="split-desc">Emonic</div>
                </div>
              </div>
            </div>
          </ForeGround>
        </div>
        {/* Projects starts */}
        <div
          className={`tab-content-item ${
            activeTab === "Projects" ? "fade-in" : "fade-out"
          }`}
        >
          <ProjectBios />
        </div>
        {/* content ends */}

        {/* content starts */}
        <div
          className={`tab-content-item ${
            activeTab === "Course" ? "fade-in" : "fade-out"
          }`}
        >
          <Course />
        </div>
        {/* content ends */}

        {/* content starts */}
        <div
          className={`tab-content-item ${
            activeTab === "About" ? "fade-in" : "fade-out"
          }`}
        >
          <AboutSection />
        </div>
        {/* content ends */}
        {/* content starts */}
        <div
          className={`tab-content-item ${
            activeTab === "Portfolio" ? "fade-in" : "fade-out"
          }`}
        >
          <PortfolioHero tapped={() => handleTabClick("About")} />
        </div>
        {/* content ends */}
      </Backdrop>

      {/* Menu item shown here */}
      <div className={`${isToggled ? "menu-appear" : "disappear"}`}>
        <MenuOptions setActiveTab={handleTabClick} />
      </div>

      {/* if we are on mobile */}
    </AboutMe>
  );
}

export default WebApp;

const Lines = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 20px;
  background-image: url(/images/my-svg/lines.svg);
  background-size: contain;
  background-repeat: repeat-x;
  background-position: top right;
  position: absolute;
  /* hide on mobile */
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Bubbles = styled.div`
  height: 100vh;
  width: 100vw;
  bottom: 10px;
  background-image: url(/images/my-svg/undersea.svg);
  background-size: contain;
  background-repeat: repeat-x;
  background-position: bottom;
  position: absolute;
  filter: hue-rotate(7deg);
  /* hide on mobile */
  @media (max-width: 1000px) {
    display: none;
  }
`;
const SmallImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-color: black;
  height: 70px;
  width: 70px;
  border-radius: 60px;
  background-image: url(${(props) => props.src});
  cursor: pointer;
  transition: linear 0.2s;
  z-index: 999;
  &:hover {
    transition: linear 0.2s;
    transform: scale(1.02);
  }
`;
const AboutMe = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(to top, #000000, #000, #000000);
  position: relative;
  /* @media screen and (max-width: 1000px) {
    display: none;
  }
  @media screen and (min-width: 1000px) {
  } */
  .title {
    color: white;
    font-family: "Spline Sans Mono", sans-serif;
    cursor: pointer;
    /* @media only screen and (min-width: 430px) {
      font-size: 52px;
    } */
  }
  .menu-appear {
    top: 106px;
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }
  .disappear {
    display: none;
    transition: opacity 0.3s ease-in-out;
  }
`;
const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 20px;

  background-image: url(/images/my-svg/lines.svg);
  background-image: url(/images/my-svg/bubbles.svg);
  background-size: contain;
  background-repeat: repeat-x;
  background-position: top right;
  overflow: hidden;
  position: relative;

  @media (max-width: 1000px) {
    overflow: scroll;
    display: none;
  }

  .character {
    background-image: url(/images/my-svg/exploded_mockup.png);
    top: -125px;
    bottom: 230px;
    left: -22px;
    right: 0;
    border-radius: 12px;
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
  .is-flex {
    display: flex;
  }
  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    color: white;
    font-size: 25px;
    border-bottom: 1px solid #14141b;
    align-items: baseline;
    background-image: url(/images/my-svg/header-stars.svg);
  }
  .logo {
    height: 35px;
    width: 35px;
    background-image: url(/images/my-svg/favicon.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    filter: invert(1);
    /* @media only screen and (min-width: 430px) {
      height: 70px;
      width: 70px;
    } */
  }
  .middle-section {
    display: flex;
    gap: 10px;
    z-index: 999;
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
  .left-section {
    display: flex;
    gap: 10px;
    font-size: 25px;
    align-items: center;
  }
  .right-section {
    display: flex;
    gap: 20px;
  }
  .right-section-icon {
    height: 34px;
    width: 34px;
    border-radius: 60px;
    background-image: url(https://ei7cr2pn3uw.exactdn.com/wp-content/uploads/2019/04/Mark-Twain-Portrait.jpg?strip=all&lossy=1&ssl=1);
    background-size: cover;
    background-position: center;
    cursor: pointer;
    /* @media only screen and (min-width: 430px) {
      display: none;
    } */
  }
  .right-section-drop-down {
    height: 30px;
    width: 30px;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.6;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    /* @media only screen and (min-width: 430px) {
      background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png);
      filter: invert(8);
      height: 82px;
      width: 82px;
      place-items: center;
    } */
  }
  .right-section-drop-down-active {
    height: 30px;
    width: 30px;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.6;
    cursor: pointer;
    transform: rotate(180deg);
    transition: transform 0.3s ease-in-out;
    /* @media only screen and (min-width: 430px) {
      background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png);
      filter: invert(8);
      height: 82px;
      width: 82px;
      place-items: center;
    } */
  }
  .middle-btn {
    font-size: 17px;
    background-color: #fffbf6;
    color: #db3939;

    padding-bottom: 33px;
    border-radius: -1px;
    transition: all 0.5s ease-in-out;
  }
  .middle-btn-inactive {
    font-size: 17px;
    color: #bdbdc1;
    padding-bottom: 33px;
    border-radius: -1px;
    transition: all 0.5s ease-in-out;
  }

  .body-behind {
    padding: 80px 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    overflow: hidden;
  }
  .left-behind {
    position: absolute;
    left: 0;
    font-size: 34px;
    gap: 37px;
    display: flex;
    flex-direction: column;
  }
  .left-pt {
    height: 70px;
    width: 70px;
    border-radius: 6px;
    background-image: url(https://source.unsplash.com/random/?future);
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transition: linear 0.2s;
    z-index: 999;
    &:hover {
      transition: linear 0.2s;
      transform: scale(1.02);
    }
  }
  .pt-and-title {
    display: flex;
    gap: 10px;
    align-items: center;
    color: white;
  }
  .pt-title {
    color: white;
    font-family: "Cisnero";
    border-left: 1px solid orange;
    padding: 14px;
  }
  .right-social-behind {
    position: absolute;
    right: 0;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    gap: 11px;
    align-items: center;
  }
  .social-text {
    transform: rotate(270deg);
    margin-bottom: 34px;
    color: white;
  }
  .social-app-1,
  .social-app-2,
  .social-app-3,
  .social-app-4 {
    height: 34px;
    width: 34px;
    border-radius: 60px;
    background-image: url(https://ei7cr2pn3uw.exactdn.com/wp-content/uploads/2019/04/Mark-Twain-Portrait.jpg?strip=all&lossy=1&ssl=1);
    background-size: cover;
    background-position: center center;
  }
  .social-app-1 {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC);
  }
  .social-app-2 {
    background-image: url(https://9to5mac.com/wp-content/uploads/sites/6/2019/09/Twitter.jpg?quality=82&strip=all&w=1600);
  }
  .social-app-3 {
    background-image: url(https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU);
  }
  .social-app-4 {
    background-image: url(https://yt3.googleusercontent.com/ZIPvInnj50dYnGYvkanm_IYcoYaofSY47e_4iah-EoCduSdhxYOC_-TCatm9XR3HAp1HJeomAa0=s900-c-k-c0x00ffffff-no-rj);
  }
  .tab {
    cursor: pointer;
    font-family: "Spline Sans Mono", sans-serif;
    text-transform: uppercase;
    padding: 4px 8px;
    /* background-color: #774a0b; */
    border-radius: 6px;
  }
  .tab-content-item {
    transition: transform 0.3s ease-in-out;
    transition: opacity 0.7s linear;
    transform: translateX(100%);
  }

  .fade-in {
    transform: translateX(0);
  }

  .fade-out {
    transform: translateX(-150%);
    opacity: 0;
    display: none;
  }
`;
const ForeGround = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: end;

  overflow: hidden;

  .body-front {
    display: flex;
    flex-direction: column;
    margin-left: 232px;
    width: 100%;
    margin-bottom: 84px;
  }
  .front-top {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .front-left {
    display: flex;
    gap: 5px;
    flex-direction: column;
    min-width: 649px;
  }
  .front-left-name {
    font-size: 72px;
    text-transform: uppercase;
    font-family: "Cisnero";
    background: -webkit-linear-gradient(rgb(255 255 255), rgb(0 0 0));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    padding-top: 12px;
  }
  .front-left-years {
    display: flex;
  }
  .front-start-year {
    display: flex;
    flex-direction: column;
    gap: 19px;
  }
  .front-left-year {
    font-size: 33px;
    color: white;
    font-family: "Cisnero";
  }
  .front-left-born {
    text-transform: uppercase;
    color: gray;
    margin-top: 7px;
  }
  .spacer {
    width: 47px;
    height: 1px;
    margin: 57px;
    background-color: white;
  }
  .front-right {
    display: flex;
    gap: 20px;
    position: relative;
    height: 450px;
    overflow: scroll;
  }
  .bottom {
    background: #31323a;
    width: 100%;
    height: 1px;
    margin: 40px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .split-and-desc {
    display: flex;
    gap: 10px;
    color: white;
  }
  .split-year {
    align-self: end;
    color: #313139;
    font-size: 12px;
    text-transform: uppercase;
  }
  .split {
    height: 40px;
    width: 1px;
    background-color: #313139;
  }
  .split-desc {
    color: #313139;
    font-size: 12px;
    text-transform: uppercase;
  }
`;
// gatsby develop
