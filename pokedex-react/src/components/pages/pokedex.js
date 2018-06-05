import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pokemon from './pokemon.js';
import PokemonSearch from '../sub_components/pokemonSearch.js';

class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noSearchMade: true,
            error: null,
            isLoaded: false,
            generation: undefined,
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
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log('hiya');
        this.setState({
          noSearchMade: false
        });
        const searchString = this.state.generation ? `https://pokeapi.co/api/v2/generation/${this.state.generation}` : `https://pokeapi.co/api/v2/pokemon`;
        console.log(searchString);
        fetch(searchString)
            .then(res => res.json())
            .then(
            (result) => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    pokemonList: result.pokemon_species
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
            <div>
                <h2>Pokedex</h2>
                
                <PokemonSearch generation={this.state.generation} firstType={this.state.firstType} secondType={this.state.secondType} onFormChange={this.handleFormChange} onFormSubmit={this.handleFormSubmit} />

                <Pokemon noSearchMade={this.state.noSearchMade} error={this.state.error} isLoaded={this.state.isLoaded} pokemonList={this.state.pokemonList} />
            </div>
        )
    }
}

export default Pokedex;
