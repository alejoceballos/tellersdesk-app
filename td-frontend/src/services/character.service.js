import Character from '../models/character/character-model';

export const create = params => new Character(params);

export const canUpdate = (
  instance,
  update,
  limits = {
    mental: 7,
    physical: 5,
    social: 3
  }) => {
  const group = Character.getGroupByAttribute(update.attribute);
};
