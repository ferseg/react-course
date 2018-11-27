import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person'
// The components that throws errors should be wrapped with this component
import ErrorBoundary from './ErrorBoundary/ErrorBoundary' 

class App extends Component {
  state = {
    persons: [
      { id: 'idx1', name: 'Fernando', age: '25'},
      { id: 'idx2', name: 'Some other name', age: '25'}
    ]
  }

  changeNameHandler = (event, index) => {
    const persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({persons: persons});
  }
  
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const isShowing = this.state.isShowing;
    this.setState({isShowing: !isShowing});
  }

  render() {

    let persons = null;
    if (this.state.isShowing) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                years={person.age}
                changed={(event) => this.changeNameHandler(event, index)} />
            );
          })}
        </div>
      );
    }

    return (
      <div className={styles.App}>
        <h1>Hi! I'm a react App</h1>
        <button onClick={this.togglePersonsHandler}>Toggle persons!</button>
        {persons}
      </div>
    );
  }
}

export default App;
