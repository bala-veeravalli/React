import React from 'react';
import Box from './Box';

class Board extends React.Component{
    renderBoard(){
        var arr1 = new Array(8).fill(null);
        var arr2 = new Array(8).fill(null);
        const pieces = this.props.pieces;
        var board = arr1.map(function (x,rowIndex) {
            return arr2.map(function (y,colIndex) {
                var piece = pieces.find(function (piece) {
                    return piece.columnIndex === colIndex && piece.rowIndex === rowIndex;
                })
                return (<Box rowIndex={rowIndex} columnIndex={colIndex} piece={piece}/>)
            })
        })
        return (
            <div className='board'>
                {board}
            </div>
        )
    }
    render(){
        const board = this.renderBoard();
        return board;
    }
}

export default Board;