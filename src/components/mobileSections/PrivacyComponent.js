import React from "react";
import MobileTextImage from "./MobileTextImage";
import styled from "styled-components";
import FooterSection from "../sections/FooterSection";

export default function PrivacyComponent() {
  return (
    <>
      <Wrapper>
        <Bg />
        <Title>Privacy Assurance:Data Security and Cookie-Free Browsing</Title>
        <MobileTextImage
          title1="Privacy Policy"
          text1="I prioritize your privacy and are committed to maintaining the confidentiality of your personal information. We want you to feel secure when navigating our site, and thus, we want to clarify our stance on data collection and the use of cookies.Firstly, i do not collect any personal data from visitors unless explicitly provided by them through contact forms or other direct communication channels. We respect your anonymity, and your visit to our site remains entirely anonymous unless you choose to share information with us voluntarily. We assure you that we do not engage in any form of data tracking or profiling without your explicit consent."
          text2="Secondly, our website does not utilize cookies for storing user
      information. Cookies are small files that are commonly used by websites to
      enhance user experience, but we have intentionally designed our site to
      function without the need for them. This means that your browsing
      experience on this site remains free from cookie-related
      tracking or data storage, contributing to a more privacy-centric online
      experience. Your trust is essential to us, and we are dedicated to
      maintaining a transparent and secure digital environment for all our
      visitors."
          title3="Privacy-Centric"
          url="https://cdn.dribbble.com/users/1629266/screenshots/16033151/media/e34500638dc7819f39b0dc589baf6894.jpg?resize=1600x1200&vertical=center"
        />
      </Wrapper>
      <FooterSection />
    </>
  );
}
const Wrapper = styled.div`
  // Your styles here
  padding: 20px;
  padding-top: 89px;
  background-color: black;
  height: 100%;
  position: relative;
  background-image: url(/images/my-svg/lines.svg);
  background-repeat: no-repeat;
  background-position: center;
`;
const Bg = styled.div`
  // Your styles here
  background-image: url(/images/my-svg/falling-rocks.svg);
  background-position: center;
  background-position: bottom center;
  background-size: cover;
  height: 447px;
  width: 100%;
  position: absolute;
  left: 0;

  z-index: 0;
`;

const Title = styled.div`
  font-size: 54px;
  font-weight: bold;
  margin: 20px 0;
  font-family: "cisnero";
  text-align: center;
  background: linear-gradient(to right, rgb(86 77 156), rgb(163 184 254));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 5px 9px 11px #000000, 1px -1px 0px #343433;
  z-index: 2;
  position: relative;
`;
