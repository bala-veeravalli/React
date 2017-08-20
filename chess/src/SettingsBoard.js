import React from 'react';
import SelectPlayAsModal from './Components/SelectPlayAsModal';
import {Button} from 'react-bootstrap';

class SettingsBoard extends React.Component{
    render(){
        return (
            <div className='settingsBoard'>
            <br/>
                <SelectPlayAsModal onClick={this.props.onClick}/>
                <hr/>
                <Button onClick={this.props.onUndo}>Undo last move</Button>
            </div>
        )
    }
}

export default SettingsBoard;