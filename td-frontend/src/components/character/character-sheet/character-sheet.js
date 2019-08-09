import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import BorderedStyle from '../../bordered-style';
import AttributesPanel from './attributes-panel';

const Container = styled(BorderedStyle)``;

const CharacterSheet = props => {
  const { attributes } = props.character;

  const handleAttributeClick = (attribute, value) => props.onAttributeClick(attribute, value);

  return (
    <Container>
      <AttributesPanel
        data-qa="attributes-panel"
        attributeMaxValue={attributes.featureMaxValue}
        attributes={attributes}
        onAttributeClick={handleAttributeClick}
      />
    </Container>
  );
};

CharacterSheet.propTypes = {
  character: PropTypes.object.isRequired,
  onAttributeClick: PropTypes.func
};

CharacterSheet.defaultProptypes = {
  onAttributeClick: () => {}
};

export default CharacterSheet;
