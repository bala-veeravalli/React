import React, { Component } from 'react';
import {Map} from 'immutable';
import pieces from './Pieces/Pieces';
import Board from './Board';
import './App.css';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      pieces : Map(pieces.startingPieces()),
      isWhiteTurn : true,
      player: 'black',
      currentBox : null
    }
  }

  handleClick(move){
    var currentBox = this.state.currentBox;
    if(currentBox){
      var pieces = this.state.pieces;
      var tempPiece = pieces.get(currentBox);
      tempPiece.rowIndex = move[0];
      tempPiece.columnIndex = move[1];
      var tempPieces = pieces.set(move,tempPiece);
      tempPieces = tempPieces.delete(currentBox);
      this.setState({
        pieces : tempPieces,
        currentBox : null
      })
    }else{
      this.setState({
        currentBox : move
      })
    }
  }
  render() {
    return (
      <div className="game">
        <Board pieces={this.state.pieces} player={this.state.player} onClick={(move) => this.handleClick(move)}/>
      </div>
    );
  }
}

export default Game;
