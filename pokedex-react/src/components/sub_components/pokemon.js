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
                <div className="row">
                        {
                            pokemonList.map(pokemon => (
                                <div className="col-6 col-sm-4 col-md-3" key={pokemon.name} onClick={() => this.pokemonFunction(pokemon)}>
                                  <Link to={`/pokedex/${pokemon.name}`}>
                                    <p>{pokemon.name}</p>
                                  </Link>
                                </div>
                        ))}

                </div>

            )
        }
    }
}

export default Pokemon;
