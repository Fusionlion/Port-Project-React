import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledCanvas = styled.canvas`
  display: block;
  position: absolute;
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const RainMatrix = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let matrix = "PAULSICCHADGKDGDFFFGFFGFG";
    matrix = matrix.split("");
    const font_size = 2;
    const columns = canvas.width / font_size;
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.09)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#fff";
      ctx.font = `${font_size}px arial`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const animationFrameId = setInterval(draw, 35);

    return () => clearInterval(animationFrameId);
  }, []);

  return <StyledCanvas ref={canvasRef} />;
};

export default RainMatrix;
