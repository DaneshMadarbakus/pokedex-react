import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pokemon from './pokemon.js';

class Pokedex extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Pokemon</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/pokemon-generation-I`}>Pokemon Generation I</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/pokemon-generation-II`}>Pokemon Generation II</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/pokemon-generation-III`}>Pokemon Generation III</Link>
                    </li>
                </ul>
                <Route path={`${this.props.match.url}/:topicId`} component={Pokemon} />
                <Route
                    exact
                    path={this.props.match.url}
                    render={() => <h3>Search for Pokemon</h3>}
                />
            </div>
        )
    }
}

export default Pokedex;