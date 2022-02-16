import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { HatenabookmarkButton } from '../dist/index.es.js'

export default {
  title: 'HatenabookmarkButton',
};

const layoutOptions = {
  'basic-label-counter': 'basic-label-counter',
  'touch-counter': 'touch-counter',
  'vertical-large': 'vertical-large',
};

export const Basic = () => (
  <HatenabookmarkButton
    url={text('url', '')}
    text={text('title', '')}
    layout={select('layout', layoutOptions, 'basic-label-counter')}
  />
);
