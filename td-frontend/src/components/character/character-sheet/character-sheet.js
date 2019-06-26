import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BorderedStyle from '../../bordered-style';
import AttributesPanel from './attributes-panel';

const Container = styled(BorderedStyle)``;

class CharacterSheet extends React.Component {
  onAttributeClick(attribute, value) {
    this.props.onAttributeClick(
      attribute, value
    );
  }

  render() {
    const { attributes } = this.props.character;

    return (
      <Container>
        <AttributesPanel
          data-qa="attributesPanel"
          attributeMaxValue={attributes.attributeMaxValue}
          attributes={attributes}
          onAttributeClick={(attribute, value) => this.onAttributeClick(attribute, value)}
        />
      </Container>
    );
  }
}

CharacterSheet.propTypes = {
  character: PropTypes.object.isRequired,
  onAttributeClick: PropTypes.func
};

export default CharacterSheet;
