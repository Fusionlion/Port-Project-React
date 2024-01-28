import React from "react";
import styled from "styled-components";
export default function FooterSection() {
  return (
    <Footer>
      <Apps>
        <FooterIcon
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/zablon-charles-a94530104/details/experience/",
              "_blank"
            );
          }}
          src="https://cdn.freebiesupply.com/logos/large/2x/linkedin-icon-1-logo-black-and-white.png"
        />
        <FooterIcon
          onClick={() => {
            window.open("https://twitter.com/starfuzen", "_blank");
          }}
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912056/bird-icon-md.png"
        />
        <FooterIcon
          onClick={() => {
            window.open("https://github.com/zabloncharles", "_blank");
          }}
          src="https://banner2.cleanpng.com/20180326/gxq/kisspng-github-computer-icons-icon-design-github-5ab8a31e334e73.4114704215220498222102.jpg"
        />
        <FooterIcon src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3270077/instagram-icon-sm.png" />
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
  /* Desktop footer */
  @media (min-width: 999px) {
    width: 744px;
    height: 82px;
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
  }

  /* on mobile footer */
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
`;

const FooterIcon = styled.img`
  filter: invert(100%);
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  & :hover {
    cursor: pointer;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 60px 60px rgba(23, 0, 102, 0.5);
    transform: translateY(-5px);
    width: 40px;
    height: 40px;
    transition: all 0.3s ease-in-out;
  }
`;
