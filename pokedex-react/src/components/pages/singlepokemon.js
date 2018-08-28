import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

class SinglePokemon extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pokemonInfo: null,
        errorMessage: null,
        isLoading: false,
        nextPokemon: null,
        previousPokemon: null
      };
      this.loadInfo();
    }

    loadInfo() {
        const searchString = `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemon}`;
        fetch(searchString)
            .then(res => res.json())
            .then(
            (result) => {

                this.setState({
                    pokemonInfo: result,
                    isLoaded: true
                });

                let nextPokemonSearch;
                let previousPokemonSearch;
                if (result.id === 802) {
                    nextPokemonSearch = `https://pokeapi.co/api/v2/pokemon/1`;
                } else {
                    nextPokemonSearch = `https://pokeapi.co/api/v2/pokemon/${result.id + 1}`;
                }
                if (result.id === 1) {
                    previousPokemonSearch = `https://pokeapi.co/api/v2/pokemon/802`;
                } else {
                    previousPokemonSearch = `https://pokeapi.co/api/v2/pokemon/${result.id - 1}`;
                }

                this.assignNextPokemon(nextPokemonSearch);
                this.assignPreviousPokemon(previousPokemonSearch);
            },
            (error) => {
                this.setState({
                    pokemonInfo: false,
                    isLoaded: true,
                    errorMessage: error
                });
            }); 
    }

    assignNextPokemon(nextPokemonSearch) {
        console.log('nextpokemon');
      fetch(nextPokemonSearch)
      .then(res => res.json())
      .then(
      (result) => {
          this.setState({
              nextPokemon: result.name
          });
          // console.log(this.state);
      });
    }

    assignPreviousPokemon(previousPokemonSearch) {
        console.log('prevpokemon');
      fetch(previousPokemonSearch)
      .then(res => res.json())
      .then(
      (result) => {
          this.setState({
              previousPokemon: result.name
          });
          // console.log(this.state);
      });
    }

    render() {

          if (this.state.pokemonInfo) {
            return (
            <section className="single-pokemon">
                <h1>{this.props.match.params.pokemon}</h1>
                <img src={this.state.pokemonInfo.sprites.front_default} alt="pokemon image" />
                <p>Pokemon id: {this.state.pokemonInfo.id}</p>
                <div className="next-previous">
                  <Link to={`/pokedex/${this.state.previousPokemon}`} onClick={this.loadInfo}>Prev Pokemon</Link>
                  <Link to={`/pokedex/${this.state.nextPokemon}`} onClick={this.loadInfo}>Next Pokemon</Link>
                </div>
            </section>
            )
          } else if (!this.state.isLoading) {
            return (
              <section className="single-pokemon">
              <h1>Loading...</h1>
          </section>
          )
          } else {
            return (
              <section className="single-pokemon">
                <div className="left-content">
                  <p>Error: {this.state.errorMessage}</p>
                </div>
              </section>
              )
          }
    }
}

export default SinglePokemon;
