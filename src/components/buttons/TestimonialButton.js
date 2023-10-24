import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Caption, Caption2, MediumText, SmallText } from "../styles/TextStyles";

export default function TestimonialButton(props) {
  const { title, subtitle } = props;
  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/code.svg" className="icon" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Get Started"}</Title>
          <Subtitle1>{subtitle || "Let's find your show"}</Subtitle1>
          <Subtitle>
            {subtitle ||
              "Your company is truly upstanding and is behind its product 100%. I am completely blown away."}
          </Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;

  position: static;
  width: 340px;
  height: 251px;
  left: 0px;
  top: 0px;

  background: rgba(15, 14, 71, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;

  /* Inside auto layout */

  margin: 0px 0px;
  gap: 14px;

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
      transform: scale(1.2);
    }
  }
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`;

const Title = styled(SmallText)`
  color: white;
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
`;
const Subtitle1 = styled(Caption)`
  color: orange;
`;
const Subtitle = styled(Caption)`
  color: white;
  opacity: 0.7;

  #orangee {
    color: orange;
  }
`;

const Icon = styled.img`
  width: 29px;
  height: 29px;
`;

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
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
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
`;
