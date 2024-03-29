import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { FeedlyButton } from '../dist/index.es.js'

export default {
  title: 'FeedlyButton',
};

const layoutOptions = {
  'rectangle-volume-big': 'rectangle-volume-big',
  'rectangle-volume-medium': 'rectangle-volume-medium',
  'rectangle-volume-small': 'rectangle-volume-small',
  'rectangle-flat-big': 'rectangle-flat-big',
  'rectangle-flat-medium': 'rectangle-flat-medium',
  'rectangle-flat-small': 'rectangle-flat-small',
  'square-volume': 'square-volume',
  'flat-green': 'flat-green',
  'circle-flat-green': 'circle-flat-green',
  'logo-green': 'logo-green',
  'square-flat-black': 'square-flat-black',
  'circle-flat-black': 'circle-flat-black',
  'logo-black': 'logo-black',
  'square-flat-white': 'square-flat-white',
  'circle-flat-white': 'circle-flat-white',
  'logo-white': 'logo-white',
};

export const Basic = () => (
  <FeedlyButton feedurl={text('feedurl', '')} layout={select('layout', layoutOptions, 'rectangle-volume-big')} />
);
