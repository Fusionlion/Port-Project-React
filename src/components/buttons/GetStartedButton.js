import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
// import { Caption2, SmallText } from "../styles/TextStyles";

export default function GetStartedButton(props) {
  const { title, subtitle } = props;
  return (
    // <Link to="/page-2">
    <Wrapper onClick={props.tapped}>
      <IconWrapper>
        <Icon src="/images/icons/code.svg" className="icon" />
      </IconWrapper>
      <TextWrapper>
        <Title>{title || "Get Started"}</Title>
        <Subtitle>{subtitle || "Let's get to work :)"}</Subtitle>
      </TextWrapper>
    </Wrapper>
    // </Link>
  );
}

const Wrapper = styled.div`
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  border: 1px solid #171616;
  font-family: "Spline Sans Mono", sans-serif;
  border-radius: 58px;
  padding: 10px 10px;
  width: 100%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2);
  @media screen and (min-width: 999px) {
    width: 280px;
    height: 70px;
    padding: 12px;
    background-color: #000000;
    /* box-shadow: 0px 1px 3px rgba(0,0,0,0.1), 0px 20px 40px rgba(23,0,102,0.2), inset 0px 0px 0px 0.5px rgba(255,255,255,0.5); */
    /* border-radius: 12px; */
    border-radius: 58px;
    display: grid;
    grid-template-columns: 53px auto;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 20px;
    box-shadow: none;
    cursor: pointer;
    border: 1px solid #171616;
    font-family: "Spline Sans Mono", sans-serif;
  }
  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-5px);

    .icon {
      transform: scale(1.1) rotate(150deg);
    }
  }
`;

const TextWrapper = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 999px) {
    display: grid;
    gap: 4px;
  }
`;

const Title = styled.div`
  color: white;
`;

const Subtitle = styled.div`
  color: white;
  opacity: 0.7;
  font-size: 13px;
  text-wrap: nowrap;
`;

const Icon = styled.img`
  @media screen and (min-width: 999px) {
    width: 29px;
    height: 29px;
  }
`;

const IconWrapper = styled.div`
  width: 55px;
  height: 41px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;
  @media screen and (min-width: 999px) {
    width: 45px;
    height: 45px;
  }

  ${Wrapper}:hover & {
    filter: hue-rotate(1deg) brightness(150%) saturate(120%);
  }
`;
