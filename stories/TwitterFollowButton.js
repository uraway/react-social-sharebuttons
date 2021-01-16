import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { TwitterFollowButton } from '../dist/index.esm.js';

export default {
  title: 'TwitterFollowButton',
};

export const Basic = () => (
  <TwitterFollowButton user={text('user', 'uraway_')} showCount={boolean('showCount', true)} />
);
