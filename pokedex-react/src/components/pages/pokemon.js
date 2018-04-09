import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Pokemon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Pokemon</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/pokemon-red`}>Pokemon Red</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/pokemon-blue`}>Pokemon Blue</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/pokemon-yellow`}>Pokemon Yellow</Link>
                    </li>
                </ul>
                <Route path={`${this.props.match.url}/:topicId`} component={PokemonGame} />
                <Route
                    exact
                    path={this.props.match.url}
                    render={() => <h3>Search for Pokemon</h3>}
                />
            </div>
        )
    }
}

class PokemonGame extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.match.params.topicId}</h3>
            </div>
        )
    }
}

export default Pokemon;