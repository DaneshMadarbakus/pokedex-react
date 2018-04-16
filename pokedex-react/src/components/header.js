import React, { Component } from 'react';
import logo from '../images/logo.svg';
import Navbar from './sub_components/navbar.js';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <header>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Pokedex React</h1>
                    <p>
                        gotta catch em all
                    </p>
                </header>
                <Navbar />
            </div>
        );
    }
}

export default Header;
