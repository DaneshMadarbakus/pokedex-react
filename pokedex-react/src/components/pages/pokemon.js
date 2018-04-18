import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Pokemon extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        console.log('proper', this.props.pokemonList);
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
            return <div>Error: {error.message}</div>;
        } else if (isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <ul>
                        {
                            pokemonList.map(pokemon => (
                                <li key={pokemon.name} onClick={console.log('hiya')}>
                                    {pokemon.name}
                                </li>
                        ))}
                    </ul>
                </div>

            )
        }
    }
}

export default Pokemon;
