import React from "react";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import "../components/styles/Font.css";

import MobileApp from "./MobileApp";
import WebApp from "./WebApp";

function index() {
  return (
    <>
      <MobileWrapper>
        <MobileApp />
      </MobileWrapper>

      <WebWrapper>
        <WebApp />
      </WebWrapper>
    </>
  );
}

export default index;

const WebWrapper = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;
const MobileWrapper = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`;
