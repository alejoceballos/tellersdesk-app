import { create, canUpdate } from './character.service';
import Character, { ATTRIBUTES, SOCIAL } from '../models/character/character-model';
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
});
