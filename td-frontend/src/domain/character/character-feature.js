import { isFunction } from '../../utils/utils';

class CharacterFeature {
  constructor({ onLevelChange, value, name, featureMaxValue }) {
    this.onLevelChange = onLevelChange;
    this.name = name;
    this.featureMaxValue = featureMaxValue;
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    const previousValue = this._value;
    this._value = val > this.featureMaxValue ? this.featureMaxValue : val;

    if (isFunction(this.onLevelChange) && previousValue !== this._value) {
      this.onLevelChange(
        this.name, this._value
      );
    }
  }
}

export default CharacterFeature;
