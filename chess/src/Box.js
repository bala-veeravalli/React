import React from 'react';

class Box extends React.Component{
    handleClick(){
        var box = this.props.columnIndex+this.props.rowIndex;
        this.props.onClick(box);
    }
    render(){
        const piece = this.props.piece ? <span>{this.props.piece.symbol}</span> : '';
        const rowIndex = this.props.rowIndex;
        const columnIndex = this.props.columnIndex.charCodeAt(0) - 97;
        return (
            <div className="box" 
                style={{backgroundColor : (rowIndex + columnIndex) % 2 ? "lightslategray" : "white"}}
                 onClick={() => this.handleClick()}>
                {piece}
            </div>
        )
    }
}

export default Box;