import React, { Component } from 'react';
import { createStore } from 'redux'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: props.logo
        }
    }

    // example for reducx
    counter(state = 0, action) {
      switch(action.type) {
        case 'INCREMENT':
        return state + 1;

        case 'DECREMENT':
        return state - 1;

        default:
        return state;
      }
    }



    render() {
      // Redux is used for data manipulation asynchronousely and to provide single source of truth
      let store = createStore(this.counter);

      store.subscribe(() => {
        console.log(store.getState());
      });

      store.dispatch({ type: 'INCREMENT' })
      store.dispatch({ type: 'INCREMENT' })
      store.dispatch({ type: 'DECREMENT' })

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