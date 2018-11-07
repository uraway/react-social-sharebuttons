// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import YouTubeButton from '../src/YouTubeButton';

const layoutOptions = {
  none: 'none',
  full: 'full',
};

const themeOptions = {
  none: 'none',
  dark: 'dark',
};

const countOptions = {
  show: 'show',
  hidden: 'hidden',
};

storiesOf('YouTubeButton', module)
  .addDecorator(withKnobs)
  .add('configured', () => (
    <YouTubeButton
      channel={text('channel', 'GoogleDevelopers')}
      layout={select('layout', layoutOptions)}
      theme={select('theme', themeOptions)}
      count={select('count', countOptions)}
    />
  ));
