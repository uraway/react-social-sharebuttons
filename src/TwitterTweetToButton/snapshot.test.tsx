import renderer from 'react-test-renderer';
import TwitterTweetToButton from '.';

it('renders correctly with required props', () => {
  const tree = renderer.create(<TwitterTweetToButton user="user" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with other props', () => {
  const tree = renderer.create(<TwitterTweetToButton text="text" user="user" />).toJSON();
  expect(tree).toMatchSnapshot();
});
