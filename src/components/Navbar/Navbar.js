import React, {Component} from 'react';
import './Navbar.css'
import About from './About';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                <ul className="navbar-nav">
                    <About />
                </ul>
            </nav>
        );
    }
}