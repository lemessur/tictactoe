import React, { Component } from 'react';
import './App.css';
import 'normalize.css/normalize.css';

import Board from './Components/Board.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Tic Tac Toe</p>
        <Board />
      </div>
    );
  }
}

export default App;
