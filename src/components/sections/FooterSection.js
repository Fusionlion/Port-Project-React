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
        <p>
          Privacy Information &copy; 2023 @ZablonCharles. All rights reserved.
        </p>
      </div>
    </Footer>
  );
}

const Footer = styled.div`
  color: white;
  text-align: center;
  justify-content: end;
  gap: 21px;
  background-image: url("/images/my-svg/footer-mine.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 590px;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

const Apps = styled.div`
  width: 900px;
  height: 100px;
  background: #201658;
  box-shadow: 8px 8px 21px #150f3b, -8px -8px 21px #2b1d75;
  border-radius: 65px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 160px;
`;

const FooterIcon = styled.img`
  filter: invert(90%);
  width: 40px;
  height: 40px;
 

`;


