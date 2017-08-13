import React from 'react';
import Square from './Square';
import './App.css';

class Board extends React.Component {
    
    renderSquare(i) {
        return <Square value={this.props.value.squares[i]} onClick={() => this.props.onClick(i)}/>;
    }

    render() {
        // const result = this.calculateWinner(this.state.squares);

        // const status = result ? result : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        return (
        <div>
            <div className="status">{}</div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }

}


export default Board;