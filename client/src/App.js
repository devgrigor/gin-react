import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './page-parts/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo}></Header>
      </div>
    );
  }
}

export default App;
