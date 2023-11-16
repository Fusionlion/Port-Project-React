import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import styled from "styled-components";

function BirdsLottie(props) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(
          "https://lottie.host/47a076d2-308c-4d8c-9eca-ffeeb000d4cc/8Rt4nFGTwo.json"
        );
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error fetching animation data:", error);
      }
    };

    fetchAnimationData();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Wrapper>
      <div className="circle"></div>
      {animationData ? (
        <Lottie options={defaultOptions} />
      ) : (
        <p>Loading animation...</p>
      )}
    </Wrapper>
  );
}

export default BirdsLottie;

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  right: 320px;
  top: 350px;
  /* bottom:90px; */

  .circle {
    background-color: #44464c;
    width: 392px;
    height: 394px;
    left: 55px;
    top: 55px;
    border-radius: 400px;
    position: absolute;
  }
`;
