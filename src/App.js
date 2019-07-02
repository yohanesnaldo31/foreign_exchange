import React, { Component } from 'react';
import './App.css';
import ExchangeRates from './containers/ExchangeRates';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExchangeRates />
      </div>
      
    );
  }
}

export default App;
