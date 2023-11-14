import React from "react";
import styled from "styled-components";
import CardTextBottom from "../buttons/CardTextBottom";
import { useState } from "react";
import BookCard from "../buttons/BookCard";
import BookWorkCard from "../buttons/BookWorkCard";
import TimeLine from "./TimeLine";
import MagazineArtice from "./MagazineArtice";
import CareerSection from "./CareerSection";
import EducationSection from "./EducationSection";
import ContactMeSection from "./ContactMeSection";
import LocationSection from "./LocationSection";
import CertificationSection from "./CertificationSection";

export default function AboutMeSection() {
  const [activeTab, setActiveTab] = useState("AboutMe");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <Wrapper>
      <div className="left-and-right-sections">
        <div className="left">
          <div className="first-section">
            <div className="hero-image">
              <div className="hero-title">Poets of the 19th century</div>
              <hr></hr>
              <div className="hero-title-desc">
                This section provides insights into who I am. Explore details
                about my background, achievements in various projects,
                professional experience, and discover what activities bring me
                joy during my leisure time.
              </div>
            </div>
          </div>
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
                  activeTab === "Experience" ? "image-text-active" : ""
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
                  activeTab === "Certifications" ? "image-text-active" : ""
                }`}
              >
                Certifications <br />
                Etc
              </div>
            </div>
          </div>
          {/* Description starts here */}
          <div className="third-section">
            <div
              className={`tab-content-item ${
                activeTab === "AboutMe" ? "fade-in" : "fade-out"
              }`}
            >
              <MagazineArtice />
            </div>

            {activeTab === "AboutMe" && (
              <LocationSection location="New York | Minnesota" />
            )}
            {activeTab === "Education" && (
              <LocationSection location="New Jersey" />
            )}
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

        <div className="right">
          <div className="right-first-section">
            <div className="right-first-title">Popular works</div>
            <div className="right-first-cards">
              {/* Cards start here of the stuff ive written */}
              <BookCard
                title="Intro to Java"
                imageSrc="https://remezcla.com/wp-content/uploads/2022/10/GettyImages-1430670718-1424x1068.jpg"
                desc="312 pages 5 reviews."
                tapped={() => handleTabClick("Java")}
              />
              <BookCard
                title="Intro to Java"
                imageSrc="https://remezcla.com/wp-content/uploads/2022/10/GettyImages-1430670718-1424x1068.jpg"
                desc="312 pages 5 reviews."
                tapped={() => handleTabClick("Java")}
              />
              <BookCard
                title="Intro to Java"
                imageSrc="https://remezcla.com/wp-content/uploads/2022/10/GettyImages-1430670718-1424x1068.jpg"
                desc="312 pages 5 reviews."
                tapped={() => handleTabClick("Java")}
              />
            </div>
          </div>
          <div className="right-first-title">Popular works</div>
          <div className="my-projects-section">
            {/* Cards start here of the stuff ive written */}
            <BookWorkCard
              title="Intro to Java"
              imageSrc="https://remezcla.com/wp-content/uploads/2022/10/GettyImages-1430670718-1424x1068.jpg"
              desc="312 pages 5 reviews."
              tapped={() => handleTabClick("Java")}
            />
            <BookWorkCard
              title="Intro to Java"
              imageSrc="https://remezcla.com/wp-content/uploads/2022/10/GettyImages-1430670718-1424x1068.jpg"
              desc="312 pages 5 reviews."
              tapped={() => handleTabClick("Java")}
            />
            <BookWorkCard
              title="Intro to Java"
              imageSrc="https://remezcla.com/wp-content/uploads/2022/10/GettyImages-1430670718-1424x1068.jpg"
              desc="312 pages 5 reviews."
              tapped={() => handleTabClick("Java")}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  background-image: url("/images/my-svg/falling-rocks.svg");
  background-color: #000;
  background-repeat: repeat-x;
  background-size: cover;
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
    width: 654px;
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
  .right {
    display: flex;
    gap: 50px;
    flex-direction: column;
    overflow: scroll;
    height: 100vh;
    padding-bottom: 200px;
  }
  .right-first-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .right-first-title {
    font-size: 32px;
    color: white;
    font-family: "Pixel12x10", sans-serif;
  }
  .right-first-cards {
    display: flex;
    gap: 20px;
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

// const Background = styled.div`
//   width: 100vw;
//   height: 100vh;
//   /* background-color: green; */
// `;
