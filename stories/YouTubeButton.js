import { text, select } from '@storybook/addon-knobs';
import { YouTubeButton } from '../dist/index.esm.js';

export default {
  title: 'YouTubeButton',
};

const layoutOptions = {
  none: 'none',
  full: 'full',
};

const themeOptions = {
  none: 'none',
  dark: 'dark',
};

const countOptions = {
  show: 'show',
  hidden: 'hidden',
};

export const Basic = () => (
  <YouTubeButton
    channel={text('channel', 'GoogleDevelopers')}
    layout={select('layout', layoutOptions)}
    theme={select('theme', themeOptions)}
    count={select('count', countOptions)}
  />
);
