import React from "react";
import styled from "styled-components";

export default function ProfileCard() {
  return (
    <Wrapper>
      <div class="topicname">Fuze</div>
      <div class="topicdesc1">I DESIGN, CODE AND WRITE</div>
      <div class="topicdesc2">
        Charles is the author of fusion. He started off his career as a
        self-taught designer and eventually traveled around the world for 2
        years. During his travels, he wrote a book which now has 5,000 readers.
      </div>
      <div class="topicsocialgrid">
        <Icon src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"></Icon>
        <Icon></Icon>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: end;
  width: 250px;
  height: 360px;
  /* background: var(--card-background);
  box-shadow: var(--card-box-shadow); */
  border-radius: 10px;
  padding: 97px 20px;
  cursor: pointer;
  transition: all 0.6s;
  background-image: url(https://cdna.artstation.com/p/assets/images/images/019/241/598/large/sabbir-ahmed-01.jpg?1562648853);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
  .topiclogoframe {
    background-image: url(https://cdna.artstation.com/p/assets/images/images/019/241/598/large/sabbir-ahmed-01.jpg?1562648853);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .topicname {
    font-family: "Cisnero", sans-serif;
    font-style: normal;
    font-size: 24px;
    color: white;
    line-height: 29px;
  }
  .topicdesc1 {
    font-style: normal;
    font-size: 13px;
    line-height: 130%;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    margin: 0px;
    text-transform: uppercase;
  }
  .topicdesc2 {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 130%;
    color: rgba(255, 255, 255, 0.7);
    margin: 0px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: scroll;
    font-family: "Spline Sans Mono", sans-serif;
  }
  .topicsocialgrid {
    display: flex;

    gap: 1px;
    width: 72px;
  }
  .topicsocialsingleicon {
    width: 35px;
    height: 35px;
    align-self: bottom;
    padding: 2px;
    background: rgb(44 40 40 / 9%);
    border-radius: 30px;
    filter: invert(1);
    margin: 5px;
  }
`;

const Icon = styled.img`
  background-image: url(https://w7.pngwing.com/pngs/277/988/png-transparent-social-media-computer-icons-linkedin-black-angle-text-logo.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 29px;
  height: 29px;
  margin: 0px auto;

  border-radius: 50px;
`;
