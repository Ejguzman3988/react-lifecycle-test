import React from "react";
import FilterBar from "../component/FilterBar";
import PokemonCard from "../component/PokemonCard";

function PokemonsContainer(props) {
  return (
    <div>
      <FilterBar />
      {props.pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          type={pokemon.poke_type}
          id={pokemon.id}
          frontImage={pokemon.front_image}
          backImage={pokemon.back_image}
        />
      ))}
    </div>
  );
}

export default PokemonsContainer;
