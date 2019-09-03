import React, { Component } from "react";

class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return;
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text"></input>
      </form>
    </div>;
  }
}

export default GifSearch;
