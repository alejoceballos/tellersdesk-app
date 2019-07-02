import Character from '../models/character/character-model';

const onChange = (id, changedType, name, value) =>
  console.log('=> character-service::onChange', { id, changedType, name, value });

const character = new Character({ onCharacterChange: onChange });

export default character;
