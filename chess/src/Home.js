import {Jumbotron,Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';
import React from 'react';
import Game from './Game';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            player : '',
        }
    }
    render(){
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Noob-Chess</a>
                    </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <Jumbotron>
                    <Game/>
                </Jumbotron>
            </div>
        )
    }
}

export default Home;