import React, { Component } from 'react';
import Board from './Board';
import './App.css';

class Game extends Component {
  render() {
    return (
      <div>
        <div className="game">
          <Board/>
        </div>
      </div>
    );
  }
}

export default Game;
