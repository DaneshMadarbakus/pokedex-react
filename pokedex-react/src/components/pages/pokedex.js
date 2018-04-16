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
            generation: 'All Generations',
            firstType: 'Not selected',
            secondType: 'None',
            pokemonList: []
        };
    }
    render() {
        return (
            <div>
                <h2>Pokedex</h2>
                <PokemonSearch generation={this.state.generation} firstType={this.state.firstType} secondType={this.state.secondType} />
                <Pokemon />
            </div>
        )
    }
}

export default Pokedex;
