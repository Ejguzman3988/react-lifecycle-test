import { Component } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import PokemonsContainer from "./container/PokemonsContainer";
import TeamContainer from "./container/TeamContainer";

class App extends Component {
  state = {
    page: "pokemons",
    pokemons: [],
    team: [],
    loading: true,
  };

  componentDidMount() {
    fetch("http://localhost:3001")
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          loading: false,
          pokemons: data,
        })
      );
  }

  handlePage = (e) => {
    this.setState({
      page: e.target.id,
    });
  };

  addPoke = (id) => {
    const pokemon = this.state.pokemons.find((p) => p.id === id);
    pokemon.caught = true;
    this.setState(
      (prevState) => {
        let prevTeam = prevState.team;
        const indexOfPoke = prevTeam.indexOf(pokemon);
        if (prevTeam.includes(pokemon)) {
          pokemon.caught = false;
          return {
            team: [
              ...prevTeam.splice(0, indexOfPoke),
              ...prevTeam.splice(indexOfPoke + 1),
            ],
          };
        } else {
          return {
            team: [...prevState.team, pokemon],
          };
        }
      },
      () => console.log(this.state)
    );
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
        <NavBar handlePage={this.handlePage} />
        {this.state.page === "pokemons" ? (
          <PokemonsContainer
            pokemons={this.state.pokemons}
            addPoke={this.addPoke}
          />
        ) : (
          <TeamContainer team={this.state.team} />
        )}
      </div>
    );
  }
}

export default App;
