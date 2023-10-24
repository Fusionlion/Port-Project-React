import React from "react";
import BigEpisodeButton from "../buttons/BigEpisodeButton";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";
import "./App.css";

const API = "https://api.tvmaze.com/shows/1";

class App extends React.Component {
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
        <Results>
          <BigEpisodeButton
            title={items.name}
            subtitle={items.type}
            image={items.image.medium}
          />
        </Results>
      </div>
    );
  }
}

export default App;

const Results = styled.div``;
