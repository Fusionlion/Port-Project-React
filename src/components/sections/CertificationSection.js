
import React from "react";
import styled from "styled-components";

export default function CertificationSection() {
    return (
        <Wrapper>
            <div className="title">Certifications</div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  overflow: scroll;
  color: white;
  height: 500px;

  .title {
    font-size: 32px;
    color: white;
    font-family: "Pixel12x10", sans-serif;
    padding: 20px 0px;
  }
`;
