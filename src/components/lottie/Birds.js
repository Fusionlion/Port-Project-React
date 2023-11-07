import React from "react";
import Lottie from "lottie-react";

function Birds() {
    const animationUrl =
      "https://assets7.lottiefiles.com/packages/lf20_Kqzytj.json";
  return (
    <div>
      <Lottie
        animationData={animationUrl}
        loop={true} // Set to true if you want the animation to loop
        autoPlay={true} // Set to true to start the animation automatically
      />
    </div>
  );
}

export default Birds;
