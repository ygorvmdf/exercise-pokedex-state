import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super();

    this.nextPokemon = this.nextPokemon.bind(this);

    this.state = {
      index: 0,
      currentPokemon: pokemons
    }

  }
  nextPokemon() {
    if (this.state.index === this.state.currentPokemon.length - 1) {
      this.setState({
        index: 0
      })
    } else {
      this.setState((prevState, _props) => ({
        index: prevState.index + 1,
      }))
    }
  }
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.state.currentPokemon[this.state.index]} />
        <button onClick={this.nextPokemon}>Proximo Pokemon</button>
      </div>
    );
  }
}

export default App;