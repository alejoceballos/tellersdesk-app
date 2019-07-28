import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import BorderedStyle from '../../bordered-style';
import LevelPicker from './level-picker';
import { reduce, isEqual } from 'lodash';

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

const TotalContainer = styled(BorderedStyle)`
  text-align: right;
  padding-right: 1rem;
`;

const AttributeGroup = (props) => {
  console.log('=> AttributeGroup');

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

  const attributesTotal = reduce(props.group, (accumulator, attribute) => accumulator + attribute.value, 0);

  return (
    <GroupContainer>
      {attributesContainers}
      <TotalContainer data-qa="attributes-total">
        {`Total: ${attributesTotal}`}
      </TotalContainer>
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

const areEqual = (prevProps, nextProps) => isEqual(prevProps.group, nextProps.group);

const AttributeGroupMemo = memo(AttributeGroup, areEqual);

export default AttributeGroupMemo;
