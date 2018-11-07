import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import TwitterHashtagButton from '../src/TwitterHashtagButton';

storiesOf('TwitterHashtagButton', module)
  .addDecorator(withKnobs)
  .add('configured', () => <TwitterHashtagButton hashtag={text('hashtag', 'sharebutton')} text={text('text', '')} />);
