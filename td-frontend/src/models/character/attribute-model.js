import { isFunction } from '../../utils/utils';

class Attribute {
  constructor({ onLevelChange, value, name, attributeMaxValue }) {
    this.onLevelChange = onLevelChange;
    this.name = name;
    this.attributeMaxValue = attributeMaxValue;
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    const previousValue = this._value;
    this._value = val > this.attributeMaxValue ? this.attributeMaxValue : val;

    if (isFunction(this.onLevelChange) && previousValue !== this._value) {
      this.onLevelChange(
        this.name, this._value
      );
    }
  }
}

export default Attribute;
