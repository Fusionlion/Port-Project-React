import React from "react";
import styled from "styled-components";

export default function MidSectionComponent() {
  return (
    <Wrapper>
      <Title>Title</Title>
      <Description>
        This is a description of the mid-section component. It can contain
        relevant information about the content.
      </Description>
      <Image />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  /* max-width: 800px; */
  margin: 0 auto;
  color: white;
  padding: 24px 0px;
  position: relative;
  background-image: url(/images/my-svg/falling-stars.svg);
  background-repeat: repeat-y;
`;

const Title = styled.div`
  font-size: 54px;
  font-weight: bold;
  margin: 20px 0;
  font-family: "cisnero";
  text-align: center;
  background: linear-gradient(to right, rgb(0 228 255), rgb(35 206 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 5px 9px 11px #000000, 1px -1px 0px #4f0000;
`;

const Description = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  font-family: "Spline Sans Mono", sans-serif;
  line-height: 1.2;
  gap: 18px;
  text-align: center;
`;

const Image = styled.div`
  width: 100%;
  height: 680px;
  background-image: url(images/my-svg/iphone2.png);
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  /* background-color: aliceblue; */
  background-position: center;
`;
