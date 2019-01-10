/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled, { css } from 'styled-components';
import { MenuBaseContainer, renderMenuItems } from './MenuBase';

const setAlignment = ({ align }) => {
  switch (align) {
    case 'right':
      return css`
        right: 0;
        top: 0;
        bottom: 0;
        flex-flow: column nowrap;
      `;
    case 'top':
      return css`
        top: 0;
        left: 0;
        right: 0;
        flex-flow: row nowrap;
      `;
    case 'bottom':
      return css`
        bottom: 0;
        left: 0;
        right: 0;
        flex-flow: row nowrap;
      `;
    case 'left':
    default:
      return css`
        left: 0;
        top: 0;
        bottom: 0;
        flex-flow: column nowrap;
      `;
  }
};

export const SideMenuBaseContainer = styled(MenuBaseContainer)`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  position: absolute;
  ${props => setAlignment(props)};
  
  li {
    min-width: 48px;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 0;
    
    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }
    
    &.selected {
      background-color: blue;
      color: white;
    }
  }
`;

const SideMenuBase = (props) => {
  const { align } = props;
  return (
    <SideMenuBaseContainer
      { ...props }
      direction={align === 'top' || 'bottom' ? 'horizontal' : 'vertical'}
    >
      { renderMenuItems(props) }
    </SideMenuBaseContainer>
  );
};

export default SideMenuBase;
