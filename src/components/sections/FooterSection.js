import React from "react";
import styled from "styled-components";
export default function FooterSection() {
  return (
    <Footer>
      <Apps>
        <FooterIcon src="https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png" />
        <FooterIcon src="https://cdn-icons-png.flaticon.com/512/94/94225.png" />
        <FooterIcon src="https://cdn-icons-png.flaticon.com/512/59/59439.png" />
        <FooterIcon src="https://i.pinimg.com/originals/5e/10/d7/5e10d70b73f61c76194ef63da8f5c22a.png" />
      </Apps>
      <div className="info">
        Privacy Information &copy; 2023 @ZablonCharles. All rights reserved.
      </div>
    </Footer>
  );
}

const Footer = styled.div`
  color: white;
  text-align: center;
  justify-content: end;
  gap: 11px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  font-family: "Spline Sans Mono", sans-serif;
  .info {
    font-size: 12px;
    color: gray;
    line-height: initial;
    padding: 1px 31px;
    font-family: "Spline Sans Mono", sans-serif;
    @media (max-width: 500px) {
      text-align: center;
      text-align-last: center;
      color: #615959;
    }
  }
`;

const Apps = styled.div`
  width: 900px;
  height: 100px;
  background: #020202;
  /* box-shadow: 2px 2px 20px #150f3b, -2px -2px 20px #030408; */
  border-radius: 66px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 160px;
  border: 1px #0c0c0c solid;

  /* on mobile footer */
  @media (max-width: 500px) {
    width: 325px;
    border-radius: 76px;
    height: 66px;
    margin-top: 30px;
    gap: 47px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 19px 93px;
    background: #000;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border: 1px #353232 solid;
    text-align: -webkit-center;
  }
`;

const FooterIcon = styled.img`
  filter: invert(100%);
  width: 30px;
  height: 30px;
`;
