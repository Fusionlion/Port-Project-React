import React from "react";
import BigEpisodeButton from "../buttons/BigEpisodeButton";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";
import "./App.css";
import EpisodeListButton from "../buttons/EpisodeListButton";

const API = "https://api.tvmaze.com/seasons/1/episodes";

class Episodes extends React.Component {
  // Constructor

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div>
        {items.map((item) => (
          <Results>
            <EpisodeListButton
              number={item.number}
              title={item.name}
              subtitle={item.summary.substring(3)}
            />
          </Results>
        ))}
      </div>
    );
  }
}

export default Episodes;

const Results = styled.div`
  gap: 40px;
  flex: grid;
  margin-bottom: 10px;
`;
