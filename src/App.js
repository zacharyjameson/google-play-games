import React, { Component } from "react";
import Game from "./game/game";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      genres: "",
      sort: "",
      error: null,
    };
  }

  setGenre(genres) {
    this.setState({
      genres,
    });
  }

  setSort(sort) {
    this.setState({
      sort,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const baseUrl = "http://localhost:8000/googleplay";
    const params = [];
    if (this.state.genres) {
      params.push(`genre=${this.state.genres}`);
    }
    if (this.state.sort) {
      params.push(`sort=${this.state.sort}`);
    }
    const query = params.join("&");
    const url = `${baseUrl}?${query}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        this.setState({
          games: data,
          error: null,
        });
      })
      .catch((err) => {
        this.setState({
          error: "Sorry, could not get games at this time.",
        });
      });
  }

  render() {
    const games = this.state.games.map((game, i) => {
      return <Game {...game} key={i} />;
    });
    return (
      <main className="App">
        <h1>GooglePlay Games</h1>
        <div className="search">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label htmlFor="genre">Genre: </label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={this.state.genres}
              onChange={(e) => this.setGenre(e.target.value)}
            />
            <br />
            <label htmlFor="sort">Sort by: </label>
            <select
              id="sort"
              name="sort"
              onChange={(e) => this.setSort(e.target.value)}
            >
              <option value="">None</option>
              <option value="Rating">Rating</option>
              <option value="App">App</option>
            </select>
            <br />
            <button type="submit">Search</button>
          </form>
          <div className="App_error">{this.state.error}</div>
        </div>
        {games}
      </main>
    );
  }
}

export default App;
