import React, { useEffect } from "react";
import MobileTextImage from "./MobileTextImage";
import styled from "styled-components";
import FooterSection from "../sections/FooterSection";

export default function PrivacyComponent() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // Add this line for smooth scrolling
    });
  }, []);
  return (
    <>
      <Wrapper>
        <Bg />
        <Title>Privacy Assurance:Data Security and Cookie-Free Browsing</Title>
        <MobileTextImage
          title1="Privacy Policy"
          text1="I prioritize your privacy and am committed to maintaining the confidentiality of your personal information. I want you to feel secure when navigating my site, and thus, I want to clarify my stance on data collection and the use of cookies. Firstly, I do not collect any personal data from visitors unless explicitly provided by them through contact forms or other direct communication channels. I respect your anonymity, and your visit to my site remains entirely anonymous unless you choose to share information with me voluntarily. I assure you that I do not engage in any form of data tracking or profiling without your explicit consent."
          text2="Secondly, I do not utilize cookies on my website to store user information. I have intentionally designed the site to function without the need for them, ensuring that your browsing experience remains free from cookie-related tracking or data storage. This contributes to a more privacy-centric online experience. Your trust is essential to me, and I am dedicated to maintaining a transparent and secure digital environment for all my visitors."
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
