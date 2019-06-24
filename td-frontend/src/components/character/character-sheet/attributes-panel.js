import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import BorderedStyle from "../../bordered-style";
import LevelPicker from "./level-picker";

const AttributesContainer = styled(BorderedStyle)`
  display: flex;
  flex-wrap: nowrap;
`;

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

class AttributesPanel extends React.Component {

  onLevelClick(
    attribute, value
  ) {
    this.props.onAttributeClick(
      attribute, value
    );
  }


  render() {
    const maxValue = this.props.attributeMaxValue;

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
    } = this.props.attributes;

    return (
      <AttributesContainer>
        <GroupContainer>
          <AttributeContainer>
            <NameContainer>Strength</NameContainer>
            <LevelContainer>
              <LevelPicker
                max={maxValue}
                value={strength.value}
                data-qa="levelPicker"
                onLevelClick={value => this.onLevelClick(
                  'strength', value
                )}
              />
            </LevelContainer>
          </AttributeContainer>
          <AttributeContainer>
            <NameContainer>Dexterity</NameContainer>
            <LevelContainer>
              <LevelPicker
                max={maxValue}
                value={dexterity.value}
                data-qa="levelPicker"
                onLevelClick={value => this.onLevelClick(
                  'dexterity', value
                )}/>
            </LevelContainer>
          </AttributeContainer>
          <AttributeContainer>
            <NameContainer>Stamina</NameContainer>
            <LevelContainer>
              <LevelPicker
                max={maxValue}
                value={stamina.value}
                data-qa="levelPicker"
                onLevelClick={value => this.onLevelClick(
                  'stamina', value
                )}/>
            </LevelContainer>
          </AttributeContainer>
        </GroupContainer>
        <GroupContainer>
          <AttributeContainer>
            <NameContainer>Presence</NameContainer>
            <LevelContainer>
              <LevelPicker
                max={maxValue}
                value={presence.value}
                data-qa="levelPicker"
                onLevelClick={value => this.onLevelClick(
                  'presence', value
                )}/>
            </LevelContainer>
          </AttributeContainer>
          <AttributeContainer>
            <NameContainer>Manipulation</NameContainer>
            <LevelContainer>
              <LevelPicker
                max={maxValue}
                value={manipulation.value}
                data-qa="levelPicker"
                onLevelClick={value => this.onLevelClick(
                  'manipulation', value
                )}/>
            </LevelContainer>
          </AttributeContainer>
          <AttributeContainer>
            <NameContainer>Composure</NameContainer>
            <LevelContainer>
              <LevelPicker
                max={maxValue}
                value={composure.value}
                data-qa="levelPicker"
                onLevelClick={value => this.onLevelClick(
                  'composure', value
                )}/>
            </LevelContainer>
          </AttributeContainer>
        </GroupContainer>
        <GroupContainer>
          <AttributeContainer>
            <NameContainer>Intelligence</NameContainer>
            <LevelContainer>
              <LevelPicker
                max={maxValue}
                value={intelligence.value}
                data-qa="levelPicker"
                onLevelClick={value => this.onLevelClick(
                  'intelligence', value
                )}/>
            </LevelContainer>
          </AttributeContainer>
          <AttributeContainer>
            <NameContainer>Wits</NameContainer>
            <LevelContainer>
              <LevelPicker
                max={maxValue}
                value={wits.value}
                data-qa="levelPicker"
                onLevelClick={value => this.onLevelClick(
                  'wits', value
                )}/>
            </LevelContainer>
          </AttributeContainer>
          <AttributeContainer>
            <NameContainer>Resolve</NameContainer>
            <LevelContainer>
              <LevelPicker
                max={maxValue}
                value={resolve.value}
                data-qa="levelPicker"
                onLevelClick={value => this.onLevelClick(
                  'resolve', value
                )}/>
            </LevelContainer>
          </AttributeContainer>
        </GroupContainer>
      </AttributesContainer>
    );
  }
}

AttributesPanel.propTypes = {
  attributeMaxValue: PropTypes.number.isRequired,
  attributes: PropTypes.object.isRequired,
  onAttributeClick: PropTypes.func
};

export default AttributesPanel;
