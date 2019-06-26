import Attribute from './attribute-model';
import { isFunction } from '../../utils/utils';

class AttributeGroup {
  attributeMaxValue = AttributeGroup.DEFAULT.MAX_VALUE;

  constructor({ onAttributeChange, attributeMaxValue }) {
    this.onAttributeChange = onAttributeChange;

    if (attributeMaxValue) {
      this.attributeMaxValue = attributeMaxValue;
    }

    this.strength = new Attribute({
      name: 'strength',
      value: 0,
      onLevelChange: (name, value) => this.onLevelChange(name, value),
      attributeMaxValue: this.attributeMaxValue
    });

    this.dexterity = new Attribute({
      name: 'dexterity',
      value: 0,
      onLevelChange: (name, value) => this.onLevelChange(name, value),
      attributeMaxValue: this.attributeMaxValue
    });

    this.stamina = new Attribute({
      name: 'stamina',
      value: 0,
      onLevelChange: (name, value) => this.onLevelChange(name, value),
      attributeMaxValue: this.attributeMaxValue
    });

    this.presence = new Attribute({
      name: 'presence',
      value: 0,
      onLevelChange: (name, value) => this.onLevelChange(name, value),
      attributeMaxValue: this.attributeMaxValue
    });

    this.manipulation = new Attribute({
      name: 'manipulation',
      value: 0,
      onLevelChange: (name, value) => this.onLevelChange(name, value),
      attributeMaxValue: this.attributeMaxValue
    });

    this.composure = new Attribute({
      name: 'composure',
      value: 0,
      onLevelChange: (name, value) => this.onLevelChange(name, value),
      attributeMaxValue: this.attributeMaxValue
    });

    this.intelligence = new Attribute({
      name: 'intelligence',
      value: 0,
      onLevelChange: (name, value) => this.onLevelChange(name, value),
      attributeMaxValue: this.attributeMaxValue
    });

    this.wits = new Attribute({
      name: 'wits',
      value: 0,
      onLevelChange: (name, value) => this.onLevelChange(name, value),
      attributeMaxValue: this.attributeMaxValue
    });

    this.resolve = new Attribute({
      name: 'resolve',
      value: 0,
      onLevelChange: (name, value) => this.onLevelChange(name, value),
    });
  }

  onLevelChange(name, value) {
    if (isFunction(this.onAttributeChange)) {
      return this.onAttributeChange(name, value);
    }
  }
}

AttributeGroup.DEFAULT = {
  MAX_VALUE: 5
};

export default AttributeGroup;
