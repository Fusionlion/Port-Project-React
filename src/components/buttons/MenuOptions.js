import React from "react";
import styled from "styled-components";
import { useState } from "react";
function MenuOptions({ setActiveTab }) {
  const [activeTab, setActiveView] = useState("Portfolio");
  const handleTabClick = (tabName) => {
    setActiveView(tabName);
    setActiveTab(tabName);
  };
  return (
    <Wrapper>
      <div className="small-screen-size-items">
        <div className="item" onClick={() => handleTabClick("Projects")}>
          Projects
        </div>
        <div className="item" onClick={() => handleTabClick("Course")}>
          Course
        </div>
        <div className="item" onClick={() => handleTabClick("About")}>
          About
        </div>
      </div>
      <div className="item">Privacy</div>
      <div className="item">Contact Information</div>
    </Wrapper>
  );
}

export default MenuOptions;

const Wrapper = styled.div`
  background: rgb(4 4 11 / 30%);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);

  border-radius: 10px;

  position: absolute;
  top: 108px;
  right: 30px;
  /* opacity: ${(props) => (props.isOpen ? 1 : 0)}; */
  z-index: 999;
  display: flex;

  transition: 0.3s ease-in-out;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    top: 114px;
  }
  .small-screen-size-items {
    display: none;
    @media screen and (max-width: 1000px) {
      display: flex;
      flex-direction: column;
    }
  }
  .item {
    color: rgba(255, 255, 255, 0.7);
    transition: 0.5s ease-out;
    padding: 10px 10px;
    border-radius: 10px;
    cursor: pointer;
  }
  .item:hover {
    color: red;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`;
