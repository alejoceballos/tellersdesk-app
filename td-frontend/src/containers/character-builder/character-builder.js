import React, { PureComponent } from 'react';
import CharacterSheet from '../../components/character/character-sheet';
import { create, creationCost, update } from '../../services/character.service';
import styled from 'styled-components/macro';
import BorderedStyle from '../../components/bordered-style';

const CostContainer = styled(BorderedStyle)`
`;

class CharacterBuilder extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      character: create()
    };
  }

  handleAttributeClick = (attribute, value) => {
    const character = this.state.character;
    const updated = update(character, { attribute, value });
    this.setState({ character: updated });
  };

  getCreationCost = () => creationCost(this.state.character);

  render() {
    return (
      <>
        <CharacterSheet
          character={this.state.character}
          onAttributeClick={this.handleAttributeClick}
        />
        <CostContainer data-qa="total-cost">
          {`Cost: ${this.getCreationCost()}`}
        </CostContainer>
      </>
    );
  }
}

export default CharacterBuilder;
