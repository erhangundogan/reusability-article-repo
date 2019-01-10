/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

const setDirection = (direction) => {
  const defaults = {
    horizontal: 'row nowrap',
    vertical: 'column nowrap',
  };
  return defaults[direction || 'horizontal'];
};

export const renderMenuItems = ({ items }) => (
  items.map(
    (item, index) => <li key={ index }>{ item }</li>
  )
);

export const MenuBaseContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  ${props => (props.direction ? `flex-flow: ${setDirection(props.direction)}` : '')};
`;

const MenuBase = props => (
  <MenuBaseContainer { ...props }>
    { renderMenuItems(props) }
  </MenuBaseContainer>
);

export default MenuBase;
