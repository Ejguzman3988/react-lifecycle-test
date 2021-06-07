import React from "react";

function NavBar(props) {
  return (
    <div id="header">
      <h1 onClick={props.handlePage} id="pokemons">
        React Pokemons
      </h1>
      <h1 onClick={props.handlePage} id="team">
        View Team
      </h1>
      <br />
      <br />
    </div>
  );
}

export default NavBar;
