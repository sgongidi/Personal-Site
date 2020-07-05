import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from '../Navbar/Navbar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Sai Gongidi's personal website!</h1>
          <p>Full site coming soon</p>
          <p>Fun facts about Sai: He loves his mommy</p>
        </header>
      </div>
    );
  }
}
