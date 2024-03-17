import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import styled from "styled-components";

function Birds(props) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        // const response = await fetch(
        //   "https://lottie.host/47a076d2-308c-4d8c-9eca-ffeeb000d4cc/8Rt4nFGTwo.json"
        // );
        const response = await fetch(
          "https://assets7.lottiefiles.com/packages/lf20_Kqzytj.json"
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
      {animationData ? (
        <Lottie options={defaultOptions} />
      ) : (
        <p>Loading animation...</p>
      )}
    </Wrapper>
  );
}

export default Birds;

const Wrapper = styled.div`
  width: 100vw;
  height: 500px;
  position: absolute;
  top: 50px;
  /* filter: invert(1); */
  filter: hue-rotate(44deg);
  /* bottom:90px; */
`;
