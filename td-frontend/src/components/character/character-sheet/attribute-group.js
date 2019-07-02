import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import BorderedStyle from '../../bordered-style';
import LevelPicker from './level-picker';

const GroupContainer = styled(BorderedStyle)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const AttributeContainer = styled(BorderedStyle)`
  display: flex;
  flex-wrap: wrap;
  width: 15rem;
`;

const NameContainer = styled(BorderedStyle)`
  flex-basis: 40%;
  text-align: left;
`;

const LevelContainer = styled(BorderedStyle)`
  flex-basis: 49%;
  text-align: right;
`;

const AttributeGroup = (props) => {
  const onLevelClick = (attribute, value) =>
    props.onAttributeClick(
      attribute, value
    );

  const attributesContainers = props.group.map(attribute =>
    <AttributeContainer key={attribute.name}>
      <NameContainer>{attribute.name}</NameContainer>
      <LevelContainer>
        <LevelPicker
          max={props.maxValue}
          value={attribute.value}
          data-qa="level-picker"
          onLevelClick={value => onLevelClick(attribute.name, value)}
        />
      </LevelContainer>
    </AttributeContainer>
  );

  return (
    <GroupContainer>
      {attributesContainers}
    </GroupContainer>
  );
};

AttributeGroup.propTypes = {
  maxValue: PropTypes.number.isRequired,
  group: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired),
  onAttributeClick: PropTypes.func.isRequired
};

export default AttributeGroup;
