import React from 'react';
import renderer from 'react-test-renderer';
import TwitterTweetButton from '.';

it('renders correctly with required props', () => {
  const tree = renderer.create(<TwitterTweetButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with other props', () => {
  const tree = renderer
    .create(<TwitterTweetButton url="url" hashtags={['hashtag']} text="text" user="user" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
