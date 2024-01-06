import React from "react";
import styled from "styled-components";

export default function MidSectionComponent(props) {
  return (
    <Wrapper>
      <Title>{props.title ?? "Title"}</Title>
      <TitleDesc>{props.titleDesc ?? "something good"}</TitleDesc>
      <Description>
        {props.desc ??
          "This is a description of the mid-section component. It can contain relevant information about the content."}
      </Description>
      {/* <Image /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  /* max-width: 800px; */
  margin: 0 auto;
  color: white;
  padding: 24px 20px;
  position: relative;
  background-image: url(/images/my-svg/falling-stars.svg);
  background-repeat: repeat-y;
`;

const Title = styled.div`
  font-size: 44px;
  font-weight: bold;
  margin: 20px 0;
  font-family: "cisnero";
  text-align: center;
  background: linear-gradient(to right, rgb(0 228 255), rgb(35 206 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 5px 9px 11px #000000, 1px -1px 0px #4f0000;
`;
const TitleDesc = styled.div`
  font-size: 15px;
  margin: 20px 0;
  /* font-family: "cisnero"; */
  font-family: "Spline Sans Mono", sans-serif;
  text-align: center;
  color: gray;
`;
const Description = styled.div`
  margin-bottom: 20px;
  font-size: 13px;
  color: white;
  padding-top: 5px;
  width: 100%;

  line-height: 1.8;
  font-weight: normal;
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
