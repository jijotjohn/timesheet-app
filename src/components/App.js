import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import VolunteerList from './VolunteerList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            Welcome to TimeSheet React app!
        </header>
        <VolunteerList />
      </div>
    );
  }
}

export default App;
