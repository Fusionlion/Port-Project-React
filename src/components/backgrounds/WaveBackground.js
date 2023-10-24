import React from "react";
import styled from "styled-components";

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave src="/images/my-svg/first.svg" style={{ top: "90px" }} />

      
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
  /* background: linear-gradient(to top, #030310, #000000, #1a07eb); */
  //does't care where otehr items are in
  background: linear-gradient(to top, #000000, #000, #1606cd);
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`;
