import React from 'react';
import { shallow } from 'enzyme';
import AttributesPanel from './attributes-panel';

describe('Render', () => {
  const attributes = {
    strength: { value: 2 },
    dexterity: { value: 3 },
    stamina: { value: 2 },
    presence: { value: 3 },
    manipulation: { value: 1 },
    composure: { value: 1 },
    intelligence: { value: 1 },
    wits: { value: 1 },
    resolve: { value: 1 },
  };

  const onAttributeClick = jest.fn();

  const wrapper = shallow(
    <AttributesPanel
      attributes={attributes}
      attributeMaxValue={0}
      onAttributeClick={onAttributeClick}
    />);

  it('should render attributes panel', () => {
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should render attributes title', () => {
    const attributesTitle = wrapper.find({ 'data-qa': 'attribute-title' });
    expect(attributesTitle).toHaveLength(1);
    expect(attributesTitle.text()).toEqual('Attributes');
  });

  it('should render attribute group', () => {
    const attributesGroups = wrapper.find({ 'data-qa': 'attribute-group' });
    expect(attributesGroups).toHaveLength(3);
  });
});
