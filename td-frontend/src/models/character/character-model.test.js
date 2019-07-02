import Character from './character-model';

describe('Character Model', function () {
  const onCharacterChange = jest.fn();

  beforeEach(() => {
    onCharacterChange.mockReset();
  });

  it('should run callback when changing attribute value', () => {
    const character = new Character({ onCharacterChange });
    character.attributes.strength.value = 1;

    expect(onCharacterChange).toBeCalledWith(undefined, 'attribute', 'strength', 1);
  });

  it('should NOT run callback when level value is left unchanged', () => {
    const character = new Character({ onCharacterChange });
    character.attributes.strength = 1;

    expect(onCharacterChange).toBeCalledTimes(0);
  });
});
