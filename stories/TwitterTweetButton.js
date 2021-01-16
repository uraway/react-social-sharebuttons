import React from 'react';
import { text } from '@storybook/addon-knobs';
import { TwitterTweetButton } from '../dist/index.esm.js';

export default {
  title: 'TwitterTweetButton',
};

export const Basic = () => (
  <TwitterTweetButton
    url={text('url', '')}
    text={text('text', '')}
    hashtags={text('hashtags', 'sharebutton')}
    user={text('user', 'uraway_')}
  />
);
