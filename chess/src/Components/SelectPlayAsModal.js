import React from 'react';
import {Button,Modal} from 'react-bootstrap';

class SelectPlayAsModal extends React.Component{
    constructor(){
        super();
        this.state = {
            showModal : false
        }
    }
    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    handleClick(player){
        this.props.onClick(player);
        this.close();
    }
    render() {    
    return (
      <div>
        <Button
          bsSize="large"
          onClick={() => this.open()}
        >
        Start new game
        </Button>

        <Modal show={this.state.showModal} onHide={() => this.close()}>
          <Modal.Header closeButton>
            <Modal.Title>Play as</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <button className='piece' onClick={() => this.handleClick('white')}>{String.fromCharCode(9817)}</button>
            <button className='piece' onClick={() => this.handleClick('black')}>{String.fromCharCode(9823)}</button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default SelectPlayAsModal;