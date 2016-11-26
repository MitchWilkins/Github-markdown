import React, { Component } from 'react';
import logo from './logo.svg';
import Markdown from './Markdown'
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GitHub Markdown</h2>
        </div>
        <Markdown />
      </div>
    );
  }
}

export default App;
