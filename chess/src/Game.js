import React, { Component } from 'react';
import { List, Map} from 'immutable';
import pieces from './Pieces/Pieces';
import Board from './Board';
import SettingsBoard from './SettingsBoard'
import './App.css';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      steps : List([Map({})]),
      isWhiteTurn : true,
      currentBox : null,
      moves : List()
    }
  }

  render() {
    return (
      <div className="game">
        <Board pieces={this.state.steps.last()}
          player={this.state.player} onClick={(move) => this.handleMove(move)}
          currentBox = {this.state.currentBox}
          lastMove = {this.state.moves.last()}
        />
        <SettingsBoard onClick={(player) => this.handleStartGame(player)}
          onUndo = {() => this.undoLastMove()}
        />
      </div>
    );
  }

  handleMove(move){
    var currentBox = this.state.currentBox;
    if(move === currentBox)return;
    var pieces = this.state.steps.last();
    if(currentBox){
      var tempPiece = pieces.get(currentBox);
      tempPiece.rowIndex = move[0];
      tempPiece.columnIndex = move[1];
      var tempPieces = pieces.set(move,tempPiece);
      tempPieces = tempPieces.delete(currentBox);
      this.setState({
        steps : this.state.steps.push(tempPieces),
        currentBox : null,
        isWhiteTurn : !this.state.isWhiteTurn,
        moves : this.state.moves.push({
          from : currentBox,
          to : move
        })
      })
      console.log(this.state.moves);
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
    var steps = this.state.steps;
    this.setState({
      steps : steps.push(Map(pieces.startingPieces())),
      player
    });
  }

  undoLastMove(){
    if(!(this.state.steps.size > 2))return;
    this.setState({
      steps : this.state.steps.slice(0,this.state.steps.size - 1),
      isWhiteTurn : !this.state.isWhiteTurn,
      moves : this.state.moves.slice(0,this.state.moves.size - 1),
    })
  }

}

export default Game;
