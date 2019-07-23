import { filter, map, fill } from 'lodash';
import AttributeGroup from './attribute-group-model';
import Attribute from './attribute-model';

describe('Attribute Group', function () {
  const attributeMaxValue = 4;

  const attributesNames = [
    'strength',
    'dexterity',
    'stamina',
    'presence',
    'manipulation',
    'composure',
    'intelligence',
    'wits',
    'resolve'
  ];

  const onAttributeChange = jest.fn();

  const filterPredicate = field => field instanceof Attribute;
  const filterCollection = collection => filter(collection, filterPredicate);

  beforeEach(() => {
    onAttributeChange.mockReset();
  });

  it('should have all attributes', function () {
    const attrGroup = new AttributeGroup({});
    const collection = Object.values({ ...attrGroup });
    const groupAttributes = filterCollection(collection);

    const groupAttributesNames = map(groupAttributes, 'name');

    expect(groupAttributesNames).toEqual(attributesNames);
  });

  it('should set attribute maximum value to default', function () {
    const attrGroup = new AttributeGroup({});

    expect(attrGroup.attributeMaxValue).toEqual(AttributeGroup.DEFAULT.MAX_VALUE);
  });

  it('should set all default attributes values', function () {
    const attrGroup = new AttributeGroup({});
    const collection = Object.values({ ...attrGroup });
    const groupAttributes = filterCollection(collection);

    const groupAttributesValues = map(groupAttributes, 'value');
    const expected = fill(new Array(attributesNames.length), 0);

    expect(groupAttributesValues).toEqual(expect.arrayContaining(expected));
  });

  it('should set all maximum allowed attribute values as the default', function () {
    const attrGroup = new AttributeGroup({ });
    const collection = Object.values({ ...attrGroup });
    const groupAttributes = filterCollection(collection);

    const groupAttributesValues = map(groupAttributes, 'attributeMaxValue');
    const expected = fill(new Array(attributesNames.length), AttributeGroup.DEFAULT.MAX_VALUE);

    expect(groupAttributesValues).toEqual(expect.arrayContaining(expected));
  });

  it('should set all maximum allowed attribute values as the one passed as argument', function () {
    const attrGroup = new AttributeGroup({ attributeMaxValue });
    const collection = Object.values({ ...attrGroup });
    const groupAttributes = filterCollection(collection);

    const groupAttributesValues = map(groupAttributes, 'attributeMaxValue');
    const expected = fill(new Array(attributesNames.length), attributeMaxValue);

    expect(groupAttributesValues).toEqual(expect.arrayContaining(expected));
  });

  it('should run callback with valid parameters when changing attribute value', function () {
    const result = [];
    const onAttributeChange = (name, value) => result.push({ name, value });

    const attrGroup = new AttributeGroup({ attributeMaxValue, onAttributeChange });
    const collection = Object.values({ ...attrGroup });
    const groupAttributes = filterCollection(collection);

    const expected = map(attributesNames, name => ({ name, value: attributeMaxValue }));

    groupAttributes.forEach(attr => { attr.value = attributeMaxValue; });

    expect(expected).toEqual(result);
  });
});
