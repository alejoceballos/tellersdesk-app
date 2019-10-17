import React from 'react';
import { storiesOf } from '@storybook/react';

import AttributeGroup from './attribute-group';

export const attributeGroup = {
  maxValue: 5,
  group: [
    {
      name: 'Strength',
      value: 3
    },
    {
      name: 'Dexterity',
      value: 2
    },
    {
      name: 'Stamina',
      value: 1
    }
  ]
};

storiesOf('AttributeGroup', module).add('default', () => (
  <AttributeGroup {...attributeGroup} />
));
