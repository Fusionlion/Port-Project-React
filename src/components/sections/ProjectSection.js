import React from "react";
import styled from "styled-components";
import ProjectCard from "../buttons/ProjectCard";
import { useState } from "react";
import CustomModal from "./Modal";

function ProjectSection() {
    const [modal, setModal] = useState(false);
  const toggleModal = () => {
     
      setModal(!modal);
      
    };
  return (
    <Wrapper>
      <Projects>
        <ProjectCard
          tap={toggleModal}
          imageSrc="https://i.pinimg.com/736x/e5/9c/82/e59c829455bd9cdc12930cb72c7253f3.jpg"
          title="Fusion App"
          desc="I developed a user-friendly trading app that empowers users to trade stocks and Bitcoin seamlessly. Our platform provides real-time market data, intuitive trading tools, and robust security features, ensuring a secure and efficient trading experience. Join us to explore the world of financial markets and cryptocurrency with confidence."
        />
        <ProjectCard
          tap={toggleModal}
          imageSrc="https://wallpaperaccess.com/full/3513758.jpg"
          title="Exam Force"
          desc="I created an interactive website that bridges the gap between students and teachers. Students can effortlessly track their homework assignments, take quizzes, and access their schedules and calendars, fostering a dynamic and organized learning environment for everyone involved."
        />
        <ProjectCard
          tap={toggleModal}
          imageSrc="https://mcdn.wallpapersafari.com/medium/26/35/LImlSN.png"
          title="Landing Zone"
          desc="I designed a sleek landing page using vanilla JavaScript and HTML. This minimalist yet engaging page provides a seamless user experience, showcasing essential information with speed and simplicity. Welcome to a web experience where less is more."
        />
      </Projects>

      {modal && (
        <div onClick={toggleModal} className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>HEllo People</h2>
            <button onClick={toggleModal}>Close</button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip inc Lorem ipsum dolor
              sit amet, consect
            </p>
          </div>
        </div>
      ) }
    </Wrapper>
  );
}

export default ProjectSection;

const Wrapper = styled.div`
  background-image: url("/images/my-svg/sea-animals.svg");
  background-repeat: repeat-x;
  background-size: cover;
  background-position: top left;

  height: 600px;
  width: 100%;
  mix-blend-mode: normal;
  max-width: 1234px;
  margin: 0 auto;
  padding: 100px 30px;

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999; /* Set a high z-index value */
  }
  .overlay {
    background-color: #000000c9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 100vh;
    width: 100vw;
  }
  .modal-content {
    /* backdrop-filter: blur(103px);
     */
    background-color: white;
    color: black;
    padding: 20px;
    height: 90vh;
    width: 90vw;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }
`;

const Projects = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: space-evenly;
`;
// % gatsby develop
