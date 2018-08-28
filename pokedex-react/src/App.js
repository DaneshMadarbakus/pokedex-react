import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './components/pages/home.js';
import About from './components/pages/about.js';
import Pokedex from './components/pages/pokedex.js';
import SinglePokemon from './components/pages/singlepokemon.js';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <main className="container">
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route exact path="/pokedex" component={Pokedex} />
                      <Route path="/pokedex/:pokemon" component={SinglePokemon} />
                    </main>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
