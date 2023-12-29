import React from "react";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import "../components/styles/Font.css";

import MobileApp from "./MobileApp";
import WebApp from "./WebApp";

function Index() {
  return (
    <Wrapper>
      <MobileWrapper>
        <MobileApp />
      </MobileWrapper>

      <WebWrapper>
        <WebApp />
      </WebWrapper>
    </Wrapper>
  );
}

export default Index;

const Wrapper = styled.div`
  position: relative;
`;
const WebWrapper = styled.div`
  /* @media screen and (max-width: 1000px) {
    display: none;
   
  } */

  /* Add additional styles for the WebWrapper here */
`;

const MobileWrapper = styled.div`
  /* position: absolute;
  @media screen and (min-width: 999px) {
    display: none;
  } */
  /* Add additional styles for the MobileWrapper here */
`;
