import CharacterFeatureGroup from './character-feature-group-model';
import { isFunction } from '../../utils/utils';

class Character {
  attributes = {};

  constructor({ id, onCharacterChange, featureMaxValue }) {
    this.id = id;
    this.onCharacterChange = onCharacterChange;

    this.attributes = new CharacterFeatureGroup({
      onFeatureChange: (name, value) => this.onAttributeChange(name, value),
      featureMaxValue,
      featuresNames: [
        'strength',
        'dexterity',
        'stamina',
        'presence',
        'manipulation',
        'composure',
        'intelligence',
        'wits',
        'resolve'
      ]
    });
  }

  onAttributeChange(name, value) {
    if (isFunction(this.onCharacterChange)) {
      this.onCharacterChange(this.id, 'attribute', name, value);
    }
  }
}

export default Character;
