import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import TwitterTweetToButton from '../src/TwitterTweetToButton';

storiesOf('TwitterTweetToButton', module)
  .addDecorator(withKnobs)
  .add('without configure', () => <TwitterTweetToButton user={text('user', 'uraway_')} text={text('text', '')} />);
