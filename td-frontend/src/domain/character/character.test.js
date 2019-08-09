import Character, {
  SOCIAL_ATTRIBUTES,
  MENTAL_ATTRIBUTES,
  PHYSICAL_ATTRIBUTES
} from './character';
import { forEach } from 'lodash';

describe('Character', function () {
  describe('On Character Change Callback', () => {
    const DEFAULT_VALUE = 1;
    const onCharacterChange = jest.fn();
    let character;

    beforeEach(() => {
      character = new Character({ onCharacterChange });

      character.attributes.strength.value = DEFAULT_VALUE;
      character.skills.academics.value = DEFAULT_VALUE;

      jest.resetAllMocks();
    });

    it('should run callback when changing attribute value', () => {
      const NEW_VALUE = 2;
      character.attributes.strength.value = NEW_VALUE;
      expect(onCharacterChange).toBeCalledWith(undefined, 'attribute', 'strength', NEW_VALUE);
    });

    it('should NOT run callback when attribute level value is left unchanged', () => {
      character.attributes.strength.value = DEFAULT_VALUE;
      expect(onCharacterChange).toBeCalledTimes(0);
    });

    it('should run callback when changing skill value', () => {
      const NEW_VALUE = 2;
      character.skills.academics.value = NEW_VALUE;
      expect(onCharacterChange).toBeCalledWith(undefined, 'skill', 'academics', NEW_VALUE);
    });

    it('should NOT run callback when skill level value is left unchanged', () => {
      character.skills.academics.value = DEFAULT_VALUE;
      expect(onCharacterChange).toBeCalledTimes(0);
    });
  });

  describe('Attributes', () => {
    describe('Get Group Name By Attribute', () => {
      it('should have all physical group attributes', () => {
        PHYSICAL_ATTRIBUTES.forEach(attribute => {
          const attributeGroupName = Character.getGroupNameByAttribute(attribute);
          expect(attributeGroupName).toEqual('physical');
        });
      });

      it('should have all social group attributes', () => {
        SOCIAL_ATTRIBUTES.forEach(attribute => {
          const attributeGroupName = Character.getGroupNameByAttribute(attribute);
          expect(attributeGroupName).toEqual('social');
        });
      });

      it('should have all mental group attributes', () => {
        MENTAL_ATTRIBUTES.forEach(attribute => {
          const attributeGroupName = Character.getGroupNameByAttribute(attribute);
          expect(attributeGroupName).toEqual('mental');
        });
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
        expect(attributes).toEqual(PHYSICAL_ATTRIBUTES);
      });

      it('should have attributes for social group', () => {
        const attributes = Character.getAttributesNamesByGroup('social');
        expect(attributes).toEqual(SOCIAL_ATTRIBUTES);
      });

      it('should have attributes for mental group', () => {
        const attributes = Character.getAttributesNamesByGroup('mental');
        expect(attributes).toEqual(MENTAL_ATTRIBUTES);
      });
    });

    describe('Get Attributes Total By Group', () => {
      const character = new Character({ featureMaxValue: 8 });

      const PHYSICAL_START = 0;
      const SOCIAL_START = 3;
      const MENTAL_START = 6;

      forEach(PHYSICAL_ATTRIBUTES,
        (attribute, index) => {
          character.attributes[attribute].value = PHYSICAL_START + index;
        }
      );

      forEach(SOCIAL_ATTRIBUTES,
        (attribute, index) => {
          character.attributes[attribute].value = SOCIAL_START + index;
        }
      );

      forEach(MENTAL_ATTRIBUTES,
        (attribute, index) => {
          character.attributes[attribute].value = MENTAL_START + index;
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
