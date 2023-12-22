import React from "react";
import styled from "styled-components";
import CourseCard from "../buttons/CourseCard";
import topicData from "../../data/data.json";
import { useState } from "react";
function CardList({ theCardClicked }) {
  const [activeCard, setActiveCard] = useState("");
  const [visibleCards, setVisibleCards] = useState(7); // Initial number of visible cards
  const [loading, setLoading] = useState(false); // Loading state

  const handleCardClick = (cardClicked,cardNum) => {
    theCardClicked(cardClicked, cardNum);
    setActiveCard(cardClicked);
  };

  const data = topicData.map((record) => {
    return record;
  });

  const showMoreCards = () => {
    setLoading(true); // Set loading to true when more cards are being loaded
    // Simulate an asynchronous operation (e.g., fetching more data)
    setTimeout(() => {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + 7);
      setLoading(false); // Set loading to false when the operation is complete
    }, 1000); // Adjust the timeout as needed
  };

  return (
    <Wrapper>
      {data.slice(0, visibleCards).map((print) => {
        return (
          <CourseCard
            key={print.num} // Add a unique key to each card
            title={print.title}
            desc={print.desc}
            imageSrc={print.image}
            num={print.num}
            click={() => handleCardClick(print.title,print.num)}
          />
        );
      })}

      {/* Show more card */}
      {loading ? (
        // Display the loading spinner while loading
        <div className="show-more">
          <div className="loader"></div>
          loading...
        </div>
      ) : (
        // Show more card when not loading
        visibleCards < data.length && (
          <CourseCard
            key="23" // Add a unique key to each card
            title=""
            desc="Click start to show more sections."
            imageSrc=""
            num="00"
            click={showMoreCards}
          />
        )
      )}
    </Wrapper>
  );
}

export default CardList;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  .show-more {
    width: 250px;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: white;
    justify-content: center;
    align-items: center;
  }
  .loader {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
