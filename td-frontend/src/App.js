import React from 'react';
import './App.css';
import CharacterSheet from "./components/character/character-sheet/character-sheet";

class App extends React.Component {
  state = {

  };

  constructor(props) {
    super(props);
    console.log('C - [App] constructor');
  }

  static getDerivedStateFromProps(
    props, state
  ) {
    console.log(
      'C,U - [App] getDerivedStateFromProps', {props, state }
    );

    return true;
  }

  shouldComponentUpdate(
    nextProps, nextState
  ) {
    console.log(
      'U - [App] shouldComponentUpdate', {nextProps, nextState }
    );
  }

  render() {
    console.log('C - [App] render');
    return (
      <div className="App">
        <CharacterSheet />
      </div>
    );
  }

  getSnapshotBeforeUpdate(
    prevProps, prevState
  ) {
    console.log(
      'U - [App] getSnapshotBeforeUpdate', {prevProps, prevState }
    );
  }

  componentDidMount() {
    console.log('C - [App] componentDidMount');
  }

  componentDidUpdate() {
    console.log('U - [App] componentDidUpdate');
  }

}

export default App;
