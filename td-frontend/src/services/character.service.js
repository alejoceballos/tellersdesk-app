import Character from '../models/character/character-model';
import { get, cloneDeep } from 'lodash';

const DEFAULT = {
  ATTR_GROUP_LIMIT: {
    mental: 7,
    physical: 5,
    social: 3
  }
};

export const create = params => new Character(params);

export const creationCost = instance => {
  // TODO: Implement this function
  return false;
};

export const canUpdate = (instance, update, limits = DEFAULT.ATTR_GROUP_LIMIT) => {
  const groupName = Character.getGroupNameByAttribute(update.attribute);
  const attrCurrValue = get(instance, ['attributes', update.attribute, 'value']);
  const attrGroupCurrTotal = instance.getAttributesTotalByGroup(groupName);
  const attrGroupNextTotal = attrGroupCurrTotal - attrCurrValue + update.value;

  return attrGroupNextTotal <= limits[groupName];
};

export const update = (instance, update, limits = DEFAULT.ATTR_GROUP_LIMIT) => {
  if (canUpdate(instance, update, limits)) {
    const clone = cloneDeep(instance);
    clone.attributes[update.attribute].value = update.value;
    return clone;
  }

  return instance;
};
