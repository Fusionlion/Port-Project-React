import React from "react";
import styled from "styled-components";
import AboutArticle from "./AboutArticle";
import { useState } from "react";

export default function CardModal(closeModal) {
  const [activeModal, setActiveModal] = useState("dontShow");
  const handleModalClose = (close) => {
    closeModal("close");
    setActiveModal("close");
  };
  return (
    <Modal active={activeModal === "show"}>
      <div className="background">
        <div className="x" onClick={() => handleModalClose("close")}>
          Close
        </div>
        <AboutArticle />
      </div>
    </Modal>
  );
}

const Modal = styled.div`
  position: fixed;
  z-index: 100;
  /* border-radius: 14px; */
  -webkit-backdrop-filter: blur(31px);
  backdrop-filter: blur(31px);
  color: white;
  display: flex;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  /* border: 1px #4a4747 solid; */

  opacity: ${(props) => (props.active ? "1" : "0")};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  .background {
    position: absolute;
    z-index: 100;
    border-radius: 18px;
    background-color: white;
    color: black;
    border-radius: 15px;
    overflow: scroll;
    height: 100%;
  }
  .x {
    right: 0px;
    position: fixed;
    padding: 7px 10px;
    background-color: #d84d48;
    margin: 20px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    z-index: 999;
    -webkit-transition: linear 0.2s;
    transition: linear 0.2s;
    border: 1px solid #0000001a;
  }
  .x:hover {
    transition: linear 0.2s;
    background-color: gray;
    z-index: 999;
  }
`;
