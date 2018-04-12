import React, { Component } from 'react';
import logo from '../images/logo.svg';
import Navbar from './sub_components/navbar.js';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Pokedex React</h1>
                </header>
                <p className="App-intro">
                    gotta catch em all
                </p>
                <Navbar />
            </div>
        );
    }
}

export default Header;
