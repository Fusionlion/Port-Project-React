// Modal.js
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

export default function CustomModal() {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
        
    }
    return (
      <Wrapper>
        <button onClick={toggleModal} className="btn-modal">
          Open
        </button>

        {modal && (
          <div onClick={toggleModal}  className="modal">
            <div  className="overlay"></div>
            <div className="modal-content">
              <h2>HEllo People</h2>
              <button onClick={toggleModal}>Close</button>
              <p>
                Lorem ipsum dolor sit amet, consectetur adip inc Lorem ipsum
                dolor sit amet, consect
              </p>
            </div>
          </div>
        )}
      </Wrapper>
    );
}


const Wrapper = styled.div`
  height: 800px;
  background-color: red;

  p {
    color: white;
  }

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .overlay {
    background-color: #000000c9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 100vh;
    width: 100vw;
  }
  .modal-content {
    /* backdrop-filter: blur(103px);
     */
    background-color: white;
    color: black;
    padding: 20px;
    height: 90vh;
    width: 90vw;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }
`;


// gatsby develop