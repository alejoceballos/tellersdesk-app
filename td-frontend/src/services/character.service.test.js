import { create, canUpdate, update, creationCost } from './character.service';
import Character, { SOCIAL_ATTRIBUTES } from '../domain/character/character';
import { forEach } from 'lodash';

describe('Character Service', () => {
  let subject;

  describe('Create', () => {
    beforeEach(() => {
      subject = create();
    });

    it('should create a brand new character', () => {
      expect(subject instanceof Character).toBeTruthy();
      expect(subject.id).toBeUndefined();
    });
  });

  describe('Can Update', () => {
    const groupsLimits = {
      mental: 3,
      physical: 7,
      social: 5
    };

    beforeEach(() => {
      subject = create();

      forEach(SOCIAL_ATTRIBUTES, (attribute, index) => {
        subject.attributes[attribute].value = index;
      });
    });

    it('should not allow update an unknown attribute', () => {
      const update = {
        attribute: 'whatever',
        value: 0
      };

      const received = canUpdate(subject, update);

      expect(received).toBeFalsy();
    });

    it('should not allow update attribute beyond its maximum default group type limit', () => {
      const update = {
        attribute: 'presence',
        value: 1
      };

      const received = canUpdate(subject, update);

      expect(received).toBeFalsy();
    });

    it('should not allow update attribute beyond its maximum group type limit', () => {
      const update = {
        attribute: 'presence',
        value: 3
      };

      const received = canUpdate(subject, update, groupsLimits);

      expect(received).toBeFalsy();
    });

    it('should allow update attributes until its maximum default group type limit', () => {
      const update = {
        attribute: 'presence',
        value: 0
      };

      const received = canUpdate(subject, update);

      expect(received).toBeTruthy();
    });

    it('should allow update attributes until its maximum group type limit', () => {
      const update = {
        attribute: 'presence',
        value: 2
      };

      const received = canUpdate(subject, update, groupsLimits);

      expect(received).toBeTruthy();
    });
  });

  describe('Update', () => {
    const attribute = {
      attribute: 'presence',
      value: 1
    };

    beforeEach(() => {
      subject = new Character();
    });

    it('should update character', () => {
      const updated = update(subject, attribute);

      expect(updated.attributes.presence.value).toEqual(1);
    });

    it('should not update character if is out of group limits', () => {
      const attribute = {
        attribute: 'presence',
        value: 4
      };

      const updated = update(subject, attribute);

      expect(updated.attributes.presence.value).toEqual(0);
    });

    it('should return a new updated character instance', () => {
      const updated = update(subject, attribute);

      expect(updated).not.toBe(subject);
    });

    it('should return the same instance if no update was possible', () => {
      const attribute = {
        attribute: 'presence',
        value: 4
      };

      const updated = update(subject, attribute);

      expect(updated).toBe(subject);
    });
  });

  describe('Creation Cost', () => {
    beforeEach(() => {
      subject = create({ featureMaxValue: 10 });
    });

    it('should have no cost for the first attribute', () => {
      subject.attributes['strength'].value = 1;
      const cost = creationCost(subject);
      expect(cost).toEqual(0);
    });

    it('should have cost 1 for second to fourth attribute', () => {
      subject.attributes['strength'].value = 4;
      const cost = creationCost(subject);
      expect(cost).toEqual(3);
    });

    it('should have cost 2 for the fifth attribute', () => {
      subject.attributes['strength'].value = 5;
      const cost = creationCost(subject);
      expect(cost).toEqual(5);
    });

    it('should have cost 2 for each attribute value after the fifth', () => {
      subject.attributes['strength'].value = 10;
      const cost = creationCost(subject);
      expect(cost).toEqual(15);
    });
  });
});
