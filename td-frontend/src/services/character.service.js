import Character, { ATTRIBUTES } from '../domain/character/character';
import { reduce, get, cloneDeep } from 'lodash';

const DEFAULT = {
  ATTR_GROUP_LIMIT: {
    mental: 7,
    physical: 5,
    social: 3
  }
};

export const create = params => new Character(params);

export const creationCost = instance => {
  return getTotalAttributesCreationCost(instance.attributes);
};

const getTotalAttributesCreationCost = attributes =>
  reduce(
    ATTRIBUTES,
    (accumulator, attribute) => accumulator + getAttributeCreationCost(attributes[attribute].value),
    0
  );

const getAttributeCreationCost = value =>
  value <= 1 ? 0
    : value < 5 ? value - 1
      : 5 + (value - 5) * 2;

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
