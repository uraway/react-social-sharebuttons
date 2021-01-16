import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { TwitterFollowButton } from '../dist/index.esm.js';

export default storiesOf('TwitterFollowButton', module)
  .addDecorator(withKnobs)
  .add('configured', () => (
    <TwitterFollowButton user={text('user', 'uraway_')} showCount={boolean('showCount', true)} />
  ));
