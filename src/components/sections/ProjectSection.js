import React from "react";
import styled from "styled-components";
import ProjectCard from "../buttons/ProjectCard";
function ProjectSection() {
  return (
    <Wrapper>
      <Projects>
        <ProjectCard
          imageSrc="https://i.pinimg.com/736x/e5/9c/82/e59c829455bd9cdc12930cb72c7253f3.jpg"
          title="Fusion App"
          desc="I developed a user-friendly trading app that empowers users to trade stocks and Bitcoin seamlessly. Our platform provides real-time market data, intuitive trading tools, and robust security features, ensuring a secure and efficient trading experience. Join us to explore the world of financial markets and cryptocurrency with confidence."
        />
        <ProjectCard
          imageSrc="https://wallpaperaccess.com/full/3513758.jpg"
          title="Exam Force"
          desc="I created an interactive website that bridges the gap between students and teachers. Students can effortlessly track their homework assignments, take quizzes, and access their schedules and calendars, fostering a dynamic and organized learning environment for everyone involved."
        />
        <ProjectCard
          imageSrc="https://mcdn.wallpapersafari.com/medium/26/35/LImlSN.png"
          title="Landing Zone"
          desc="I designed a sleek landing page using vanilla JavaScript and HTML. This minimalist yet engaging page provides a seamless user experience, showcasing essential information with speed and simplicity. Welcome to a web experience where less is more."
        />
      </Projects>
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
`;

const Projects = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: space-evenly;
`;
// % gatsby develop
