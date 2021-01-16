import React from 'react';
import renderer from 'react-test-renderer';
import YouTubeButton from '.';

it('renders correctly with required props', () => {
  const tree = renderer.create(<YouTubeButton channel="channel" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with other props', () => {
  const tree = renderer.create(<YouTubeButton channel="channel" layout="full" theme="dark" count="hidden" />).toJSON();
  expect(tree).toMatchSnapshot();
});
