import { FC, useEffect } from 'react';

export type YouTubeButtonProps = {
  channel: string;
  layout?: 'none' | 'full';
  theme?: 'none' | 'dark';
  count?: 'show' | 'hidden';
};

const YouTubeButton: FC<YouTubeButtonProps> = (props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    document.getElementsByTagName('head')[0]?.appendChild(script);
  }, []);

  const { channel, layout, theme, count } = props;
  return (
    <div className="g-ytsubscribe" data-channel={channel} data-layout={layout} data-theme={theme} data-count={count} />
  );
};

YouTubeButton.defaultProps = { layout: 'none', theme: 'none', count: 'show' };

export default YouTubeButton;
