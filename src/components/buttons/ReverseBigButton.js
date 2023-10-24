import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import AnotherSeason from "../sections/AnotherSeason";
import AnotherShow from "../sections/AnotherShow";
import Episodes from "../sections/Episodes";
import App from "../sections/test";
import { Caption2, SmallText, SmallText2 } from "../styles/TextStyles";
import BigEpisodeButton from "./BigEpisodeButton";
import EpisodeListButton from "./EpisodeListButton";

export default function ReverseBigButton(props) {
  return (
    <Link to="/page-2">
      <Wrapper>
        <TwoButtons>
          <LeftSec>
            <AnotherShow />
          </LeftSec>
          <RightSec>
            <Title>Episodes</Title>
            <EpisodeRow>
              <AnotherSeason />
            </EpisodeRow>
          </RightSec>
        </TwoButtons>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  width: 597px;
  height: 400px;
  padding: 20px;
  background: rgba(15, 14, 71, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;

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
      transform: scale(1.05);
    }
  }
`;
const LeftSec = styled.div`
  /* Auto layout */

  width: 240px;
  height: 360px;
  left: 337px;
  top: 20px;
  flex: none;
  margin: 0px 0px;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    transform: translateY(-5px);
  }
`;
const RightSec = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 297px;
  height: 378px;
  left: 20px;
  top: 20px;

  /* Inside auto layout */

  margin: 0px 20px;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    transform: translateY(-5px);

    .icon {
      transform: scale(1.2);
    }
  }
`;

const Title = styled(SmallText2)`
  color: gray;
  align-self: flex-end;
  flex-grow: 0;
  margin: 8px 0px;
`;

const EpisodeRow = styled.div`
  display: grid;
  gap: 5px;
  overflow-y: scroll;
`;

const TwoButtons = styled.div`
  display: flex;
  flex-direction: row;
`;
