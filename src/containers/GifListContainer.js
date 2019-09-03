import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  submitHandler = (query = "dogs") => {
    // TODO
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
        .then(resp => resp.json())
        .then(data => {
          // ?
          this.setState;
        })
    );
  };

  render() {
    return (
      <div>
        {/* ? */}
        <GifSearch onSubmit={this.submitHandler} />
        {/* Pass data from fetch as a prop */}
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
