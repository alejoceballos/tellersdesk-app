import React from 'react';
import { shallow } from 'enzyme';
import SidePanel from './side-panel';

describe('SidePanel', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SidePanel />);
    const timesItAppears = 1;

    expect(wrapper.find('[data-qa-id="side-panel"]')).toHaveLength(timesItAppears);
  });
});
