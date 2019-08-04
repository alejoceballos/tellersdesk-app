import CharacterFeatureGroup from './character-feature-group-model';
import { isFunction } from '../../utils/utils';
import { includes, reduce } from 'lodash';

const PHYSICAL = [
  'strength',
  'dexterity',
  'stamina'
];

const SOCIAL = [
  'presence',
  'manipulation',
  'composure'
];

const MENTAL = [
  'intelligence',
  'wits',
  'resolve'
];

const ATTRIBUTES = [
  ...PHYSICAL,
  ...SOCIAL,
  ...MENTAL
];

class Character {
  attributes = {};

  constructor(
    {
      id,
      onCharacterChange,
      featureMaxValue
    } = {
      id: undefined,
      onCharacterChange: () => {},
      featureMaxValue: 5
    }) {
    this.id = id;
    this.onCharacterChange = onCharacterChange;

    this.attributes = new CharacterFeatureGroup({
      onFeatureChange: (name, value) => this.onAttributeChange(name, value),
      featureMaxValue,
      featuresNames: ATTRIBUTES
    });
  }

  onAttributeChange(name, value) {
    if (isFunction(this.onCharacterChange)) {
      this.onCharacterChange(this.id, 'attribute', name, value);
    }
  }

  getAttributesTotalByGroup = group => reduce(
    Character.getAttributesNamesByGroup(group),
    (accumulator, attribute) => {
      return accumulator + this.attributes[attribute].value;
    },
    0
  );

  static getGroupNameByAttribute = attribute =>
    includes(PHYSICAL, attribute) ? 'physical'
      : includes(SOCIAL, attribute) ? 'social'
        : includes(MENTAL, attribute) ? 'mental'
          : undefined;

  static getAttributesNamesByGroup = group =>
    group === 'physical' ? PHYSICAL
      : group === 'social' ? SOCIAL
        : group === 'mental' ? MENTAL
          : undefined;
}

export { ATTRIBUTES, SOCIAL, MENTAL, PHYSICAL };

export default Character;
