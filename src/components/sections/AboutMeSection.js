import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import { H1, MediumText, SmallText } from "../styles/TextStyles";
import GetStartedButton from "../buttons/GetStartedButton";
import "../styles/Font.css";
import BookCard from "../buttons/BookCard";
import BookWorkCard from "../buttons/BookWorkCard";
import TimeLine from "./TimeLine";
import MagazineArtice from "./MagazineArtice";
import CareerSection from "./CareerSection";
import EducationSection from "./EducationSection";
import ContactMeSection from "./ContactMeSection";
import LocationSection from "./LocationSection";
import CertificationSection from "./CertificationSection";
import { useState } from "react";
import ParallaxSection from "./ParallaxSection";
import CourseIde from "./CourseIde";
import AboutMeIde from "./AboutMeIde";
import FifthSection from "./FifthSection";
function AboutMeSection() {
  const [activeTab, setActiveTab] = useState("AboutMe");
  const [activeCourse, setCourseTab] = useState("AboutMe");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <Wrapper>
      <Wave />
      {/* <WaveBackground /> */}

      <div className="left-and-right-box">
        <div className="left-box">
          <BoxWrapper>
            <div className="left">
              <div className="first-section">
                <ContentWrapper>
                  <TextWrapper>
                    <Title>
                      Welcome
                      <br /> to my <span>World</span>
                    </Title>
                    <Description>
                      What everyone said was true. You cannot learn how to code
                      by reading, listening or watching someone else do it. You
                      have to get your hands dirty! I am a software developer
                      building interfaces and accessible applications. Welcome
                      to my personal slice of the internet.I'm glad you're here!
                    </Description>

                    <div className="second-section">
                      <div
                        className="image-and-text"
                        onClick={() => handleTabClick("AboutMe")}
                      >
                        <div className="image"></div>

                        <div
                          className={`image-text ${
                            activeTab === "AboutMe" ? "image-text-active" : ""
                          }`}
                        >
                          Zablon <br />
                          Charles
                        </div>
                      </div>

                      <div
                        className="image-and-text"
                        onClick={() => handleTabClick("Education")}
                      >
                        <div className="image-2"></div>
                        <div
                          className={`image-text ${
                            activeTab === "Education" ? "image-text-active" : ""
                          }`}
                        >
                          Education <br />
                          Level
                        </div>
                      </div>
                      <div
                        className="image-and-text"
                        onClick={() => handleTabClick("Experience")}
                      >
                        <div className="image-3"></div>
                        <div
                          className={`image-text ${
                            activeTab === "Experience"
                              ? "image-text-active"
                              : ""
                          }`}
                        >
                          Professional <br />
                          Experience
                        </div>
                      </div>

                      {/* certs */}
                      <div
                        className="image-and-text"
                        onClick={() => handleTabClick("Certifications")}
                      >
                        <div className="image-4"></div>
                        <div
                          className={`image-text ${
                            activeTab === "Certifications"
                              ? "image-text-active"
                              : ""
                          }`}
                        >
                          Certifications <br />
                          Etc
                        </div>
                      </div>
                    </div>
                  </TextWrapper>
                </ContentWrapper>
              </div>

              {/* Description starts here */}
              <div className="third-section">
                {/* Experience level */}
                <div
                  className={`tab-content-item ${
                    activeTab === "Experience" ? "fade-in" : "fade-out"
                  }`}
                >
                  <CareerSection />
                </div>
                {/* Education level */}
                <div
                  className={`tab-content-item ${
                    activeTab === "Education" ? "fade-in" : "fade-out"
                  }`}
                >
                  <EducationSection />
                </div>
                {/* Education level */}
                <div
                  className={`tab-content-item ${
                    activeTab === "Contact" ? "fade-in" : "fade-out"
                  }`}
                >
                  <ContactMeSection />
                </div>

                {/* Certs*/}
                <div
                  className={`tab-content-item ${
                    activeTab === "Certifications" ? "fade-in" : "fade-out"
                  }`}
                >
                  <CertificationSection />
                </div>
              </div>
            </div>
          </BoxWrapper>
        </div>

        <div className="right-box">
          <FloatingTextRight>
            <div className="right-text-and-line">
              <div className="right-btn" onClick={() => handleTabClick("Data")}>
                Data Structures
              </div>
              <div
                className={
                  activeCourse === "Data" ? "right-line" : "right-line-inactive"
                }
              ></div>
            </div>

            <div className="right-text-and-line">
              <div
                className="right-btn"
                onClick={() => handleTabClick("React")}
              >
                React
              </div>
              <div
                className={
                  activeCourse === "React"
                    ? "right-line"
                    : "right-line-inactive"
                }
              ></div>
            </div>

            <div className="right-text-and-line">
              <div className="right-btn" onClick={() => handleTabClick("Java")}>
                Java
              </div>
              <div
                className={`right-line-inactive ${
                  activeCourse == "Java" ? "right-line" : ""
                }`}
              ></div>
            </div>
          </FloatingTextRight>
          <FloatingDescRight>
            What everyone said was true. You cannot learn how to code by
            reading, listening or watching someone else do it. You have to get
            your hands dirty! I am a software developer building interfaces and
            accessible applications. Welcome to my personal slice of the
            internet.I'm glad you're here!
          </FloatingDescRight>
        </div>
      </div>
      <div className="about">Hey</div>
      <div
        className={`tab-content-item ${
          activeTab === "AboutMe" ? "fade-in" : "fade-out"
        }`}
      >
        <AboutMeIde />
        {/* the location text */}
        {/* {activeTab === "AboutMe" && (
          <LocationSection location="New York | Minnesota" />
        )}
        {activeTab === "Education" && <LocationSection location="New Jersey" />} */}

    
      </div>
    </Wrapper>
  );
}

export default AboutMeSection;

const Wrapper = styled.div`
  height: 93vh;
  overflow: scroll;
  background-color: #000;
  .left-and-right-box {
    background-image: url("/images/my-svg/lines.svg");
    background-color: #000;
    background-repeat: repeat-x;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50%;
  }
  .left-box {
    flex: 1;
  }
  .right-box {
    flex: 0.5;
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding-top: 150px;
  }
`;
const BoxWrapper = styled.div`
  position: relative;

  background-position: top;
  padding: 20px;
  transform: translateY(50px);
  transition: all 1s linear;

  .left-and-right-sections {
    display: flex;
    gap: 40px;
  }
  .left {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .first-section {
  }
  .hero-image {
    background-image: url(https://www.invaluable.com/blog/wp-content/uploads/sites/77/2018/12/shutterstock_753294010.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 17px;
    width: 100%;
    height: 400px;
    padding: 20px;
    position: relative;
  }
  .hero-image .hero-title {
    color: white;
    font-size: 62px;
    width: 400px;
    font-family: "Pixel12x10", sans-serif;
  }
  .hero-title-desc {
    color: white;
    right: 0;
    bottom: 20px;
    position: absolute;
    padding: 10px;
    text-align: end;
    font-family: "Spline Sans Mono", sans-serif;
    width: 70%;
    mix-blend-mode: exclusion;
  }
  .second-section {
    display: flex;
    gap: 20px;
  }
  .image-and-text {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .image {
    background-image: url(https://cdn.dribbble.com/users/83671/screenshots/17520589/media/af00fe391749fe034962b157284f0114.png?resize=1600x1200&vertical=center);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: black;
    border: 1px #ffffff42 solid;
    height: 50px;
    width: 50px;
    border-radius: 8px;
    cursor: pointer;
    transition: linear 0.2s;
  }
  .image-2 {
    background-image: url(https://cdn.dribbble.com/users/330915/screenshots/6462973/1_b_test_dribbble.jpg?resize=800x600&vertical=center);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: black;

    height: 50px;
    width: 50px;
    border-radius: 8px;
    cursor: pointer;
    transition: linear 0.2s;
  }
  .image-3 {
    background-image: url(https://cdn.dribbble.com/userupload/7732722/file/original-8dc2c3ef9ceeddfd5907a8eb109df447.png?resize=2400x1350);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center right;
    background-color: black;

    height: 50px;
    width: 50px;
    border-radius: 8px;
    cursor: pointer;
    transition: linear 0.2s;
  }
  .image-4 {
    background-image: url(https://cdn.dribbble.com/userupload/4484296/file/original-bcc54e75adef0ae267563b6ce074692a.png?resize=1504x1128);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: black;

    height: 50px;
    width: 50px;
    border-radius: 8px;
    cursor: pointer;
    transition: linear 0.2s;
  }
  .image,
  .image-2,
  .image-3,
  .image-4:hover {
    transition: linear 0.2s;
    transform: scale(1.02);
  }
  .image-text {
    font-size: 12px;
    color: white;
    align-self: center;
    font-family: "Spline Sans Mono", sans-serif;
  }
  .image-text-active {
    font-size: 12px;
    color: #ca4741;
    align-self: center;
    font-family: "Spline Sans Mono", sans-serif;
  }
  .third-section {
  }

  .my-projects-section {
    display: flex;
    flex-wrap: wrap; /* Adjust the height of each row as needed */
    width: -webkit-fill-available;
    padding-right: 10px;
    gap: 15px; /* Adjust the gap between rows if desired */
  }
  .tab-content-item {
    transition: all 1s linear; /* Adjust the transition timing function as needed */
  }

  .fade-in {
    transform: translateY(0);
    transition: all 1s linear;
  }
`;
const FloatingDescRight = styled(MediumText)`
  color: #fff;
  font-size: 12px;
  font-family: "Spline Sans Mono", sans-serif;
  padding: 10px 30px;
  justify-content: center;
  display: flex;
  justify-content: center;
  text-align: end;
`;
const FloatingTextRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  gap: 20px;

  /* background-color: red; */
  .right-text-and-line {
    display: flex;
    gap: 5px;
    align-items: center;
    font-family: "Spline Sans Mono", sans-serif;
  }
  .right-btn {
    color: white;
    background-color: #0b0b0b;
    padding: 10px 20px;
    border-radius: 10px;
    border: white 1px dotted;
    cursor: pointer;
  }
  .right-btn:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-5px);
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .right-line {
    width: 50px;
    height: 2px;
    background-color: #ca4741;
    transition: all 1s ease;
  }
  .right-line-active {
    width: 50px; /* Expand to 50px width when active */
    height: 2px;
    background-color: #ca4741;
  }
  .right-line-inactive {
    width: 30px;
    height: 2px;
    opacity: 0.1px;
    transform: scaleX(1.5);
  }
`;

const Wave = styled.div`
  position: absolute;
  height: 800px;
  background-image: url("/images/my-svg/falling-rocks.svg");
  background-repeat: repeat;
  background-size: contain;
  width: 100%;

  z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
`;
const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 10px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`;

const TextWrapper = styled.div`
  width: 560px;
  display: grid;
  gap: 30px;
  padding-top: 80px;
`;

const Title = styled.div`
  font-size: 68px;
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #d9dff4 0%, #280aff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  /* font-family: "Cisnero", sans-serif; */
  /* font-family: "Spline Sans Mono", sans-serif; */
  font-family: "Pixel12x10", sans-serif;
  text-transform: uppercase;

  span {
    background: linear-gradient(180deg, #5451b7 0%, #00fa6b 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`;

const Description = styled(MediumText)`
  color: #fff;
  font-family: "Spline Sans Mono", sans-serif;
`;

const Access = styled(SmallText)`
  color: #fff;
  font-family: "Spline Sans Mono", sans-serif;
`;
