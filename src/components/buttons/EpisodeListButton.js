import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";

export default function EpisodeListButton(props) {
  const { number, title, subtitle } = props;
  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrapper>
          <IconText>{number || 1}</IconText>
        </IconWrapper>

        <TextWrapper>
          <Title>{title || "Get Started"}</Title>
          <Subtitle>
            {subtitle ||
              "Design an iOS app from scratch for iOS 13, iPadOS and Big Sur."}
          </Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;

  position: static;
  width: 297px;
  height: 90px;
  left: 0px;
  top: 0px;

  background: rgba(255, 255, 255, 0.1);
  background-blend-mode: overlay;
  mix-blend-mode: normal;
  box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 0px 0px;

  /* Inside auto layout */

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    .icon {
      transform: scale(1.2);
    }
  }
`;

const TextWrapper = styled.div`
  /* Auto layout */

  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 231px;
  left: 56px;
  top: 10px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: center;
  flex-grow: 0;
  margin: 0px 10px;
`;

const Title = styled(Caption2)`
  color: black;
`;

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const IconWrapper = styled.div`
  width: 46px;
  height: 46px;
  left: 10px;
  top: 20px;
  background: #2fb5fc;
  border-radius: 30px;
  /* Inside auto layout */
  align-self: center;
  align-content: center;
  flex: none;
  flex-grow: 0;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
`;

const IconText = styled.div`
  position: relative;
  width: 10px;
  height: 28px;
  left: 17px;
  top: 9px;

  /* Body Main */

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  /* identical to box height, or 28px */

  color: #ffffff;
`;
