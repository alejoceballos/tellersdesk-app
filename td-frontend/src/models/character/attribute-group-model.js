import Attribute from './attribute-model';
import { isFunction } from '../../utils/utils';

class AttributeGroup {
  attributeMaxValue = AttributeGroup.DEFAULT.MAX_VALUE;

  attributesNames = [
    'strength',
    'dexterity',
    'stamina',
    'presence',
    'manipulation',
    'composure',
    'intelligence',
    'wits',
    'resolve'
  ];

  constructor({ onAttributeChange, attributeMaxValue }) {
    this.onAttributeChange = onAttributeChange;

    if (attributeMaxValue) {
      this.attributeMaxValue = attributeMaxValue;
    }

    this.attributesNames.forEach(name => {
      this[name] = new Attribute({
        name: name,
        value: 0,
        onLevelChange: (name, value) => this.onLevelChange(name, value),
        attributeMaxValue: this.attributeMaxValue
      });
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
