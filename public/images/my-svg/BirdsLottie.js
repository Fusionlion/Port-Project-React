import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";

const BirdsLottie = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the Lottie animation data from the URL
    fetch("https://example.com/path/to/your-animation.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error fetching animation data:", error));
  }, []); // Empty dependency array ensures this effect runs once on mount

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      {animationData ? (
        <Lottie options={defaultOptions} />
      ) : (
        <p>Loading animation...</p>
      )}
    </div>
  );
};
