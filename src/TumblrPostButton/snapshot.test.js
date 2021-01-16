import React from 'react';
import renderer from 'react-test-renderer';
import TumblrPostButton from '.';

it('renders correctly with required props', () => {
  const tree = renderer.create(<TumblrPostButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with other props', () => {
  const tree = renderer.create(<TumblrPostButton color="black" notes="right" />).toJSON();
  expect(tree).toMatchSnapshot();
});
