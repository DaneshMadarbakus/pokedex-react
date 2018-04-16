import React, { Component } from 'react';
import logo from '../images/logo.svg';
import Navbar from './sub_components/navbar.js';

class Footer extends Component {
    render() {
        return (
            <footer>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Pokedex React Footer</h1>
                <Navbar />
            </footer>
        );
    }
}

export default Footer;