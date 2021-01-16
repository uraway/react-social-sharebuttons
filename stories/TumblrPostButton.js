import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { TumblrPostButton } from '../dist/index.esm.js';

const colorOptions = {
  blue: 'blue',
  black: 'black',
  white: 'white',
};

const notesOptions = {
  none: 'none',
  top: 'top',
  right: 'right',
};

export default storiesOf('TumblrPostButton', module)
  .addDecorator(withKnobs)
  .add('configured', () => (
    <TumblrPostButton color={select('color', colorOptions)} notes={select('notes', notesOptions)} />
  ));
