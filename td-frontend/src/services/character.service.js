import Character from '../models/character/character-model';
import { get } from 'lodash';

export const create = params => new Character(params);

export const canUpdate = (
  instance,
  update,
  limits = {
    mental: 7,
    physical: 5,
    social: 3
  }) => {
  const groupName = Character.getGroupNameByAttribute(update.attribute);
  const attrCurrValue = get(instance, ['attributes', update.attribute, 'value']);
  const attrGroupCurrTotal = instance.getAttributesTotalByGroup(groupName);
  const attrGroupNextTotal = attrGroupCurrTotal - attrCurrValue + update.value;

  return attrGroupNextTotal <= limits[groupName];
};
