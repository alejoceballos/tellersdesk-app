import CharacterFeature from './character-feature-model';

describe('CharacterFeature Model', function () {
  const onLevelChange = jest.fn();

  beforeEach(() => {
    onLevelChange.mockReset();
  });

  it('should set all features', () => {
    const argument = {
      onLevelChange,
      value: 1,
      featureMaxValue: 2,
      name: 'name'
    };

    const expected = {
      onLevelChange,
      featureMaxValue: argument.featureMaxValue,
      name: argument.name,
      _value: argument.value
    };

    const attr = new CharacterFeature(argument);

    expect({ ...attr }).toEqual({ ...expected });
  });

  it('should run callback when changing level value', () => {
    const attr = new CharacterFeature({ onLevelChange });

    attr.value = 1;

    expect(onLevelChange.mock.calls.length).toBe(1);
  });

  it('should NOT run callback when level value is left unchanged', () => {
    const attr = new CharacterFeature({
      onLevelChange,
      value: 5,
      featureMaxValue: 5
    });

    attr.value = 5;

    expect(onLevelChange.mock.calls.length).toBe(0);
  });

  it('should not set a value greater than the maximum allowed', () => {
    const attr = new CharacterFeature({
      onLevelChange,
      value: 0,
      featureMaxValue: 5
    });

    attr.value = 6;

    expect(attr.value).toEqual(attr.featureMaxValue);
  });
});
