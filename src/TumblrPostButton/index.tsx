import { FC, useEffect } from 'react';

export type TumblrPostButtonProps = {
  color?: 'blue' | 'white' | 'black';
  notes?: 'none' | 'top' | 'right';
};

const TumblrPostButton: FC<TumblrPostButtonProps> = (props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://secure.assets.tumblr.com/share-button.js';
    script.id = 'tumblr-js';
    document.getElementsByTagName('head')[0]?.appendChild(script);
  }, []);
  const { color, notes } = props;
  return (
    <a className="tumblr-share-button" data-color={color} data-notes={notes} href="https://embed.tumblr.com/share">
      Tumber Post Button
    </a>
  );
};

TumblrPostButton.defaultProps = {
  color: 'blue',
  notes: 'none',
};

export default TumblrPostButton;
