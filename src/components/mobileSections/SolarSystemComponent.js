import React from "react";
import styled, { keyframes } from "styled-components";

const orbit = (days) => keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const SolarSystemContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: relative;
  top: 180px;

  &:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 2px;
    top: -2px;
    background: white;
    box-shadow: ${(props) => props.stars};
    border-radius: 100px;
  }
`;

const Sun = styled.div`
  background: radial-gradient(
    ellipse at center,
    #ffd000 1%,
    #f9b700 39%,
    #f9b700 39%,
    #e06317 100%
  );
  height: 40px;
  width: 40px;
  margin-top: -20px;
  margin-left: -20px;
  background-clip: padding-box;
  border: 0 !important;
  background-position: -28px -103px;
  background-size: 175%;
  box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4),
    0 0 22px 11px rgba(255, 203, 0, 0.13);
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 1000px;
`;

const Planet = styled.div`
  height: ${(props) => props.orbitSize}px;
  width: ${(props) => props.orbitSize}px;
  margin-top: -${(props) => props.orbitSize / 2}px;
  margin-left: -${(props) => props.orbitSize / 2}px;
  animation: ${(props) => orbit(props.revolution)} linear infinite;
  border: 1px solid rgba(102, 166, 229, 0.12);
  border-radius: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;

  &:before {
    content: "";
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    background: ${(props) => props.color};
    margin-top: -${(props) => props.size / 2}px;
    margin-left: -${(props) => props.size / 2}px;
    position: absolute;
    left: 50%;
    border-radius: 100px;
    box-shadow: inset 0 6px 0 -2px rgba(0, 0, 0, 0.25);
  }

  &.earth {
    &:after {
      content: "";
      height: 18px;
      width: 18px;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -9px;
      margin-top: -9px;
      border-radius: 100px;
      box-shadow: 0 -10px 0 -8px grey;
      animation: ${orbit(27.3216)} linear infinite;
    }
  }

  &.saturn {
    &:after {
      content: "";
      position: absolute;
      height: 2.34%;
      width: 4.676%;
      left: 50%;
      top: 0px;
      transform: rotateZ(-52deg);
      margin-left: -2.3%;
      margin-top: -1.2%;
      border-radius: 50% 50% 50% 50%;
      box-shadow: 0 1px 0 1px #987641, 3px 1px 0 #987641, -3px 1px 0 #987641;
      animation: ${orbit(10747)} linear infinite reverse; // reverse to compensate main orbit animation
      transform-origin: 52% 60%;
    }
  }
`;

const Hr = styled.hr`
  margin: 26px 0;
  border: 0;
  border-top: 1px solid white;
  background: transparent;
  width: 25%;
  opacity: 0.1;
`;

const SolarSystem = () => {
  const stars = Array(500)
    .fill()
    .map(
      () =>
        `${Math.random() * 1800}px ${Math.random() * 1800}px 0 ${
          Math.random() * 2
        }px rgba(255, 255, 255, ${Math.random()})`
    )
    .join(", ");

  return (
    <div>
      <SolarSystemContainer stars={stars}>
        <Sun />
        <Planet
          className="mercury"
          orbitSize={70}
          size={4}
          color="#9f5e26"
          revolution={87.5}
        />
        <Planet
          className="venus"
          orbitSize={100}
          size={8}
          color="#BEB768"
          revolution={224.7}
        />
        <Planet
          className="earth"
          orbitSize={145}
          size={6}
          color="#11abe9"
          revolution={365.2563}
        />
        <Planet
          className="mars"
          orbitSize={190}
          size={6}
          color="#cf3921"
          revolution={687}
        />
        <Planet
          className="jupiter"
          orbitSize={340}
          size={18}
          color="#c76e2a"
          revolution={4331}
        />
        <Planet
          className="saturn"
          orbitSize={440}
          size={12}
          color="#e7c194"
          revolution={10747}
        />
        <Planet
          className="uranus"
          orbitSize={520}
          size={10}
          color="#b5e3e3"
          revolution={30589}
        />
        <Planet
          className="neptune"
          orbitSize={630}
          size={10}
          color="#175e9e"
          revolution={59802}
        />
        <Planet
          className="pluto"
          orbitSize={780}
          size={3}
          color="#fff"
          revolution={90580}
        />
      </SolarSystemContainer>
    </div>
  );
};

export default SolarSystem;
