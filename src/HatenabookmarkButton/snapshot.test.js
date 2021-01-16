import React from 'react';
import renderer from 'react-test-renderer';
import HatenabookmarkButton from '.';

it('renders correctly with required props', () => {
  const tree = renderer.create(<HatenabookmarkButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with other props', () => {
  const tree = renderer.create(<HatenabookmarkButton url="url" title="title" layout="standard-balloon" />).toJSON();
  expect(tree).toMatchSnapshot();
});
