import React, { useState } from "react";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import "../components/styles/Font.css";

import MobileApp from "./MobileApp";
import WebApp from "./WebApp";

import WelcomeMessage from "./WelcomeTypingMessage";

function Index() {
  const [value, setValue] = useState(false);

  function showWeb() {
    setTimeout(() => {}, 700);
  }
  return (
    <Wrapper>
      <MobileWrapper>
        <HideWeb value={value}>
          <MobileApp />
        </HideWeb>

        {!value && <WelcomeMessage value={value} setValue={setValue} />}
      </MobileWrapper>

      <WebWrapper>
        <HideWeb value={value}>
          <WebApp value={value} />
        </HideWeb>

        {!value && <WelcomeMessage value={value} setValue={setValue} />}
      </WebWrapper>
    </Wrapper>
  );
}

export default Index;

const Wrapper = styled.div`
  position: relative;
`;
const WebWrapper = styled.div`
  /* if its below 1000 show this */
  position: relative;
  @media screen and (max-width: 1000px) {
    display: none;
  }

  /* Add additional styles for the WebWrapper here */
`;
const HideWeb = styled.div`
  // Your styles here
  transition: opacity 3s ease-in-out;
  opacity: ${(props) => (props.value ? 1 : 0)};
`;

const MobileWrapper = styled.div`
  @media screen and (min-width: 999px) {
    display: none;
  }
`;
