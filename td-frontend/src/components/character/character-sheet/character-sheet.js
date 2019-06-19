import React from 'react';
import styled from "styled-components";
import BorderedStyle from "../../bordered-style";
import AttributesPanel from "./attributes-panel";

const Container = styled(BorderedStyle)``;

class CharacterSheet extends React.Component {
  state = {

  };

  constructor(props) {
    super(props);
    console.log('C - [CharacterSheet] constructor');
  }

  static getDerivedStateFromProps(
    props, state
  ) {
    console.log(
      'C,U - [CharacterSheet] getDerivedStateFromProps', {props, state }
    );

    return true;
  }

  shouldComponentUpdate(
    nextProps, nextState
  ) {
    console.log(
      'U - [CharacterSheet] shouldComponentUpdate', {nextProps, nextState }
    );
  }

  render() {
    console.log('C - [CharacterSheet] render');
    return (
      <Container>
        <AttributesPanel data-qa="attributesPanel"/>
      </Container>
    );
  }

  getSnapshotBeforeUpdate(
    prevProps, prevState
  ) {
    console.log(
      'U - [CharacterSheet] getSnapshotBeforeUpdate', {prevProps, prevState }
    );
  }

  componentDidMount() {
    console.log('C - [CharacterSheet] componentDidMount');
  }

  componentDidUpdate() {
    console.log('U - [CharacterSheet] componentDidUpdate');
  }

}

export default CharacterSheet;
