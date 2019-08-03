import React from 'react';
import CharacterBuilder from './character-builder';
import { shallow } from 'enzyme';
import CharacterSheet from '../../components/character/character-sheet';

describe('Character Builder', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CharacterBuilder />);
  });

  it('should render a character sheet', () => {
    expect(wrapper.find(CharacterSheet).length).toBe(1);
  });
});
