import React from "react";
import styled from "styled-components";
import TimeLine from "./TimeLine";
import ContactForm from "./ContactForm";
export default function MagazineArtice() {
  return (
    <Wrapper>
      <div className="content">
        <div className="title">About Me :)</div>
        <div className="articles">
          <div className="line"></div>
          <div className="article">
            This section provides insights into who I am. Explore details about
            my background, achievements in various projects, professional
            experience, and discover what activities bring me joy during my
            leisure time
          </div>
          <div className="article">
            This section provides insights into who I am. Explore details about
            my background, achievements in various projects, professional
            experience, and discover what activities bring me joy during my
            leisure time
          </div>
          <div className="article">
            This section provides insights into who I am. Explore details about
            my background, achievements in various projects, professional
            experience, and discover what activities bring me joy during my
            leisure time
          </div>
        </div>
       
       

              
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  /* background-color: #000000; */
  border-radius: 17px;
  width: 654px;
  height: 500px;
  color: white;
  .content {
    height: 100%;
    overflow: scroll;
  }
  .title {
    font-size: 32px;

    font-family: "Pixel12x10", sans-serif;
    padding: 20px 0px;
  }
  .articles {
    display: grid;
    grid: 110px 103px / repeat(2, 50%);
    grid-gap: 6px;
    padding: 20px 0px;
    position: relative;
  }
  .article {
    font-family: "Spline Sans Mono", sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    line-height: 16px;
    text-wrap: balance;
  }
  .line {
    height: 234px;
    width: 2px;
    background-color: #306b10;
    left: 46%;
    /* right: 0; */
    position: absolute;
  }
`;
