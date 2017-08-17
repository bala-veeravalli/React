import React, { Component } from 'react';
import Immutable, {List} from 'immutable';
import pieces from './Pieces/Pieces';
import Board from './Board';
import './App.css';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      pieces : pieces.startingPieces(),
      
    }
  }

  render() {
    return (
      <div className="game">
        <Board pieces={this.state.pieces}/>
      </div>
    );
  }
}

export default Game;
