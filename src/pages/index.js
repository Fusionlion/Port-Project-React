import React from "react";
import FifthSectionBg from "../components/backgrounds/FifthSectionBg";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import FifthSection from "../components/sections/FifthSection";
import FourthSection from "../components/sections/FourthSection";
import HeroSection from "../components/sections/HeroSection";
import SecondSection from "../components/sections/SecondSection";
import ThirdSection from "../components/sections/ThirdSection";
import IntroSection from "../components/sections/IntroSection";
import BioSection from "../components/sections/BioSection";
import FooterSection from "../components/sections/FooterSection";
import ProjectSection from "../components/sections/ProjectSection";
import CertificateButton from "../components/buttons/CertificateButton";
import CustomModal from "../components/sections/Modal";



function IndexPage() {
  return (
    <Layout>
      <SEO title="Fusion | Find you favorite shows & movies" />
      <HeroSection />
      <SecondSection />
      <BioSection />
      <ThirdSection />
      <IntroSection />
      <ProjectSection />
      <FourthSection />
      <FifthSection />
      <FooterSection />
    </Layout>
  );
}

export default IndexPage;
