import React from "react";

function TeamContainer(props) {
  const pokemonArray = props.team.map((pokemon) => {
    return (
      <li key={pokemon.id}>
        {pokemon.name} - {pokemon.poke_type}
      </li>
    );
  });

  return (
    <ul id="TeamContainer">
      {pokemonArray.length == 0 ? (
        <>
          <h1>You have no Pokemon on your team. </h1>
          <img src="https://media.tenor.com/images/7c355668e41f8cf511fe30c8483379d0/tenor.gif" />
        </>
      ) : (
        pokemonArray
      )}
    </ul>
  );
}

export default TeamContainer;
