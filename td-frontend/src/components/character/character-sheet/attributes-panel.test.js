import React from 'react';
import { shallow } from 'enzyme';
import AttributesPanel from "./attributes-panel";

describe(
  'Render', () => {
    const attributes = {
      strength: 2,
      dexterity: 3,
      stamina: 2,
      presence: 3,
      manipulation: 1,
      composure: 1,
      intelligence: 1,
      wits: 1,
      resolve: 1
    };
    const onAttributeClick = jest.fn();
    const wrapper = shallow(<AttributesPanel
      attributes={attributes}
      attributeMaxValue={0}
      onAttributeClick={onAttributeClick}
    />);

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
