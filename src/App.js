import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super();

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterFires = this.filterFires.bind(this);
    this.psychicFires = this.psychicFires.bind(this);

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

  filterFires() {
    const firePkemons = pokemons.filter(pokemon => pokemon.type === 'Fire')
    this.setState({
      currentPokemon: firePkemons
    })
  }

  psychicFires() {
    const psychicPkemons = pokemons.filter(pokemon => pokemon.type === 'Psychic')
    this.setState({
      currentPokemon: psychicPkemons
    })
  }
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.state.currentPokemon[this.state.index]} />
        <button onClick={this.nextPokemon}>Proximo Pokemon</button>
        <button onClick={this.filterFires}>Fire element</button>
        <button onClick={this.psychicFires}>Psychic element</button>
      </div>
    );
  }
}

export default App;