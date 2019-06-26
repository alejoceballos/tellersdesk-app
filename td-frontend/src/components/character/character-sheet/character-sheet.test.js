import React from 'react';
import { shallow } from 'enzyme';
import CharacterSheet from './character-sheet';

describe('Render', () => {
  const character = {
    attributes: { attributeMaxValue: 0 }
  };

  const wrapper = shallow(<CharacterSheet character={character} />);

  it('should render character sheet', () => {
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should render attributes panel', () => {
    const attrPanelAmount = 1;

    expect(wrapper.find({ 'data-qa': 'attributesPanel' })).toHaveLength(attrPanelAmount);
  });
});
