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
      <Image src="images/my-svg/iphone1.png" alt="Your Image" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  /* max-width: 800px; */
  margin: 0 auto;
  color: white;
  padding: 80px 0px;
  position: relative;
  padding-bottom: 407px;
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
  font-size: 16px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
  transform: scale(3.5);
  top: 191px;
  position: relative;
`;
