import React, { Component } from 'react';
import './App.css';

class Square extends Component{
    
    render(){
        return (
            <td className="square" onClick={this.props.onClick}><h1 className="val">{this.props.children}</h1></td>
        )
    }
}

export default Square;