import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Pokemon = ({ match }) => (
    <div>
        <h2>Pokemon</h2>
        <Router>
        <ul>
            <li>
                <Link to={`${match.url}/pokemon-red`}>Pokemon Red</Link>
            </li>
            <li>
                <Link to={`${match.url}/pokemon-blue`}>Pokemon Blue</Link>
            </li>
            <li>
                <Link to={`${match.url}/pokemon-yellow`}>Pokemon Yellow</Link>
            </li>
        </ul>
        </Router>
        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route
            exact
            path={match.url}
            render={() => <h3>Search for Pokemon</h3>}
        />
    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

export default Pokemon;