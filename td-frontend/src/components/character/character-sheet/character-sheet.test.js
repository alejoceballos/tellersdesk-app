import React from 'react';
import { shallow } from 'enzyme';
import CharacterSheet from './character-sheet';

describe('Render', () => {
  const character = {
    attributes: { featureMaxValue: 0 }
  };

  const wrapper = shallow(<CharacterSheet character={character} />);

  it('should render character sheet', () => {
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should render one attributes panel', () => {
    const attrPanelAmount = 1;

    expect(wrapper.find({ 'data-qa': 'attributes-panel' })).toHaveLength(attrPanelAmount);
  });
});
