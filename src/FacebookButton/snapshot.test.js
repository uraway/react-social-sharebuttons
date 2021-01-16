import React from 'react';
import renderer from 'react-test-renderer';
import FacebookButton from '.';

it('renders correctly', () => {
  const tree = renderer.create(<FacebookButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with props', () => {
  const tree = renderer.create(<FacebookButton url="url" layout="standard" showFaces={false} share />).toJSON();
  expect(tree).toMatchSnapshot();
});
