import React from "react";
import styled from "styled-components";

export default function FourthSectionBg() {
  return (
    <Wrapper>
      <Background />
      <BottomWave
        src="/images/waves/testimonial-wave1.svg "
        style={{ top: "10px" }}
      />
      <BottomWave
        src="/images/waves/testimonial-wave3.svg"
        style={{ top: "350px" }}
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
  /* background: linear-gradient(180deg, #e7ebf4 0%, #c7d3f0 100%); */
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`;
