import React, { PureComponent } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons'
// The components that throws errors should be wrapped with this component
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import WithClasses from '../hoc/WithClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  state = {
    persons: [
      { id: 'idx1', name: 'Fernando', age: '25' },
      { id: 'idx2', name: 'Some other name', age: '25' }
    ],
    isShowing: false,
    isAuthenticated: false
  }

  changeNameHandler = (event, index) => {
    const persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const isShowing = this.state.isShowing;
    this.setState({ isShowing: !isShowing });
  }

  toogleAuthHandler = () => {
    this.setState(prevState => {
      return {
        isAuthenticated: !prevState.isAuthenticated
      }
    });
  }

  render() {

    let persons = null;
    if (this.state.isShowing) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler} />
      );
    }

    return (
      <WithClasses styles={styles.App}>
        <h1>Hi! I'm a react App</h1>
        <button onClick={this.togglePersonsHandler}>Toggle persons!</button>
        <button onClick={this.toogleAuthHandler}>Login</button>
        <AuthContext.Provider value={this.state.isAuthenticated} >
          {persons}
        </AuthContext.Provider>
      </WithClasses>
    );
  }
}

export default App;
