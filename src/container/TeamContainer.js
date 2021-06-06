import React from "react";

function TeamContainer(props) {
  const pokemonArray = this.props.team.map((pokemon) => {
    return (
      <li key={pokemon.id}>
        {pokemon.name} - {pokemon.poke_type}
      </li>
    );
  });

  return <ul id="TeamContainer">{pokemonArray}</ul>;
}

export default TeamContainer;
