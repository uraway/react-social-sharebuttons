import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { LinkedInButton } from '../dist/index.es.js'

export default {
  title: 'LinkedInButton',
};

const counterOptions = {
  top: 'top',
  right: 'right',
};

export const Basic = () => (
  <LinkedInButton url={text('url', '')} lang={text('lang', 'en')} counter={select('counter', counterOptions, 'top')} />
);
