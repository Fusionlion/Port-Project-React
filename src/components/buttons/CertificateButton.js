import React from "react";
import styled from "styled-components";
export default function CertificateButton(props) {
  return (
    <Button>
      <Shadow style={{ mixBlendMode: `${props.filter}` }} />
      <Wrapper>
        <div className="top">
          <div className="top-left">{props.title}</div>
          <Icon src={props.imageSrc} />
        </div>

        <div className="desc">{props.desc}</div>
        <div className="bottom">
          <div className="bottom-left">
            <div className="bottom-left-line" />
          </div>
          <div className="bottom-right">
            <div className="bottom-right-line" />
            <div className="bottom-right-line" style={{ width: "100px" }} />
          </div>
        </div>
      </Wrapper>
    </Button>
  );
}

const Button = styled.div`
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  background-color: black;
  cursor: pointer;
  font-family: "Spline Sans Mono", sans-serif;
  transition: scale 1s ease-in-out;

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.02);
    }
  }

  /* Apply the 'scale' animation to the element */

  &:hover {
    transition: scale 1s ease-in-out;
    transform: scale(1.02);
    box-shadow: 0px 0px 20px 0px rgba(90, 113, 158, 0.15);
  }
`;
const Shadow = styled.div`
  background-image: url(https://road-safety.transport.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-08/sk-sk4-backround_printing_back_1.png?itok=Xiv5P5tt);
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;

  mix-blend-mode: color-dodge;
`;
const Wrapper = styled.div`
  width: 335px;
  height: 220px;
  /* background-color: blue; */

  /* border: 0.5px solid rgba(255, 255, 255, 0.3); */

  /* background: radial-gradient(
    285.58% 229.57% at 100% 100%,
    rgba(253, 63, 51, 0.6) 0%,
    rgba(76, 0, 200, 0.6) 45.83%,
    rgba(76, 0, 200, 0.6) 100%
  ); */

  /* box-shadow: 0px 30px 60px 0px rgba(39, 77, 153, 0.2);
  backdrop-filter: blur(20px); */
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  padding: 20px;
  border: 1px #605a5a80 solid;
  border-radius: 18px;

  .desc {
    color: white;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top-left {
    color: white;
    font-family: "Cisnero";
  }

  .bottom {
    display: flex;
    justify-content: space-between;
  }
  .bottom-left {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  .bottom-left-line {
    width: 108px;
    height: 4px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.3);
  }
  .bottom-right {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
  }
  .bottom-right-line {
    width: 88px;
    height: 4px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 60px;
  background-image: url(${(props) => props.src});
  background-size: contain;
  /* mix-blend-mode: color-burn; */
`;
