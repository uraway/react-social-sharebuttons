import { FC } from 'react';
import { useLayoutEffectOnce } from '../utils';

export type YouTubeButtonProps = {
  channel: string;
  layout?: 'none' | 'full';
  theme?: 'none' | 'dark';
  count?: 'show' | 'hidden';
};

const YouTubeButton: FC<YouTubeButtonProps> = (props) => {
  useLayoutEffectOnce(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    document.getElementsByTagName('head')[0]?.appendChild(script);

    return () => script.remove();
  });

  const { channel, layout, theme, count } = props;
  return (
    <div>
      <div
        className="g-ytsubscribe"
        data-channel={channel}
        data-layout={layout}
        data-theme={theme}
        data-count={count}
      />
    </div>
  );
};

YouTubeButton.defaultProps = { layout: 'none', theme: 'none', count: 'show' };

export default YouTubeButton;
