import React, { useState } from 'react';
import CharacterSheet from '../../components/character/character-sheet';
import { cloneDeep } from 'lodash';
import { create } from '../../services/character.service';

const onCharacterChange = (id, changedType, name, value) =>
  console.log('=> character-builder::onChange', { id, changedType, name, value });

const CharacterBuilder = () => {
  console.log('=> CharacterBuilder');

  const [character, setCharacter] = useState(create({ onCharacterChange: onCharacterChange }));

  const changeAttribute = (attribute, value) => {
    character.attributes[attribute].value = value;
    setCharacter(cloneDeep(character));
  };

  return (
    <CharacterSheet
      character={character}
      onAttributeClick={changeAttribute}
    />
  );
};

export default CharacterBuilder;
