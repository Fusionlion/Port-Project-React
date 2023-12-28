import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Image = styled.div`
  background-image: url("https://qph.cf2.quoracdn.net/main-qimg-0c2f4f674f12955ae42d6196ed556e57-lq");
  background-color: #ccc;
  background-size: cover;
  width: 100%;
  height: 360px;
  border-radius: 12px;
  background-color: #ccc; /* Placeholder color, replace with your image */
`;
const LastImage = styled.div`
  background-image: url("https://qph.cf2.quoracdn.net/main-qimg-0c2f4f674f12955ae42d6196ed556e57-lq");
  background-color: #ccc;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 95px;
  background-color: #ccc;
  background-position: bottom;
  margin-bottom: 17px; /* Placeholder color, replace with your image */
`;

const Title = styled.div`
  font-size: 54px;
  font-weight: bold;
  margin: 20px 0;
  font-family: "cisnero";
`;

const ThreeTexts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;

  > :nth-child(1) {
    border: aliceblue 1px solid;
    padding: 5px 10px;
    border-radius: 39px;
  }

  > :nth-child(2) {
    padding: 5px 10px;
  }

  > :nth-child(3) {
    border: aliceblue 1px solid;
    padding: 5px 10px;
    border-radius: 39px;
  }
`;

const BigStyledText = styled.div`
  font-family: "cisnero";
  color: crimson;
  text-transform: lowercase;
  font-size: 24px;
  margin: 20px 0;
`;

const NormalText = styled.div`
  margin-bottom: 10px;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: justify;
  line-height: 1.5;
`;

const StyledButton = styled.div`
  padding: 10px 60px;
  text-align: center;
  font-size: 17px;
  background-color: black;

  border-radius: 26px;
  color: #dbc9c9;
  -webkit-transition: all 0.7s, color 0.7s;
  -webkit-transition: all 0.7s, color 0.7s;
  transition: all 0.7s, color 0.7s;
  cursor: pointer;
  border: #ffffff1f solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Spline Sans Mono", sans-serif;
  margin: 0px 69px;
`;

const CoursesComponent = () => {
  return (
    <Container>
      <Image />
      <Title>This is a Bold Courses</Title>
      <ThreeTexts>
        <div>Left Text</div>
        <div>Middle Text</div>
        <div>Right Text</div>
      </ThreeTexts>
      <BigStyledText>Yay! We have courses</BigStyledText>
      <NormalText>
        {" "}
        I have crafted comprehensive courses that seamlessly integrate Java,
        Salesforce, and Frontend Development to provide a holistic learning
        experience. These courses are designed to equip learners with a
        versatile skill set, covering the robust Java programming language for
        backend development, Salesforce for powerful CRM solutions, and frontend
        technologies for creating engaging user interfaces. Whether you're
        aspiring to be a full-stack developer or aiming to specialize in
        Salesforce integration, these courses offer a well-rounded curriculum,
        hands-on projects, and practical insights, ensuring that participants
        gain proficiency in each domain and the ability to architect end-to-end
        solutions in the dynamic realm of software development.
      </NormalText>
      <LastImage />
      <StyledButton>courses.</StyledButton>
    </Container>
  );
};

export default CoursesComponent;
