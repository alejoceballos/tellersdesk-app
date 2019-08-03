import { create, canUpdate } from './character.service';
import Character from '../models/character/character-model';

describe('Character Service', () => {
  const MAX_DEFAULT_SOCIAL_LIMIT = 3;
  const MAX_SOCIAL_LIMIT = 5;
  const groupsLimits = {
    mental: 3,
    physical: 7,
    social: MAX_SOCIAL_LIMIT
  };

  let subject;

  beforeEach(() => {
    subject = create();
  });

  describe('Create', () => {
    it('should create a brand new character', () => {
      expect(subject instanceof Character).toBeTruthy();
      expect(subject.id).toBeUndefined();
    });
  });

  describe('Can Update', () => {
    it('should not allow update attribute beyond its maximum default group type limit', () => {
      const update = {
        attribute: 'presence',
        value: MAX_DEFAULT_SOCIAL_LIMIT + 1
      };

      const received = canUpdate(subject, update);

      expect(received).toBeFalsy();
    });

    it('should not allow update attribute beyond its maximum group type limit', () => {
      const update = {
        attribute: 'presence',
        value: MAX_SOCIAL_LIMIT + 1
      };

      const received = canUpdate(subject, update, groupsLimits);

      expect(received).toBeFalsy();
    });

    // it('should allow update attributes until its maximum default group type limit', () => {
    //   const update = {
    //     attribute: 'presence',
    //     value: MAX_DEFAULT_SOCIAL_LIMIT
    //   };
    //
    //   const received = canUpdate(subject, update);
    //
    //   expect(received).toBeTruthy();
    // });
    //
    // it('should allow update attributes until its maximum group type limit', () => {
    //   const update = {
    //     attribute: 'presence',
    //     value: MAX_SOCIAL_LIMIT
    //   };
    //
    //   const received = canUpdate(subject, update, groupsLimits);
    //
    //   expect(received).toBeTruthy();
    // });
  });
});
