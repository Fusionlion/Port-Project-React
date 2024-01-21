import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 24px;
  height: 24px;
  animation: ${rotate} 1s linear infinite;
`;

const StyledPic = styled.div`
  position: relative;
  margin-bottom: 10px;

  img {
    display: block;
    width: 100%;
    height: auto;
    opacity: ${({ loading }) => (loading ? 0 : 1)};
    transition: opacity 0.5s ease;
    border-radius: 11px;

    @media screen and (min-width: 999px) {
      & {
        transition: all 0.2s linear;
      }

      :hover {
        cursor: pointer;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
          0px 30px 60px rgba(23, 0, 102, 0.5),
          inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
        transform: translateY(-5px);
      }
    }
  }

  .loading-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const PictureComponent = (props) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <StyledPic loading={loading}>
      <img src={props.url} alt="Project Image" onLoad={handleImageLoad} />
      {loading && (
        <div className="loading-text">
          <StyledLoading />
        </div>
      )}
    </StyledPic>
  );
};

export default PictureComponent;
