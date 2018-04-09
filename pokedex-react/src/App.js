import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './images/logo.svg';
import './App.css';
import Header from './components/header.js';
import Home from './components/pages/home.js';
import About from './components/pages/about.js';
import Pokemon from './components/pages/pokemon.js';

class App extends Component {
  render() {
      return (
          <div>
              <Header />
              <Router>
                  <div>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/pokemon" component={Pokemon} />
                </div>
              </Router>
          </div>
          //<Footer />
    );
  }
}

export default App;
