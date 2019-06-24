import React from 'react';
import { shallow } from 'enzyme';
import CharacterSheet from "./character-sheet";

describe(
  'Render', () => {
    const character = {
      attributeMaxValue: 0,
      attributes: {}
    };

    const wrapper = shallow(<CharacterSheet character={character} />);

    it(
      'should render character sheet', () => {
        expect(wrapper.isEmptyRender()).toBeFalsy();
      }
    );

    it(
      'should render attributes panel', () => {
        const attrPanelAmount = 1;

        expect(wrapper.find({'data-qa': 'attributesPanel' })).toHaveLength(attrPanelAmount);
      }
    );
  }
);
