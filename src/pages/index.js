import React from "react";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import "../components/styles/Font.css";
import { useMediaQuery } from "react-responsive";

import MobileApp from "./MobileApp";
import WebApp from "./WebApp";

function SecondPage() {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return <div>{isMobile ? <MobileApp /> : <WebApp />}</div>;
}

export default SecondPage;

const Wrapper = styled.div`
  .hide-web {
    display: none;
  }
`;
