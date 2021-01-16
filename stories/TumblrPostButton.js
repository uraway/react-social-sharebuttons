import React from 'react';
import { select } from '@storybook/addon-knobs';
import { TumblrPostButton } from '../dist/index.esm.js';

export default {
  title: 'TumblrPostButton',
};

const colorOptions = {
  blue: 'blue',
  black: 'black',
  white: 'white',
};

const notesOptions = {
  none: 'none',
  top: 'top',
  right: 'right',
};

export const Basic = () => (
  <TumblrPostButton color={select('color', colorOptions)} notes={select('notes', notesOptions)} />
);
