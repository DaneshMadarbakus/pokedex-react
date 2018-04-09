import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";


class Navbar extends Component {
    render() {
        return (
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/pokemon">Pokemon</Link>
                        </li>
                    </ul>
                    <hr />
                </div>
        )
    }
}

export default Navbar;