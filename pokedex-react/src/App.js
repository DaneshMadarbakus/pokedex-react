import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './components/pages/home.js';
import About from './components/pages/about.js';
import Pokemon from './components/pages/pokemon.js';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/pokemon" component={Pokemon} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
