import { FC } from 'react';
import { useLayoutEffectOnce } from '../utils';

declare let twttr: {
  widgets: {
    load: () => void;
  };
};

export type TwitterTweetButtonProps = {
  url?: string;
  text?: string;
  hashtags?: string;
  user?: string;
};

const TwitterTweetButton: FC<TwitterTweetButtonProps> = (props) => {
  useLayoutEffectOnce(() => {
    let script: HTMLScriptElement | undefined;

    if (typeof twttr === 'undefined') {
      script = document.createElement('script');
      script.src = '//platform.twitter.com/widgets.js';
      script.async = true;
      script.id = 'twitter-wjs';
      document.getElementsByTagName('head')[0]?.appendChild(script);
    } else {
      twttr.widgets.load();
    }

    return () => script?.remove();
  });

  const { url, text, user, hashtags } = props;
  return (
    <div>
      <a
        href="https://twitter.com/share"
        className="twitter-share-button"
        data-url={url}
        data-text={text}
        data-via={user}
        data-hashtags={hashtags}
      >
        Tweet
      </a>
    </div>
  );
};

TwitterTweetButton.defaultProps = {
  url: typeof window !== 'undefined' ? window.location.href : '',
  text: '',
  hashtags: '',
  user: '',
};

export default TwitterTweetButton;
