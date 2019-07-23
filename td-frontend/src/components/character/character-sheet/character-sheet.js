import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import BorderedStyle from '../../bordered-style';
import AttributesPanel from './attributes-panel';

const Container = styled(BorderedStyle)``;

const CharacterSheet = props => {
  console.log('=> CharacterSheet');

  const onAttributeClick = (attribute, value) => {
    props.onAttributeClick(
      attribute, value
    );
  };

  const { attributes } = props.character;

  return (
    <Container>
      <AttributesPanel
        data-qa="attributes-panel"
        attributeMaxValue={attributes.featureMaxValue}
        attributes={attributes}
        onAttributeClick={(attribute, value) => onAttributeClick(attribute, value)}
      />
    </Container>
  );
};

CharacterSheet.propTypes = {
  character: PropTypes.object.isRequired,
  onAttributeClick: PropTypes.func
};

export default CharacterSheet;
