import React from 'react';
import Box from './Box';

class Board extends React.Component{
    renderBoard(){
        var arr1 = [1,2,3,4,5,6,7,8];
        var arr2 = ['a','b','c','d','e','f','g','h'];
        var boardClass  = (this.props.player === 'white') ? 'whiteBoard' : 'blackBoard';
        const pieces = this.props.pieces;
        var handleClick = this.props.onClick;
        var board = arr1.map(function (x,rowIndex) {
            return arr2.map(function (y,colIndex) {
                var box = y+x;
                var piece = pieces.get(box);
                return (<Box rowIndex={x} columnIndex={y} piece={piece} onClick={handleClick}/>)
            })
        })

        return (
            <div className='boardContainer'>
                <div className={boardClass}>
                    {board}
                </div>
            </div>
        )
    }
    render(){
        const board = this.renderBoard();
        return board;
    }
}

export default Board;