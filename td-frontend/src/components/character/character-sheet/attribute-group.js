import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import BorderedStyle from '../../bordered-style';
import LevelPicker from './level-picker';
import { titleCase } from 'voca';
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
  const { group, onAttributeClick, maxValue } = props;

  const attributesContainers = group.map(attribute => {
    const { name, value } = attribute;
    const handleLevelClick = clickedValue => onAttributeClick(name, clickedValue);

    return (
      <AttributeContainer key={name}>
        <NameContainer data-qa="attribute-name">{titleCase(name)}</NameContainer>
        <LevelContainer>
          <LevelPicker
            max={maxValue}
            value={value}
            data-qa="level-picker"
            onLevelClick={handleLevelClick}
          />
        </LevelContainer>
      </AttributeContainer>);
  });

  const attributesTotal = reduce(group, (accumulator, { value }) => accumulator + value, 0);

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
  onAttributeClick: PropTypes.func
};

AttributeGroup.defaultProptypes = {
  onAttributeClick: () => {}
};

const areEqual = (prevProps, nextProps) => isEqual(prevProps.group, nextProps.group);

const AttributeGroupMemo = memo(AttributeGroup, areEqual);

export default AttributeGroupMemo;
