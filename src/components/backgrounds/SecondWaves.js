import React from "react";
import styled from "styled-components";

export default function SecondWaves() {
  return (
    <Wrapper>
      {/* <Background /> */}

      {/* <BottomWave
        src="/images/my-svg/falling-rocks.svg"
        style={{ top: "0px" }}
      /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
position: absolute;
  height: 800px;
  background-image: url("/images/my-svg/falling-rocks.svg");
`;

const Wave = styled.img`
  z-index: -1;
  position: absolute;

  @media (min-width: 1440px) {
    /* width: 100%; */
  }
`;

const BottomWave = styled(Wave)`
  opacity: 0px;
  /* @media (prefers-color-scheme: dark) {
    content: url("/images/waves/hero-wave3.svg");
  } */
`;

const Background = styled.div`
  /* background: linear-gradient(180deg, #f2f6ff 0%, #9076e7 100%); */
  background-color: black;
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -2;
`;
