import React from 'react';

class Box extends React.Component{
    constructor(){
        super();
        this.state = {
            piece : undefined,

        }
    }

    render(){
        const piece = this.props.piece ? <span>{this.props.piece.symbol}</span> : '';
        return (
            <div className="box" style={{backgroundColor : (this.props.rowIndex + this.props.columnIndex) % 2 ? "green" : "white"}}>
                {piece}
            </div>
        )
    }
}

export default Box;