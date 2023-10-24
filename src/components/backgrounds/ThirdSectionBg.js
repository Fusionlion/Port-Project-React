import React from "react";
import styled from "styled-components";

export default function ThirdSectionBg() {
  return (
    <Wrapper>
      <Background />
      <BottomWave
        src="/images/waves/certificate-lines.svg "
        style={{ top: "-170px" }}
      />
      <BottomWave src="/images/waves/hero-wave3.svg" style={{ top: "350px" }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Wave = styled.img`
  position: absolute;
  z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
`;

const BottomWave = styled(Wave)`
  /* @media (prefers-color-scheme: dark) {
    content: url("/images/waves/hero-wave3.svg");
  } */
`;

const Background = styled.div`
  background:red;
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`;
