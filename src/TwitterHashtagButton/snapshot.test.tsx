import renderer from 'react-test-renderer';
import TwitterHashtagButton from '.';

it('renders correctly with required props', () => {
  const tree = renderer.create(<TwitterHashtagButton hashtag="hashtag" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with other props', () => {
  const tree = renderer.create(<TwitterHashtagButton hashtag="hashtag" text="text" />).toJSON();
  expect(tree).toMatchSnapshot();
});
