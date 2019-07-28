import React from 'react';
import { shallow } from 'enzyme';
import { titleCase } from 'voca';

import AttributeGroup from './attribute-group';

describe('Attribute Group', () => {
  const maxValue = 5;
  const onAttributeClick = jest.fn();
  const group = [
    { name: 'name1', value: 1 },
    { name: 'name2', value: 2 },
    { name: 'name3', value: 3 }
  ];

  const wrapper = shallow(
    <AttributeGroup
      maxValue={maxValue}
      group={group}
      onAttributeClick={onAttributeClick}
    />);

  beforeEach(() => {
    onAttributeClick.mockReset();
  });

  it('should render attributes group', () => {
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should render three level pickers', () => {
    expect(wrapper.find({ 'data-qa': 'level-picker' })).toHaveLength(group.length);
  });

  it('should capitalize names', () => {
    const attributesNames = wrapper.find({ 'data-qa': 'attribute-name' });
    group.forEach(
      (attribute, index) => expect(attributesNames.at(index).text()).toEqual(titleCase(attribute.name))
    );
  });

  it('should render total attributes', () => {
    expect(wrapper.find({ 'data-qa': 'attributes-total' }).text()).toEqual('Total: 6');
  });
});
