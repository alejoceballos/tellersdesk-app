import AttributeGroup from './attribute-group-model';
import { isFunction } from '../../utils/utils';

class Character {
  attributes = {};

  constructor({ id, onCharacterChange, attributeMaxValue }) {
    this.id = id;
    this.onCharacterChange = onCharacterChange;

    this.attributes = new AttributeGroup({
      onAttributeChange: (name, value) => this.onAttributeChange(name, value),
      attributeMaxValue
    });
  }

  onAttributeChange(name, value) {
    if (isFunction(this.onCharacterChange)) {
      this.onCharacterChange(this.id, 'attribute', name, value);
    }
  }
}

export default Character;
