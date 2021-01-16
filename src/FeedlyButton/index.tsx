type Layout =
  | 'rectangle-volume-big'
  | 'rectangle-volume-medium'
  | 'rectangle-volume-small'
  | 'rectangle-flat-big'
  | 'rectangle-flat-medium'
  | 'rectangle-flat-small'
  | 'square-volume'
  | 'flat-green'
  | 'circle-flat-green'
  | 'logo-green'
  | 'square-flat-black'
  | 'circle-flat-black'
  | 'logo-black'
  | 'square-flat-white'
  | 'circle-flat-white'
  | 'logo-white';

type Props = {
  feedurl: string;
  layout?: Layout;
  width?: string;
  height?: string;
};

export default function FeedlyButton({
  feedurl,
  layout = 'rectangle-volume-big',
  width,
  height,
  ...others
}: Props): JSX.Element {
  const layoutSet: { [key in Layout]: { width: string; height: string; img: string } } = {
    'rectangle-volume-big': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-big_2x.png',
      height: '56px',
      width: '131px',
    },
    'rectangle-volume-medium': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-medium_2x.png',
      height: '28px',
      width: '71px',
    },
    'rectangle-volume-small': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-small_2x.png',
      height: '20px',
      width: '66px',
    },
    'rectangle-flat-big': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-big_2x.png',
      height: '28px',
      width: '71px',
    },
    'rectangle-flat-medium': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-medium_2x.png',
      height: '28px',
      width: '71px',
    },
    'rectangle-flat-small': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-small_2x.png',
      height: '20px',
      width: '66px',
    },
    'square-volume': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-square-volume_2x.png',
      height: '28px',
      width: '28px',
    },
    'flat-green': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-square-flat-green_2x.png',
      height: '28px',
      width: '28px',
    },
    'circle-flat-green': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-circle-flat-green_2x.png',
      height: '28px',
      width: '28px',
    },
    'logo-green': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-logo-green_2x.png',
      height: '28px',
      width: '28px',
    },
    'square-flat-black': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-square-flat-black_2x.png',
      height: '28px',
      width: '28px',
    },
    'circle-flat-black': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-circle-flat-black_2x.png',
      height: '28px',
      width: '28px',
    },
    'logo-black': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-logo-black_2x.png',
      height: '28px',
      width: '28px',
    },
    'square-flat-white': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-square-flat-white_2x.png',
      height: '28px',
      width: '28px',
    },
    'circle-flat-white': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-circle-flat-white_2x.png',
      height: '28px',
      width: '28px',
    },
    'logo-white': {
      img: 'http://s3.feedly.com/img/follows/feedly-follow-logo-white_2x.png',
      height: '28px',
      width: '28px',
    },
  };
  const currentLayout = layoutSet[layout];
  return (
    <a href={`https://feedly.com/i/subscription/feed/${encodeURIComponent(feedurl)}`} target="blank">
      <img
        src={currentLayout.img}
        alt="follow us in feedly"
        style={{ width: width || currentLayout.width, height: height || currentLayout.height }}
        {...others}
      />
    </a>
  );
}

FeedlyButton.defaultProps = {
  layout: 'rectangle-volume-small',
  width: '',
  height: '',
};
