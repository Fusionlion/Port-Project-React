import React, { useState } from "react";
import BookCard from "./Cards/BookCard";
import styled from "styled-components";

export default function TrendingCards(props) {
  // WEHEN START IS CLICKED ON THE CARD
  const handleStartClick = () => {
    props.clicked();
  };
  return (
    <Wrapper>
      <BookTitles>Books & Research</BookTitles>
      <BooksWrapper>
        <BookCard
          key="0"
          cardFont="Grivas Personal Use"
          title="Java Eli5"
          desc="--- --- --- --- ----- ----"
          imageSrc="https://cdn.dribbble.com/userupload/7917165/file/original-2ee851cb5a4743e4d0a1771d3f8f98ef.png?resize=1504x1128"
          num="0"
          buttonOff="off"
          centerText="center"
          onClick={handleStartClick}
        />
        <BookCard
          key="1"
          cardFont="Nasi Podeng"
          title="Java Eli5"
          desc="--- --- --- --- ----- ----"
          imageSrc="https://cdn.dribbble.com/userupload/11646234/file/original-b3acc991281af850055263cbbad2d651.png?resize=2048x1021&vertical=center"
          num="1"
          buttonOff="off"
          centerText="center"
          onClick={handleStartClick}
        />
        <BookCard
          key="2"
          cardFont="Grivas Personal Use"
          title="Java Eli5"
          desc="--- --- --- --- ----- ----"
          imageSrc="https://cdn.dribbble.com/userupload/3271720/file/original-176c25fd991eb0e6ea23875d304d56d1.jpg?resize=2400x1800"
          num="2"
          buttonOff="off"
          centerText="center"
          onClick={handleStartClick}
        />
      </BooksWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  // Your styles here
  padding: 0px 20px;
  margin-top: 40px;
  padding-bottom: 20px;
`;
const BookTitles = styled.div`
  // Your styles here
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  color: white;
`;

const BooksWrapper = styled.div`
  // Your styles here
  display: flex;
  gap: 10px;
  overflow: scroll;
  padding-bottom: 20px;
`;
