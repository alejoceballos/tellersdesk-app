import React from 'react';
import styled from "styled-components";
import BorderedStyle from "../../bordered-style";
import AttributesPanel from "./attributes-panel";

const Container = styled(BorderedStyle)``;

const CharacterSheet = () => <Container><AttributesPanel data-qa="attributesPanel"/></Container>;

export default CharacterSheet;
