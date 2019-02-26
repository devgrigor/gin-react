import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: props.logo
        }
    }

    render() {
        return (
            <header className="App-header">
          <img src={this.state.logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More than React
          </a>
        </header>
        );
    }
}

export default Header;