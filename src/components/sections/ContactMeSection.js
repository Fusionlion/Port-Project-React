import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
export default function ContactMeSection() {
  return (
    <Wrapper>
      <div className="title1">Contact Me</div>

      <div className="title2">Contact Me</div>
      <ContactForm />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 400px;
  width: 100%;

  position: relative;
  display: flex;
  .title2 {
    font-size: 32px;

    font-family: "Pixel12x10", sans-serif;
    padding: 20px 0px;
  }

  .title2 {
    font-size: 32px;
    color: white;
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
    bottom: 90px;
    left: -70px;
    position: absolute;
    border-top: #fffffffa 10px solid;
  }
`;
