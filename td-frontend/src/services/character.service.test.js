import { create, canUpdate, update } from './character.service';
import Character, { SOCIAL } from '../models/character/character-model';
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
      subject = new Character();

      forEach(SOCIAL, (attribute, index) => {
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
    it('should have no cost for the first attribute', () => {
      // TODO: Implement this test
    });

    it('should have cost 1 for second to fourth attribute', () => {
      // TODO: Implement this test
    });

    it('should have cost 2 for the fifth attribute', () => {
      // TODO: Implement this test
    });
  });
});
