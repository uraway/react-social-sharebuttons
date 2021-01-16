import React from 'react';
import renderer from 'react-test-renderer';
import FeedlyButton from '.';

it('renders correctly with required props', () => {
  const tree = renderer.create(<FeedlyButton feedurl="url" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with other props', () => {
  const tree = renderer.create(<FeedlyButton url="url" layout="square-flat-white" />).toJSON();
  expect(tree).toMatchSnapshot();
});
