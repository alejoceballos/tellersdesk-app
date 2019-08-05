import Character, { ATTRIBUTES, SOCIAL, MENTAL, PHYSICAL } from './character';
import { forEach } from 'lodash';

describe('Character', function () {
  describe('On Character Change Callback', () => {
    const DEFAULT_VALUE = 1;
    const onCharacterChange = jest.fn();
    let character;

    beforeEach(() => {
      character = new Character({ onCharacterChange });
      character.attributes.strength.value = DEFAULT_VALUE;
      jest.resetAllMocks();
    });

    it('should run callback when changing attribute value', () => {
      const NEW_VALUE = 2;
      character.attributes.strength.value = NEW_VALUE;
      expect(onCharacterChange).toBeCalledWith(undefined, 'attribute', 'strength', NEW_VALUE);
    });

    it('should NOT run callback when level value is left unchanged', () => {
      character.attributes.strength.value = DEFAULT_VALUE;
      expect(onCharacterChange).toBeCalledTimes(0);
    });
  });

  describe('Attributes', () => {
    describe('Get Group Name By Attribute', () => {
      it('should have strength attribute in physical group', () => {
        const attributeGroupName = Character.getGroupNameByAttribute('strength');
        expect(attributeGroupName).toEqual('physical');
      });

      it('should have dexterity attribute in physical group', () => {
        const attributeGroupName = Character.getGroupNameByAttribute('dexterity');
        expect(attributeGroupName).toEqual('physical');
      });

      it('should have stamina attribute in physical group', () => {
        const attributeGroupName = Character.getGroupNameByAttribute('stamina');
        expect(attributeGroupName).toEqual('physical');
      });

      it('should have presence attribute in social group', () => {
        const attributeGroupName = Character.getGroupNameByAttribute('presence');
        expect(attributeGroupName).toEqual('social');
      });

      it('should have manipulation attribute in social group', () => {
        const attributeGroupName = Character.getGroupNameByAttribute('manipulation');
        expect(attributeGroupName).toEqual('social');
      });

      it('should have composure attribute in social group', () => {
        const attributeGroupName = Character.getGroupNameByAttribute('composure');
        expect(attributeGroupName).toEqual('social');
      });

      it('should have intelligence attribute in mental group', () => {
        const attributeGroupName = Character.getGroupNameByAttribute('intelligence');
        expect(attributeGroupName).toEqual('mental');
      });

      it('should have wits attribute in mental group', () => {
        const attributeGroupName = Character.getGroupNameByAttribute('wits');
        expect(attributeGroupName).toEqual('mental');
      });

      it('should have resolve attribute in mental group', () => {
        const attributeGroupName = Character.getGroupNameByAttribute('resolve');
        expect(attributeGroupName).toEqual('mental');
      });

      it('should not have a group for invalid attribute', () => {
        const attributeGroupName = Character.getGroupNameByAttribute('invalid');
        expect(attributeGroupName).toBeUndefined();
      });
    });

    describe('Get Attributes Names By Group', () => {
      it('should not have attributes for invalid group', () => {
        const attributes = Character.getAttributesNamesByGroup('invalid');
        expect(attributes).toBeFalsy();
      });

      it('should have attributes for physical group', () => {
        const attributes = Character.getAttributesNamesByGroup('physical');
        expect(attributes).toEqual(PHYSICAL);
      });

      it('should have attributes for social group', () => {
        const attributes = Character.getAttributesNamesByGroup('social');
        expect(attributes).toEqual(SOCIAL);
      });

      it('should have attributes for mental group', () => {
        const attributes = Character.getAttributesNamesByGroup('mental');
        expect(attributes).toEqual(MENTAL);
      });
    });

    describe('Get Attributes Total By Group', () => {
      const character = new Character({ featureMaxValue: 8 });

      forEach(ATTRIBUTES,
        (attribute, index) => {
          character.attributes[attribute].value = index;
        }
      );

      it('should be 0 the total for attributes for an invalid group', () => {
        const total = character.getAttributesTotalByGroup('invalid');
        expect(total).toEqual(0);
      });

      it('should be 3 the total for physical attributes', () => {
        const total = character.getAttributesTotalByGroup('physical');
        expect(total).toEqual(3);
      });

      it('should be 12 the total for social attributes', () => {
        const total = character.getAttributesTotalByGroup('social');
        expect(total).toEqual(12);
      });

      it('should be 21 the total for mental attributes', () => {
        const total = character.getAttributesTotalByGroup('mental');
        expect(total).toEqual(21);
      });
    });
  });
});