import React from 'react';
import styled from "styled-components";
import BorderedStyle from "../../bordered-style";
import LevelPicker from "./level-picker";

const Container = styled(BorderedStyle)``;

const AttributesPanel = () => <Container>
  <span>Attr 1</span><LevelPicker max={5} value={5} data-qa="levelPicker"/>
  <span>Attr 2</span><LevelPicker max={5} value={4} data-qa="levelPicker"/>
  <span>Attr 3</span><LevelPicker max={5} value={3} data-qa="levelPicker"/>
  <span>Attr 4</span><LevelPicker max={5} value={2} data-qa="levelPicker"/>
  <span>Attr 5</span><LevelPicker max={5} value={1} data-qa="levelPicker"/>
  <span>Attr 6</span><LevelPicker max={5} value={0} data-qa="levelPicker"/>
  <span>Attr 7</span><LevelPicker max={5} value={1} data-qa="levelPicker"/>
  <span>Attr 8</span><LevelPicker max={5} value={2} data-qa="levelPicker"/>
  <span>Attr 9</span><LevelPicker max={5} value={3} data-qa="levelPicker"/>
</Container>;

export default AttributesPanel;
