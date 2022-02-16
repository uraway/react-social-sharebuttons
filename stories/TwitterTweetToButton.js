import React from 'react';
import { text } from '@storybook/addon-knobs';
import { TwitterTweetToButton } from '../dist/index.es.js'

export default {
  title: 'TwitterTweetToButton',
};

export const Basic = () => <TwitterTweetToButton user={text('user', 'uraway_')} text={text('text', '')} />;
