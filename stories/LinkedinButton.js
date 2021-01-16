import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { LinkedInButton } from '../dist/index.esm.js';

const counterOptions = {
  top: 'top',
  right: 'right',
};

export default storiesOf('LinkedInButton', module)
  .addDecorator(withKnobs)
  .add('configured', () => (
    <LinkedInButton
      url={text('url', '')}
      lang={text('lang', 'en')}
      counter={select('counter', counterOptions, 'top')}
    />
  ));
