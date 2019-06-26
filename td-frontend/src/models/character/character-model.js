import AttributeGroup from './attribute-group-model';

class Character {
  attributes = {};

  constructor({ onCharacterChange, attributeMaxValue }) {
    this.onCharacterChange = onCharacterChange;

    this.attributes = new AttributeGroup({
      onAttributeChange: (name, value) => this.onAttributeChange(name, value),
      attributeMaxValue
    });
  }

  onAttributeChange(name, value) {
    if (this.onCharacterChange instanceof Function) {
      this.onCharacterChange(
        'attribute', name, value
      );
    }
  }
}

export default Character;
