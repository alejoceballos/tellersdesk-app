import React, { Component } from 'react';
import CharacterSheet from '../../components/character/character-sheet';
import { create, creationCost, update } from '../../services/character.service';
import styled from 'styled-components/macro';
import BorderedStyle from '../../components/bordered-style';

const CostContainer = styled(BorderedStyle)`
`;

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

  getCreationCost = () => creationCost(this.state.character);

  render() {
    console.log('=> CharacterBuilder');
    return (
      <>
        <CharacterSheet
          character={this.state.character}
          onAttributeClick={this.changeAttribute}
        />
        <CostContainer data-qa="total-cost">
          {`Cost: ${this.getCreationCost()}`}
        </CostContainer>
      </>
    );
  }
}

export default CharacterBuilder;
