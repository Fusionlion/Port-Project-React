import React from "react";
import styled from "styled-components";
import ThirdSectionBg from "../backgrounds/ThirdSectionBg";
import EpisodeButton from "../buttons/EpisodeButton";
import ReverseBigButton from "../buttons/ReverseBigButton";

function ThirdSection() {
  return (
    <Wrapper>
      {/* <ThirdSectionBg /> */}
      <ContentWrapper>
        <EpisodeButton />
        <ReverseBigButton />
      </ContentWrapper>
    </Wrapper>
  );
}

export default ThirdSection;

const Wrapper = styled.div`
  /* background-color: #f2f6ff; */
  max-width: 1234px;
  margin: 0 auto;
  padding: 60px 30px;
  display: grid;
  grid-template-columns: 30px auto;
`;

const ContentWrapper = styled.div`
  max-width: vw;
  margin: 0 auto;
  padding: 100px 30px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`;
