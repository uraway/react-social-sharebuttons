import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import HatenabookmarkButton from '../src/HatenabookmarkButton';

const layoutOptions = {
  default: 'default',
  'simple-balloon': 'simple-balloon',
  'standard-balloon': 'standard-balloon',
};

storiesOf('HatenabookmarkButton', module)
  .addDecorator(withKnobs)
  .add('configured', () => (
    <HatenabookmarkButton
      url={text('url', '')}
      text={text('title', '')}
      layout={select('layout', layoutOptions, 'default')}
    />
  ));
