import React from 'react';

function GameInfo(props) {
    return (
        <ul>
            {
                props.history.map(function (step,move) {
                    return (move === 0) ? 
                    <li key={move}><a href="#" onClick={() => props.onClick(move)}>#Game Start </a></li>
                    : <li key={move}><a href="#" onClick={() => props.onClick(move)}>#Go to Move: {move}</a></li>;
                })
            }
        </ul>
    )
}

export default GameInfo;