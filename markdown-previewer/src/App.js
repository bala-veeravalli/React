import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newText : marked(this.defaultMarkDown()),
    }
  }
  defaultMarkDown(){
    return (
      new String("Heading\n=======")
    );
  }
  handleChange(event) {
    this.setState({newText: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <textarea rows='25' ref="newText" defaultValue={this.defaultMarkDown()} onChange={(event) => this.handleChange(event)}></textarea>
        </div>
        <div className="output" dangerouslySetInnerHTML={{__html: marked(this.state.newText)}}>
        </div>
      </div>
    );
  }
}

export default App;
