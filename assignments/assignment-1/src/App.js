import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import './App.css';

class App extends Component {
  state = {
    userContents: [
      { username: 'usr1', first: 'Some content', second: 'Some other content' },
      { username: 'usr2', first: 'Some content 2', second: 'Some other content 2' }
    ]
  }

  userInputChangeHandler = (event) => {
    this.setState({
      userContents: [
        { username: event.target.value, first: 'Some content', second: 'Some other content' },
        { username: 'usr2', first: 'Some content 2', second: 'Some other content 2' }
      ]
    })
  }

  render() {
    return (
      <div className='App'>
        <UserInput onChangeHandler={this.userInputChangeHandler} value={this.state.userContents[0].username} />
        <UserOutput 
          username={this.state.userContents[0].username} 
          first={this.state.userContents[0].first} 
          second={this.state.userContents[0].second} />
        <UserOutput 
          username={this.state.userContents[1].username} 
          first={this.state.userContents[1].first} 
          second={this.state.userContents[1].second} />
      </div>
    );
  }
}

export default App;
