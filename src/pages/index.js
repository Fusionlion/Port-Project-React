import React from "react";
import SEO from "../components/layout/seo";
import { Link } from "gatsby";
import styled from "styled-components";
import "../components/styles/Font.css";
import ProjectCardx from "../components/buttons/ProjectCardx";
import { useState } from "react";
import ProjectBios from "../components/sections/ProjectBios";
import Course from "../components/sections/Course";
import AboutSection from "../components/sections/AboutMeSection";
import HeroSection from "../components/sections/HeroSection";
import PortfolioHero from "../components/sections/PortfolioHero";
import MenuOptions from "../components/buttons/MenuOptions";
import Mobile from "./mobile";
import MobileApp from "./MobileApp";
import WebApp from "./WebApp";

function SecondPage() {
  return (
    <Wrapper>
      {/* WebApp for screens larger than 768px */}

      {/* MobileApp for screens up to 768px */}

      <MobileApp />

      {/* <div className="hide-web">
        <WebApp />
      </div> */}
    </Wrapper>
  );
}

export default SecondPage;

const Wrapper = styled.div`
  .hide-web {
    display: none;
   
  }
`;
