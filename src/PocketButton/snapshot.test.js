import React from 'react';
import renderer from 'react-test-renderer';
import PocketButton from '.';

it('renders correctly with required props', () => {
  const tree = renderer.create(<PocketButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with other props', () => {
  const tree = renderer.create(<PocketButton url="vertical" />).toJSON();
  expect(tree).toMatchSnapshot();
});
