import CharacterFeatureGroup from './character-feature-group';
import { isFunction } from '../../utils/utils';
import { includes, reduce } from 'lodash';

const MENTAL_ATTRIBUTES = [
  'intelligence',
  'wits',
  'resolve'
];

const PHYSICAL_ATTRIBUTES = [
  'strength',
  'dexterity',
  'stamina'
];

const SOCIAL_ATTRIBUTES = [
  'presence',
  'manipulation',
  'composure'
];

const ATTRIBUTES = [
  ...MENTAL_ATTRIBUTES,
  ...PHYSICAL_ATTRIBUTES,
  ...SOCIAL_ATTRIBUTES
];

const MENTAL_SKILLS = [
  'academics',
  'computer',
  'crafts',
  'investigation',
  'medicine',
  'occult',
  'politics',
  'science'
];

const PHYSICAL_SKILLS = [
  'athletics',
  'brawl',
  'drive',
  'firearms',
  'larceny',
  'stealth',
  'survival',
  'weaponry'
];

const SOCIAL_SKILLS = [
  'animal_ken',
  'empathy',
  'expression',
  'intimidation',
  'persuasion',
  'socialize',
  'streetwise',
  'subterfuge'
];

const SKILLS = [
  ...MENTAL_SKILLS,
  ...PHYSICAL_SKILLS,
  ...SOCIAL_SKILLS
];

class Character {
  attributes = {};
  skills = {};

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
      onFeatureChange: (name, value) => this.onFeatureChange('attribute', name, value),
      featureMaxValue,
      featuresNames: ATTRIBUTES
    });

    this.skills = new CharacterFeatureGroup({
      onFeatureChange: (name, value) => this.onFeatureChange('skill', name, value),
      featureMaxValue,
      featuresNames: SKILLS
    });
  }

  onFeatureChange(type, name, value) {
    if (isFunction(this.onCharacterChange)) {
      this.onCharacterChange(this.id, type, name, value);
    }
  }

  getAttributesTotalByGroup(group) {
    return reduce(
      Character.getAttributesNamesByGroup(group),
      (accumulator, attribute) => {
        return accumulator + this.attributes[attribute].value;
      },
      0
    );
  }

  static getGroupNameByAttribute = attribute =>
    includes(PHYSICAL_ATTRIBUTES, attribute) ? 'physical'
      : includes(SOCIAL_ATTRIBUTES, attribute) ? 'social'
        : includes(MENTAL_ATTRIBUTES, attribute) ? 'mental'
          : undefined;

  static getAttributesNamesByGroup = group =>
    group === 'physical' ? PHYSICAL_ATTRIBUTES
      : group === 'social' ? SOCIAL_ATTRIBUTES
        : group === 'mental' ? MENTAL_ATTRIBUTES
          : undefined;
}

export { ATTRIBUTES, SOCIAL_ATTRIBUTES, MENTAL_ATTRIBUTES, PHYSICAL_ATTRIBUTES };

export default Character;
