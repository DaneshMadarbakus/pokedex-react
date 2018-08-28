import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pokemon from '../sub_components/pokemon.js';
import PokemonSearch from '../sub_components/pokemonSearch.js';

class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noSearchMade: true,
            error: null,
            isLoaded: false,
            generation: 1,
            firstType: 'Not selected',
            secondType: 'None',
            pokemonList: []
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
 
        this.setState({
          noSearchMade: false
        });
        // const searchString = this.state.generation ? `https://pokeapi.co/api/v2/generation/${this.state.generation}` : `https://pokeapi.co/api/v2/pokemon`;
        const searchString = `https://pokeapi.co/api/v2/generation/${this.state.generation}`;

        fetch(searchString)
            .then(res => res.json())
            .then(
            (result) => {
                // console.log(result);
                this.setState({
                    isLoaded: true,
                    pokemonList: result.pokemon_species.reverse()
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                })
            }
          );
    }

    render() {
        return (
            <section className="pokedex">
                <h1>Pokedex</h1>

                <div className="left-content">
                  <PokemonSearch generation={this.state.generation} firstType={this.state.firstType} secondType={this.state.secondType} onFormChange={this.handleFormChange} onFormSubmit={this.handleFormSubmit} />

                  <Pokemon noSearchMade={this.state.noSearchMade} error={this.state.error} isLoaded={this.state.isLoaded} pokemonList={this.state.pokemonList} />
                </div>
            </section>
        )
    }
}

export default Pokedex;
