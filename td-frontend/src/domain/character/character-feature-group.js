import CharacterFeature from './character-feature';
import { isFunction } from '../../utils/utils';

class CharacterFeatureGroup {
  featureMaxValue = CharacterFeatureGroup.DEFAULT.MAX_VALUE;

  constructor({ onFeatureChange, featuresNames, featureMaxValue }) {
    this.onFeatureChange = onFeatureChange;

    if (featureMaxValue) {
      this.featureMaxValue = featureMaxValue;
    }

    if (featuresNames) {
      featuresNames.forEach(name => {
        this[name] = new CharacterFeature({
          name: name,
          value: 0,
          onLevelChange: (name, value) => this.onLevelChange(name, value),
          featureMaxValue: this.featureMaxValue
        });
      });
    }
  }

  onLevelChange(name, value) {
    if (isFunction(this.onFeatureChange)) {
      return this.onFeatureChange(name, value);
    }
  }
}

CharacterFeatureGroup.DEFAULT = {
  MAX_VALUE: 5
};

export default CharacterFeatureGroup;
