import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import TwitterTweetButton from '../src/TwitterTweetButton';

storiesOf('TwitterTweetButton', module)
  .addDecorator(withKnobs)
  .add('configured', () => (
    <TwitterTweetButton
      url={text('url', '')}
      text={text('text', '')}
      hashtags={text('hashtags', 'sharebutton')}
      user={text('user', 'uraway_')}
    />
  ));
