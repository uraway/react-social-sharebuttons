import { FC } from 'react';
import { useLayoutEffectOnce } from '../utils';

export type TumblrPostButtonProps = {
  color?: 'blue' | 'white' | 'black';
  notes?: 'none' | 'top' | 'right';
};

const TumblrPostButton: FC<TumblrPostButtonProps> = (props) => {
  useLayoutEffectOnce(() => {
    const script = document.createElement('script');
    script.src = 'https://secure.assets.tumblr.com/share-button.js';
    script.id = 'tumblr-js';
    document.getElementsByTagName('head')[0]?.appendChild(script);

    return () => script.remove();
  });
  const { color, notes } = props;
  return (
    <div>
      <a className="tumblr-share-button" data-color={color} data-notes={notes} href="https://embed.tumblr.com/share">
        Tumblr Post Button
      </a>
    </div>
  );
};

TumblrPostButton.defaultProps = {
  color: 'blue',
  notes: 'none',
};

export default TumblrPostButton;
