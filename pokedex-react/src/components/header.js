import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import Navbar from './sub_components/navbar.js';

class Header extends Component {
    render() {
        return (
          <header>
            <div className="container nav-container">
              <Link to="/"><img src="https://static.giantbomb.com/uploads/scale_medium/0/6087/2437349-pikachu.png" alt="logo" /></Link>
              <Navbar />
            </div>
          </header>
        );
    }
}

export default Header;
