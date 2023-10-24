import React from "react";
import styled from "styled-components";

export default function FifthSectionBg() {
  return (
    <Wrapper>
      <Background />

      <BottomWave
        src="/images/waves/footer-wave3.svg"
        style={{ top: "70px" }}
      />
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
  /* background: linear-gradient(180deg, #f2f6ff 0%, #9076e7 100%); */
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`;
