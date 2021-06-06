import { Component } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import PokemonsContainer from "./container/PokemonsContainer";
import TeamContainer from "./container/TeamContainer";

class App extends Component {
  state = {
    page: "Pokemons",
    pokemons: [],
    team: [],
    loading: true,
  };

  render() {
    // If we are still loading return this instead!!
    if (this.state.loading) {
      return (
        <div className="App">
          <NavBar />
          <h1>Loading...</h1>
        </div>
      );
    }

    // If we aren't loading then return this
    return (
      <div className="App">
        <NavBar />
        {this.state.page === "Pokemons" ? (
          <PokemonsContainer pokemons={this.state.pokemons} />
        ) : (
          <TeamContainer team={this.state.team} />
        )}
      </div>
    );
  }
}

export default App;
