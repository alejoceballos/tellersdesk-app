import { filter, map, fill } from 'lodash';
import CharacterFeatureGroup from './character-feature-group-model';
import CharacterFeature from './character-feature-model';

describe('CharacterFeature Group', function () {
  const featureMaxValue = 4;

  const featuresNames = [
    'feature_01',
    'feature_02',
    'feature_03',
  ];

  const onFeatureChange = jest.fn();

  const filterPredicate = field => field instanceof CharacterFeature;
  const filterCollection = collection => filter(collection, filterPredicate);

  const createFeatureGroup = properties => {
    const attrGroup = new CharacterFeatureGroup({ ...properties, featuresNames });
    const collection = Object.values({ ...attrGroup });
    return filterCollection(collection);
  };

  beforeEach(() => {
    onFeatureChange.mockReset();
  });

  it('should have all features', function () {
    const featuresGroup = createFeatureGroup();
    const featuresGroupNames = map(featuresGroup, 'name');

    expect(featuresGroupNames).toEqual(featuresNames);
  });

  it('should set feature maximum value to default', function () {
    const attrGroup = new CharacterFeatureGroup({});

    expect(attrGroup.featureMaxValue).toEqual(CharacterFeatureGroup.DEFAULT.MAX_VALUE);
  });

  it('should set all default features values', function () {
    const featuresGroup = createFeatureGroup();
    const featuresGroupValues = map(featuresGroup, 'value');
    const expected = fill(new Array(featuresNames.length), 0);

    expect(featuresGroupValues).toEqual(expect.arrayContaining(expected));
  });

  it('should set all maximum allowed feature values as the default', function () {
    const featuresGroup = createFeatureGroup();
    const featuresGroupValues = map(featuresGroup, 'featureMaxValue');
    const expected = fill(new Array(featuresNames.length), CharacterFeatureGroup.DEFAULT.MAX_VALUE);

    expect(featuresGroupValues).toEqual(expect.arrayContaining(expected));
  });

  it('should set all maximum allowed feature values as the one passed as argument', function () {
    const featuresGroup = createFeatureGroup({ featureMaxValue });
    const featuresGroupValues = map(featuresGroup, 'featureMaxValue');
    const expected = fill(new Array(featuresNames.length), featureMaxValue);

    expect(featuresGroupValues).toEqual(expect.arrayContaining(expected));
  });

  it('should run callback with valid parameters when changing feature value', function () {
    const result = [];
    const onFeatureChange = (name, value) => result.push({ name, value });
    const featuresGroup = createFeatureGroup({ featureMaxValue, onFeatureChange });

    const expected = map(featuresNames, name => ({ name, value: featureMaxValue }));

    featuresGroup.forEach(attr => { attr.value = featureMaxValue; });

    expect(expected).toEqual(result);
  });
});
