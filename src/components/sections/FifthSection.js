import React from "react";
import styled from "styled-components";
import FifthSectionBg from "../backgrounds/FifthSectionBg";
import { themes } from "../styles/ColorStyles";
import { Caption2, H2, MediumText } from "../styles/TextStyles";
import CertificateButton from "../buttons/CertificateButton";

function FifthSection() {
  return (
    <Wrapper>
      {/* <FifthSectionBg /> */}
      <Background />
      <ContentWrapper>
        <TextWrapper>
          <Intro>WHO'S BEHIND</Intro>
          <Title>Meet the Developer</Title>
          <Description>
            It's common for individuals in the technology field, such as
            software developers, to be eager to obtain certifications as a way
            to validate their skills and enhance their professional credentials.
          </Description>
        </TextWrapper>
      </ContentWrapper>
      <Certificates>
        <CertificateButton
          filter="color-burn"
          title="JAVA DEVELOPER"
          desc="The Full Stack Java Developer Certificate from Emonics empowered me to master the art of creating dynamic web applications. This comprehensive program equipped me with the skills to develop both the front-end and back-end of web solutions using Java technologies. I became a versatile developer with expertise in Java, Spring Boot, and more."
          imageSrc="https://cdn-icons-png.flaticon.com/512/2851/2851377.png"
        />
        <CertificateButton
          filter="overlay"
          title="Salesfroce Administrator"
          desc="Earning a Salesforce Administrator certificate demonstrates proficiency in optimizing Salesforce solutions, a pivotal aspect for Salesforce as a company. This certification reflects the capability to maximize Salesforce's potential, streamline processes, and drive customer success, aligning with Salesforce's mission of delivering cutting-edge CRM and cloud services."
          imageSrc="https://cdn-icons-png.flaticon.com/512/2851/2851377.png"
        />
        <CertificateButton
          filter="hue"
          title="Salesforce Developer"
          desc="Achieving a Salesforce Developer certification showcases the ability to innovate and create custom solutions within Salesforce, aligning with Salesforce's mission to provide a dynamic and customizable CRM platform. This certification empowers Salesforce, the company, with experts who can build tailored applications, streamline workflows, and integrate seamlessly, contributing to Salesforce's commitment to customer success through cutting-edge technology."
          imageSrc="https://cdn-icons-png.flaticon.com/512/2851/2851377.png"
        />
      </Certificates>
    </Wrapper>
  );
}

export default FifthSection;
const Background = styled.div`

  background-image: url("/images/my-svg/undersea.svg");
  background-repeat: repeat-x;
  background-size: cover;
  background-position: bottom;
  height: 800px;
  width: 100%;
  position: absolute;
  mix-blend-mode: color-dodge;
  z-index: -1;
`;
const Wrapper = styled.div`
  overflow: visible;
  font-family: "Spline Sans Mono", sans-serif;
  /* background-color: #f2f6ff; */
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 100px 30px;
  display: grid;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`;

const TextWrapper = styled.div`
  max-width: 478px;
  align-items: center;
  display: grid;
  text-align: center;
  gap: 30px;
`;

const Title = styled(H2)`
  color: ${themes.dark.text1};

  @media (max-width: 450px) {
    font-size: 48px;
  }
`;

const Description = styled(MediumText)`
  color: gray;
`;
const Intro = styled(Caption2)`
  color: gray;
`;

const Certificates = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 100px 30px;
  display: flex;
  justify-content:center ;
  flex-direction: row;
  align-items: center;
  gap: 40px;
`;
