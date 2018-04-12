import React, { Component } from 'react';
import logo from '../images/logo.svg';
import Navbar from './sub_components/navbar.js';

class Footer extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-footer">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Pokedex React Footer</h1>
                </header>
                <Navbar />
            </div>
        );
    }
}

export default Footer;