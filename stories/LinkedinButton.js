import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import LinkedinButton from '../src/LinkedInButton';

const counterOptions = {
  top: 'top',
  right: 'right',
};

export default storiesOf('LinkedinButton', module)
  .addDecorator(withKnobs)
  .add('configured', () => (
    <LinkedinButton
      url={text('url', '')}
      lang={text('lang', 'en')}
      counter={select('counter', counterOptions, 'top')}
    />
  ));
