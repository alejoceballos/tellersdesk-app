import React from 'react';
import { shallow } from 'enzyme';
import AttributeGroup from './attribute-group';

describe('Attribute Group', () => {
  const maxValue = 5;
  const onAttributeClick = jest.fn();
  const group = [
    { name: '1', value: 1 },
    { name: '2', value: 2 },
    { name: '3', value: 3 }
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
});
