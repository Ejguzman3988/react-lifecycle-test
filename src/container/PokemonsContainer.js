import React, { Component } from "react";
import FilterBar from "../component/FilterBar";
import PokemonCard from "../component/PokemonCard";

class PokemonsContainer extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    const search = e.target.value;
    this.setState({ search });
  };

  displayPokemon() {
    const filteredPokemon = this.props.pokemons.filter((p) =>
      p.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return filteredPokemon.map((pokemon) => (
      <PokemonCard
        key={pokemon.id}
        name={pokemon.name}
        type={pokemon.poke_type}
        id={pokemon.id}
        frontImage={pokemon.front_image}
        backImage={pokemon.back_image}
        weight={pokemon.weight}
        addPoke={this.props.addPoke}
        caught={pokemon.caught}
      />
    ));
  }
  render() {
    return (
      <div>
        <FilterBar handleChange={this.handleChange} /> <br />
        <br />
        {this.displayPokemon()}
      </div>
    );
  }
}

export default PokemonsContainer;
