import renderer from 'react-test-renderer';
import TwitterFollowButton from '.';

it('renders correctly with required props', () => {
  const tree = renderer.create(<TwitterFollowButton user="user" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with other props', () => {
  const tree = renderer.create(<TwitterFollowButton user="user" showCount={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
