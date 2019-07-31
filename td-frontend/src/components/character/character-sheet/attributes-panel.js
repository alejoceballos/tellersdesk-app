import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import BorderedStyle from '../../bordered-style';
import AttributeGroup from './attribute-group';

const AttributesHeader = styled(BorderedStyle)`
  font-weight: bold;
`;

const AttributesContainer = styled(BorderedStyle)`
  display: flex;
  flex-wrap: nowrap;
`;

const AttributesPanel = (props) => {
  console.log('=> AttributesPanel');

  const onLevelClick = (attribute, value) => {
    props.onAttributeClick(
      attribute, value
    );
  };

  const maxValue = props.attributeMaxValue;

  const {
    strength,
    dexterity,
    stamina,
    presence,
    manipulation,
    composure,
    intelligence,
    wits,
    resolve
  } = props.attributes;

  const groups = [
    [
      { name: 'intelligence', value: intelligence.value },
      { name: 'wits', value: wits.value },
      { name: 'resolve', value: resolve.value }
    ],
    [
      { name: 'strength', value: strength.value },
      { name: 'dexterity', value: dexterity.value },
      { name: 'stamina', value: stamina.value }
    ],
    [
      { name: 'presence', value: presence.value },
      { name: 'manipulation', value: manipulation.value },
      { name: 'composure', value: composure.value }
    ]
  ];

  const attributesGroups = groups.map((group, index) =>
    <AttributeGroup
      data-qa="attribute-group"
      key={index}
      maxValue={maxValue}
      group={group}
      onAttributeClick={(attribute, value) => onLevelClick(attribute, value)}
    />
  );

  return (
    <>
      <AttributesHeader data-qa="attribute-title">Attributes</AttributesHeader>
      <AttributesContainer>{attributesGroups}</AttributesContainer>
    </>
  );
};

AttributesPanel.propTypes = {
  attributeMaxValue: PropTypes.number.isRequired,
  attributes: PropTypes.object.isRequired,
  onAttributeClick: PropTypes.func
};

export default AttributesPanel;
