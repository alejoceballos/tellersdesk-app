import React, { Component } from 'react';
import CharacterSheet from '../../components/character/character-sheet';
import { cloneDeep } from 'lodash';
import { create } from '../../services/character.service';

class CharacterBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: create()
    };
  }

  changeAttribute = (attribute, value) => {
    const clone = cloneDeep(this.state.character);
    clone.attributes[attribute].value = value;
    this.setState({ character: clone });
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
