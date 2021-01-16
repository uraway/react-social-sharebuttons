import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { TwitterHashtagButton } from '../dist/index.esm.js';

export default storiesOf('TwitterHashtagButton', module)
  .addDecorator(withKnobs)
  .add('configured', () => <TwitterHashtagButton hashtag={text('hashtag', 'sharebutton')} text={text('text', '')} />);
