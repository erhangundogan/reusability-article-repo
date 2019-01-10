/* eslint-disable import/no-extraneous-dependencies,jsx-a11y/anchor-is-valid */
import React from 'react';

import { storiesOf } from '@storybook/react';

import SideMenuBase from '../components/Menu/SideMenuBase';
import './story.css';
import MenuBase from '../components/Menu/MenuBase';
import reactLogo from './react-logo.png';

storiesOf('MenuBase', module)
  .addDecorator(story => <div className="story-container">{ story() }</div>)
  .add(
    'Menu, default direction "horizontal"',
    () => <div style={ { width: '200px' } }><MenuBase items={ [1, 2, 3, 5, 8, 13] } /></div>,
  )
  .add(
    'Menu, direction "vertical"',
    () => <MenuBase direction="vertical" items={ [1, 2, 3, 5, 8, 13] } />,
  );


storiesOf('SideMenuBase', module)
  .addDecorator(story => <div className="story-container">{ story() }</div>)
  .add(
    'side menu, default left aligned',
    () => <SideMenuBase items={ [1, 2, 3, 5, 8, 13] } />,
  )
  .add(
    'side menu, right aligned',
    () => <SideMenuBase align="right" items={ ['one', 'two', 'three', 'five', 'eight', 'thirteen'] } />,
  )
  .add(
    'side menu, top aligned',
    () => <SideMenuBase align="top" items={ [1, 2, 3, 5, 8, 13] } />,
  )
  .add(
    'side menu, bottom aligned',
    () => <SideMenuBase align="bottom" items={ ['one', 'two', 'three', 'five', 'eight', 'thirteen'] } />,
  )
  .add(
    'side menu, custom items',
    () => {
      const CustomMenuItem = ({ children }) => (
        <p style={ { maxWidth: '120px', color: 'red', textAlign: 'center' } }>
          { children }
        </p>
      );
      return (
        <SideMenuBase items={ [
          'plain text',
          <CustomMenuItem>Custom component</CustomMenuItem>,
          <div style={ { width: '120px', display: 'inline-block' } }>
            <img style={ { width: '100%' } } src={ reactLogo } alt="react logo" />
          </div>,
          <>
            <input type="text" value="input element" />
            <button type="submit">submit</button>
          </>,
          12345,
        ] }
        />
      );
    },
  )
  .add(
    'side menu, into container with alignment to the bottom',
    () => (
      <div style={ {
        width: '300px',
        height: '300px',
        margin: '50px',
        display: 'inline-block',
        position: 'relative',
        border: 'solid 1px #CCC',
      } }
      >
        <SideMenuBase
          align="bottom"
          items={ [
            <a href="#">link1</a>,
            <a href="#">link2</a>,
            <a href="#">link3</a>,
          ] }
        />
      </div>
    ),
  );
