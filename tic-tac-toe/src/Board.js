import React, { Component } from 'react';
import Square from './Square';
import './App.css';

class Board extends Component{
    constructor(){
        super();
        this.state = {
            squares: Array(9).fill(null),
            totalMoves:  0,
            resultDecided: false
        };
    }

    processMove(squares){
        if(squares[0] && squares[0] === squares[0] && squares[0] === squares[2])
        return true;
        if(squares[3] && squares[4] === squares[3] && squares[3] === squares[5])
        return true;
        if(squares[6] && squares[7] === squares[6] && squares[6] === squares[8])
        return true;
        if(squares[0] && squares[3] === squares[0] && squares[0] === squares[6])
        return true;
        if(squares[1] && squares[4] === squares[1] && squares[1] === squares[7])
        return true;
        if(squares[2] && squares[5] === squares[2] && squares[2] === squares[8])
        return true;
        if(squares[0] && squares[4] === squares[0] && squares[0] === squares[8])
        return true;
        if(squares[2] && squares[4] === squares[2] && squares[2] === squares[6])
        return true;
        return false;
    }
    handleClick(index){
        var resultDecided = this.state.resultDecided;
        if(resultDecided)return;
        var totalMoves = this.state.totalMoves
        const squares = this.state.squares.slice();
        if(squares[index] === null)
            totalMoves++ % 2 === 1 ? squares[index]='O' : squares[index] = 'X';
        this.setState({squares});
        this.setState({totalMoves});
        console.log(totalMoves);
        resultDecided = totalMoves === squares.length ||  this.processMove(squares);
        this.setState({resultDecided});
    }
    reset(){
        var squares = Array(9).fill(null);
        var totalMoves =  0;
        var resultDecided = false;
        this.setState({squares});
        this.setState({totalMoves});
        this.setState({resultDecided});
    }
    renderSquare(i){
        return <Square onClick = {() => this.handleClick(i)}>{this.state.squares[i]}
                </Square>;
    }
    render(){
        return (
            <table className="Board">
                <thead>
                    <tr>
                        <th>
                            <h1 style={{display:"inline"}}>Tic Tac Toe</h1>
                            <button onClick={() => this.reset()} style={{float:"right"}}>Reset</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='row'>
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </tr>
                    <tr className='row'>
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </tr>
                    <tr className='row'>
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Board;