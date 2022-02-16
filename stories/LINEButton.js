import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { LINEButton } from '../dist/index.es.js'

export default {
  title: 'LINEButton',
};

const imgOptions = {
  '20x20': '20x20',
  '30x30': '30x30',
  '36x60': '36x60',
  '40x40': '40x40',
  '82x20': '82x20',
};

export const Basic = () => <LINEButton text={text('text', '')} image={select('img', imgOptions, '20x20')} />;
