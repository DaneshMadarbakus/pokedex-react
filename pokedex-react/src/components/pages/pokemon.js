import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.pokemonFunction = this.pokemonFunction.bind(this);
    }

    pokemonFunction (pokemon){
      console.log(pokemon);
    }

    render() {
        const { noSearchMade, error, isLoaded, pokemonList } = this.props;
        if (noSearchMade) {
            return (
                <div>
                    <h3>Search for some pokemon!</h3>
                </div>
            )
        } else if (error) {
        return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
        } else if (!isLoaded) {
        return (<div>Loading...</div>);
        } else {
            return (
                <div>
                    <ul>
                        {
                            pokemonList.map(pokemon => (
                                <li key={pokemon.name} onClick={() => this.pokemonFunction(pokemon)}>
                                    <p>{pokemon.name}</p>
                                    <p>{pokemon.name}</p>
                                </li>
                        ))}
                    </ul>
                </div>

            )
        }
    }
}

export default Pokemon;
