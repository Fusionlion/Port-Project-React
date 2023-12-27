import React, { useState } from "react";
import styled from "styled-components";
import MobileProjects from "../components/mobileSections/MobileProjects";
import MobileProjectDetail from "../components/mobileSections/MobileProjectDetail";

export default function test() {
  return (
    <MobileLayout>
      {/* header only show */}
      <MobileHeader>
        <div className="mobile-header-left">
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        <div className="mobile-header-right">
          {/* <div className="columns">
            <div className="mobile-email">zab.charles@gmail.com</div>
            <div className="mobile-phone">201-267-5068</div>
          </div> */}
          <div className="right-header-icon"></div>
          <div className="mobile-name">Portfolio</div>
        </div>
      </MobileHeader>
      
      <MobileProjects />
    </MobileLayout>
  );
}
const Spacer = styled.div`
  height: 90px;
`;
const MobileLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;
const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  height: 70px;
  z-index: 1;
  flex-direction: row-reverse;
  border-bottom: solid 1px #498a4a;
  padding: 0px 10px;
  position: fixed;
  width: 100%;

  .mobile-header-left {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .mobile-name {
    font-size: 26px;
    font-family: "Spline Sans Mono", sans-serif;
    color: white;
  }
  .burger-line {
    width: 27px;
    height: 2px;
    background-color: #fffcfc;
  }
  .mobile-header-right {
    display: flex;
    font-size: 45px;
    align-items: center;
    color: #2c94ea;
    border-radius: 14px;
    /* background: #d1d1d1; */
    text-align: end;

    /* border: #95434333 solid 1px; */
  }
  .right-header-icon {
    background-image: url(/images/my-svg/icon.png);
    height: 30px;
    width: 30px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    filter: hue-rotate(292deg);
  }
  .mobile-email,
  .mobile-phone {
    font-family: "Spline Sans Mono", sans-serif;
    /* font-size: 25px; */
  }
`;
