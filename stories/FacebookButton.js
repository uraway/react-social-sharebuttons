import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { FacebookButton } from '../dist/index.esm.js';

const layoutOptions = {
  standard: 'standard',
  box_count: 'box_count',
  button_count: 'button_count',
  button: 'button',
};

export default {
  title: 'FacebookButton',
};

export const Basic = () => (
  <FacebookButton
    url={text('url', '')}
    layout={select('layout', layoutOptions, 'standard')}
    showFaces={boolean('showFaces', false)}
    share={boolean('share', false)}
  />
);
