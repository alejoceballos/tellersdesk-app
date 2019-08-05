import React, { Component } from 'react';
import CharacterSheet from '../../components/character/character-sheet';
import { create, update } from '../../services/character.service';

class CharacterBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: create()
    };
  }

  changeAttribute = (attribute, value) => {
    const character = this.state.character;
    const updated = update(character, { attribute, value });
    this.setState({ character: updated });
  };

  render() {
    console.log('=> CharacterBuilder');
    return (
      <CharacterSheet
        character={this.state.character}
        onAttributeClick={this.changeAttribute}
      />
    );
  }
}

export default CharacterBuilder;
