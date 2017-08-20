import React, { Component } from 'react';
import {Map} from 'immutable';
import pieces from './Pieces/Pieces';
import Board from './Board';
import SettingsBoard from './SettingsBoard'
import './App.css';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      steps : [Map({})],
      isWhiteTurn : true,
      currentBox : null,
    }
  }

  render() {
    return (
      <div className="game">
        <Board pieces={this.state.steps[this.state.steps.length-1]} 
          player={this.state.player} onClick={(move) => this.handleMove(move)}
        />
        <SettingsBoard onClick={(player) => this.handleStartGame(player)}
          onUndo = {() => this.undoLastMove()}
        />
      </div>
    );
  }

  handleMove(move){
    var currentBox = this.state.currentBox;
    var steps = this.state.steps.slice(0,this.state.steps.length);
    var pieces = steps[steps.length - 1];
    if(currentBox){
      var tempPiece = pieces.get(currentBox);
      tempPiece.rowIndex = move[0];
      tempPiece.columnIndex = move[1];
      var tempPieces = pieces.set(move,tempPiece);
      tempPieces = tempPieces.delete(currentBox);
      steps.push(tempPieces);
      this.setState({
        steps : steps,
        currentBox : null,
        isWhiteTurn : !this.state.isWhiteTurn
      })
    }else{
      if(pieces.get(move) && pieces.get(move).isWhite === this.state.isWhiteTurn)
      {
        this.setState({
          currentBox : move
        })
      }
    }
  }

  handleStartGame(player){
    var steps = this.state.steps.slice(0,this.state.steps.length);
    steps.push(Map(pieces.startingPieces()));
    this.setState({
      steps,
      player
    });
  }

  undoLastMove(){
    if(!(this.state.steps.length > 2))return;
    this.setState({
      steps : this.state.steps.slice(0,this.state.steps.length - 1),
      isWhiteTurn : !this.state.isWhiteTurn
    })
  }

}

export default Game;
