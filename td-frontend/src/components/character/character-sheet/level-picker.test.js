import React from 'react';
import { shallow } from 'enzyme';
import LevelPicker from './level-picker';

describe('Render', () => {
  it('should render level picker', () => {
    const wrapper = shallow(<LevelPicker max={0} value={0} />);

    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should render levels according its values', () => {
    const max = 5;
    const level = 3;
    const wrapper = shallow(<LevelPicker max={max} value={level} />);

    expect(wrapper.find({ 'data-qa': 'level-picker-yes' })).toHaveLength(level);
    expect(wrapper.find({ 'data-qa': 'level-picker-no' })).toHaveLength(
      max - level
    );
  });

  it('should increase the level on clicking', () => {
    const max = 5;
    const level = 3;
    const level4 = 4;
    const doSomethingOnCLick = jest.fn();

    const wrapper = shallow(
      <LevelPicker max={max} value={level} onLevelClick={doSomethingOnCLick} />
    );

    wrapper
      .find('[data-qa="level-picker-no"]')
      .first()
      .simulate('click');

    expect(doSomethingOnCLick).toHaveBeenCalledWith(level4);
  });

  it('should decrease the level on clicking', () => {
    const max = 5;
    const level = 3;
    const level2 = 2;
    const doSomethingOnCLick = jest.fn();

    const wrapper = shallow(
      <LevelPicker max={max} value={level} onLevelClick={doSomethingOnCLick} />
    );

    const levelTwoIndex = 1;

    wrapper
      .find('[data-qa="level-picker-yes"]')
      .at(levelTwoIndex)
      .simulate('click');

    expect(doSomethingOnCLick).toHaveBeenCalledWith(level2);
  });

  it('should zero the level when clicking on the first level of an already level one picker', () => {
    const max = 5;
    const level = 1;
    const level0 = 0;
    const doSomethingOnCLick = jest.fn();

    const wrapper = shallow(
      <LevelPicker max={max} value={level} onLevelClick={doSomethingOnCLick} />
    );

    wrapper
      .find('[data-qa="level-picker-yes"]')
      .first()
      .simulate('click');

    expect(doSomethingOnCLick).toHaveBeenCalledWith(level0);
  });
});
