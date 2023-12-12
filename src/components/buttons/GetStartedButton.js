import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";

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
  width: 280px;
  height: 70px;
  padding: 12px;
  background-color: #07091b;
  /* box-shadow: 0px 1px 3px rgba(0,0,0,0.1), 0px 20px 40px rgba(23,0,102,0.2), inset 0px 0px 0px 0.5px rgba(255,255,255,0.5); */
  border-radius: 12px;
  display: grid;
  grid-template-columns: 53px auto;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;

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
  display: grid;
  gap: 4px;
`;

const Title = styled(Caption2)`
  color: white;
`;

const Subtitle = styled(SmallText)`
  color: white;
  opacity: 0.7;
`;

const Icon = styled.img`
  width: 29px;
  height: 29px;
`;

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(1deg) brightness(150%) saturate(120%);
  }
`;
