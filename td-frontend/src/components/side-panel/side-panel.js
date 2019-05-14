import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  position: absolute;
  border-color: black;
  border-width: thin;
  border-style: solid;
  border-radius: 10px;
  left: -20px;
  padding: 10px;
`;

const SidePanel = () => {
  return <Container><div data-qa-id="side-panel">Side Panel</div></Container>;
};

export default SidePanel;
