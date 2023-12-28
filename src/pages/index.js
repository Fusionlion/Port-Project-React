import React from "react";
import SEO from "../components/layout/seo";
import "../components/styles/Font.css";
import { useMediaQuery } from "react-responsive";

import MobileApp from "./MobileApp";
import WebApp from "./WebApp";

function IndexPage() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return <div>{isMobile ? <MobileApp /> : <WebApp />}</div>;
}

export default IndexPage;
