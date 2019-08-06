import React from 'react';
import CharacterBuilder from './character-builder';
import { shallow } from 'enzyme';
import CharacterSheet from '../../components/character/character-sheet';
import { cloneDeep } from 'lodash';

describe('Character Builder', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CharacterBuilder />);
  });

  it('should render a character sheet', () => {
    expect(wrapper.find(CharacterSheet).length).toBe(1);
    expect(wrapper.find('[data-qa="total-cost"]').text()).toEqual('Cost: 0');
  });

  it("should calculate character's cost", () => {
    const character = wrapper.instance().state.character;
    character.attributes.strength.value = 2;
    wrapper.instance().setState({ character: cloneDeep(character) });
    expect(wrapper.find('[data-qa="total-cost"]').text()).toEqual('Cost: 1');
  });
});
