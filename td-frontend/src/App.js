import React from 'react';
import './App.css';
import character from './services/character-service';
import { cloneDeep } from 'lodash';

import CharacterSheet from './components/character/character-sheet/character-sheet';

class App extends React.Component {
  state = {
    character
  };

  onAttributeClick(attribute, value) {
    const clone = cloneDeep(this.state.character);
    clone.attributes[attribute].value = value;
    this.setState({ character: clone });
  }

  render() {
    return (
      <div className="App">
        <CharacterSheet
          character={this.state.character}
          onAttributeClick={(attribute, value) => this.onAttributeClick(attribute, value)}
        />
      </div>
    );
  }
}

export default App;
