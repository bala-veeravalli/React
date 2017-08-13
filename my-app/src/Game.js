import React from 'react';
import Board from './Board';
import GameInfo from './GameInfo';
import './App.css';

class Game extends React.Component {

  constructor(){
    super();
    this.state = {
        history : [
          {
            squares : Array(9).fill(null),
          }
        ],
        xIsNext : true,
        currentStep : 0
    }
  }

  handleClick(index){
        const xIsNext = this.state.xIsNext;
        var history = this.state.history.slice(0,this.state.currentStep+1);
        const currentStep = this.state.currentStep;
        const squares = history[currentStep].squares.slice();
        if(squares[index] || this.calculateWinner(squares))
        return;
        squares[index] = xIsNext ? 'X' : 'O';
        history.push({squares});
        this.setState({history});
        this.setState({xIsNext: !xIsNext});
        this.setState({currentStep : this.state.currentStep+1});
  }

  calculateWinner(squares){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (var i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
  }

  jumpTo(stepNumber){
    const currentStep = this.state.currentStep;
      this.setState({
        xIsNext : stepNumber % 2 === 0
      });
      this.setState({currentStep : stepNumber});
  }

  render() {
    const squares = this.state.history[this.state.currentStep].squares.slice();
    const winnner = this.calculateWinner(squares);
    const status = winnner ? 'Winner : ' + winnner : 'Next Player : ' + (this.state.xIsNext ? 'X' : 'O');
    return (
      <div className="game">
        <div className="game-board">
          <Board value={this.state.history[this.state.currentStep]} onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
        <div className="status">{status}</div>
            <GameInfo history={this.state.history} onClick = {(i) => this.jumpTo(i)}/>
        </div>
      </div>
    );
  }
}
export default Game;
