import Attribute from './attribute-model';

describe('Attribute Model', function () {
  const onLevelChange = jest.fn();

  beforeEach(() => {
    onLevelChange.mockReset();
  });

  it('should set all attributes', () => {
    const argument = {
      onLevelChange,
      value: 1,
      attributeMaxValue: 2,
      name: 'name'
    };

    const expected = {
      onLevelChange,
      attributeMaxValue: argument.attributeMaxValue,
      name: argument.name,
      _value: argument.value
    };

    const attr = new Attribute(argument);

    expect({ ...attr }).toEqual({ ...expected });
  });

  it('should run callback when changing level value', () => {
    const attr = new Attribute({ onLevelChange });

    attr.value = 1;

    expect(onLevelChange.mock.calls.length).toBe(1);
  });

  it('should NOT run callback when level value is left unchanged', () => {
    const attr = new Attribute({
      onLevelChange,
      value: 5,
      attributeMaxValue: 5
    });

    attr.value = 5;

    expect(onLevelChange.mock.calls.length).toBe(0);
  });

  it('should not set a value greater than the maximum allowed', () => {
    const attr = new Attribute({
      onLevelChange,
      value: 0,
      attributeMaxValue: 5
    });

    attr.value = 6;

    expect(attr.value).toEqual(attr.attributeMaxValue);
  });
});
