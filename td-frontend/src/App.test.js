import React from 'react';
import App from './App';
import { shallow } from "enzyme";

describe(
  'App', () => {
    it(
      'renders without crashing', () => {
        const wrapper = shallow(<App />);
        const timesItAppears = 1;

        expect(wrapper.find('.App')).toHaveLength(timesItAppears);
      }
    );
  }
);
