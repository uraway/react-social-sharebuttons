import React from 'react';
import renderer from 'react-test-renderer';
import LineButton from '.';

it('renders correctly with required props', () => {
  const tree = renderer.create(<LineButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with other props', () => {
  const tree = renderer.create(<LineButton text="text" image="82x20" />).toJSON();
  expect(tree).toMatchSnapshot();
});
