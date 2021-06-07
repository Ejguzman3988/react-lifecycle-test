import React, { Component, PureComponent } from "react";

class PokemonCard extends PureComponent {
  state = {
    caught: this.props.caught,
  };

  handleClick = (e) => {
    this.props.addPoke(this.props.id);
    this.setState((prevState) => ({ caught: !prevState.caught }));
  };
  componentDidUpdate() {
    console.log("UPDATED", this.props.id);
  } // NEVER want to call setState UNLESS you have it inside of a condition

  render() {
    return (
      <div
        className="card"
        style={{
          backgroundColor: `var(--${this.props.type})`,
          backgroundImage: `var(--${
            this.state.caught ? "caught" : "unCaught"
          })`,
        }}
      >
        <h3>{this.props.name}</h3>
        <p>Type: {this.props.type}</p>
        <p>Weight: {this.props.weight}</p>
        <button onClick={this.handleClick}>
          {this.state.caught ? "Remove From Team" : "Add To Team"}
        </button>
        <br />
        <img alt={this.props.name + " image"} src={this.props.frontImage} />
      </div>
    );
  }
}

export default PokemonCard;
