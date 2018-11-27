import React, { Component } from 'react';
import './App.css';
import ValidatonComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    content: {
      text: '',
      length: 0
    },
    chars: []
  }

  changeTextHandler = (event) => {
    const content = {...this.state.content};
    content.text = event.target.value;
    content.length = content.text.length;
    const chars = content.text.split('');
    this.setState({
      content: content,
      chars: chars
    });
  }

  deleteCharHandler = (charIndex) => {
    const chars = [...this.state.chars];
    chars.splice(charIndex, 1);
    const content = {...this.state.content};
    content.text = chars.join('');
    content.length = content.text.length;
    this.setState({
      content: content,
      chars: chars
    });
  }

  render() {

    const charComponents = this.state.chars.map((char, index) => {
      return (
        <CharComponent key={index} click={() => this.deleteCharHandler(index)} char={char} />
      )
    });

    return (
      <div className="App">
        <input type="text" onChange={this.changeTextHandler} value={this.state.content.text}/>
        <p>Length is: {this.state.content.length}</p>
        <ValidatonComponent length={this.state.content.length} />
        {charComponents}
      </div>
    );
  }
}

export default App;
