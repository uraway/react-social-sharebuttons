import React from 'react';
import { text } from '@storybook/addon-knobs';
import { TwitterHashtagButton } from '../dist/index.esm.js';

export default {
  title: 'TwitterHashtagButton',
};

export const Basic = () => <TwitterHashtagButton hashtag={text('hashtag', 'sharebutton')} text={text('text', '')} />;
