import React from 'react';
import { select } from '@storybook/addon-knobs';
import { PocketButton } from '../dist/index.esm.js';

export default {
  title: 'PocketButton',
};

const countOptions = {
  horizontal: 'horizontal',
  vertical: 'vertical',
  none: 'none',
};

export const Basic = () => <PocketButton count={select('count', countOptions, 'horizontal')} />;
