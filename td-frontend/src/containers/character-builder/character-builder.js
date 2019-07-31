import React, { useState } from 'react';
import Character from '../../models/character/character-model';
import CharacterSheet from '../../components/character/character-sheet';
import { cloneDeep } from 'lodash';

const onCharacterChange = (id, changedType, name, value) =>
  console.log('=> character-builder::onChange', { id, changedType, name, value });

const newCharacter = new Character({ onCharacterChange: onCharacterChange });

const CharacterBuilder = () => {
  console.log('=> CharacterBuilder');

  const [character, setCharacter] = useState(newCharacter);

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
