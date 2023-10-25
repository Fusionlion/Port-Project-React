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

function IndexPage() {
  return (
    <Layout>
      <SEO title="Fusion | Find you favorite shows & movies" />

      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <IntroSection />
      <FourthSection />
      <FifthSection />
    </Layout>
  );
}

export default IndexPage;
