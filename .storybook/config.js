import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(
  withInfo({
    header: true
  })
);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
