import React from 'react';
import renderer from 'react-test-renderer';
import LinkedInButton from '.';

it('renders correctly with required props', () => {
  const tree = renderer.create(<LinkedInButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with other props', () => {
  const tree = renderer.create(<LinkedInButton url="url" counter="right" lang="ja" />).toJSON();
  expect(tree).toMatchSnapshot();
});
