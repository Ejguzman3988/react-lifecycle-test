import React from "react";

function PokemonCard({ name, type, weight, frontImage, backImage }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>Weight: {weight}</p>
      <img alt={name + " image"} src={frontImage} />
      <br />
      <button>Add To Team</button>
    </div>
  );
}

export default PokemonCard;
