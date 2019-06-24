import Character from '../models/character-model';

const onChange = (
  changedType, name, value
) => console.log(
  '=> character-service::onChange', {changedType, name, value}
);

const character = new Character({onCharacterChange: onChange});

export default character;
