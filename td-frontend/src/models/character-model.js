const DEFAULT = {
  MAX_VALUE: 5
};

class Attribute {

  constructor({onLevelChange, value, name, attributeMaxValue}) {
    this.onLevelChange = onLevelChange;
    this.name = name;
    this.attributeMaxValue = attributeMaxValue;
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val > this.attributeMaxValue ? this.attributeMaxValue : val;

    if (this.onLevelChange instanceof Function) {
      this.onLevelChange(
        this.name, this._value
      );
    }
  }

}

class AttributeGroup {

  attributeMaxValue = DEFAULT.MAX_VALUE;

  constructor({onAttributeChange, attributeMaxValue}) {
    this.onAttributeChange = onAttributeChange;

    if (attributeMaxValue) {
      this.attributeMaxValue = attributeMaxValue;
    }

    this.strength = new Attribute({
      name: 'strength',
      value: 0,
      onLevelChange:  (
        name, value
      ) => this.onLevelChange(
        name, value
      ),
      attributeMaxValue: this.attributeMaxValue
    });

    this.dexterity = new Attribute({
      name: 'dexterity',
      value: 0,
      onLevelChange:  (
        name, value
      ) => this.onLevelChange(
        name, value
      ),
      attributeMaxValue: this.attributeMaxValue
    });

    this.stamina = new Attribute({
      name: 'stamina',
      value: 0,
      onLevelChange:  (
        name, value
      ) => this.onLevelChange(
        name, value
      ),
      attributeMaxValue: this.attributeMaxValue
    });

    this.presence = new Attribute({
      name: 'presence',
      value: 0,
      onLevelChange:  (
        name, value
      ) => this.onLevelChange(
        name, value
      ),
      attributeMaxValue: this.attributeMaxValue
    });

    this.manipulation = new Attribute({
      name: 'manipulation',
      value: 0,
      onLevelChange:  (
        name, value
      ) => this.onLevelChange(
        name, value
      ),
      attributeMaxValue: this.attributeMaxValue
    });

    this.composure = new Attribute({
      name: 'composure',
      value: 0,
      onLevelChange:  (
        name, value
      ) => this.onLevelChange(
        name, value
      ),
      attributeMaxValue: this.attributeMaxValue
    });

    this.intelligence = new Attribute({
      name: 'intelligence',
      value: 0,
      onLevelChange:  (
        name, value
      ) => this.onLevelChange(
        name, value
      ),
      attributeMaxValue: this.attributeMaxValue
    });

    this.wits = new Attribute({
      name: 'wits',
      value: 0,
      onLevelChange:  (
        name, value
      ) => this.onLevelChange(
        name, value
      ),
      attributeMaxValue: this.attributeMaxValue
    });

    this.resolve = new Attribute({
      name: 'resolve',
      value: 0,
      onLevelChange: (
        name, value
      ) => this.onLevelChange(
        name, value
      ),
      attributeMaxValue: this.attributeMaxValue
    });
  }

  onLevelChange(
    name, value
  ) {
    if (this.onAttributeChange instanceof Function) {
      return this.onAttributeChange(
        name, value
      );
    }
  }

}

class Character {

  attributes = {};

  constructor({onCharacterChange, attributeMaxValue}) {
    this.onCharacterChange = onCharacterChange;

    this.attributes = new AttributeGroup({
      onAttributeChange: (
        name, value
      ) => this.onAttributeChange(
        name, value
      ),
      attributeMaxValue
    });
  }

  onAttributeChange(
    name, value
  ) {
    if (this.onCharacterChange instanceof Function) {
      this.onCharacterChange(
        'attribute', name, value
      );
    }
  }

}

export default Character;
