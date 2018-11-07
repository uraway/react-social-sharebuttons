import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import PocketButton from '../src/PocketButton';

const countOptions = {
  horizontal: 'horizontal',
  vertical: 'vertical',
  none: 'none',
};

export default storiesOf('PocketButton', module)
  .addDecorator(withKnobs)
  .add('configured', () => <PocketButton count={select('count', countOptions, 'horizontal')} />);
