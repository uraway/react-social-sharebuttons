import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { FacebookButton } from 'react-social-sharebuttons';

const layoutOptions = {
  standard: 'standard',
  box_count: 'box_count',
  button_count: 'button_count',
  button: 'button',
};

export default storiesOf('FacebookButton', module)
  .addDecorator(withKnobs)
  .add('configured', () => (
    <FacebookButton
      url={text('url', '')}
      layout={select('layout', layoutOptions, 'standard')}
      showFaces={boolean('showFaces', false)}
      share={boolean('share', false)}
    />
  ));
