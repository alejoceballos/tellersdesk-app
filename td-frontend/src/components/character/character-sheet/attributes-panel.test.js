import React from 'react';
import { shallow } from 'enzyme';
import AttributesPanel from "./attributes-panel";

describe(
  'Render', () => {
    const wrapper = shallow(<AttributesPanel/>);

    it(
      'should render attributes panel', () => {
        expect(wrapper.isEmptyRender()).toBeFalsy();
      }
    );

    it(
      'should render level picker', () => {
        const attributesAmount = 9;

        expect(wrapper.find({'data-qa': 'levelPicker' })).toHaveLength(attributesAmount); }
    );
  }
);
