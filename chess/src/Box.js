import React from 'react';

class Box extends React.Component{
    handleClick(){
        var box = this.props.columnIndex+this.props.rowIndex;
        this.props.onClick(box);
    }
    render(){
        const piece = this.props.piece ? <span>{this.props.piece.symbol}</span> : '';
        return (
            <div className={this.props.boxClass}
                 onClick={() => this.handleClick()}>
                {piece}
            </div>
        )
    }
}

export default Box;