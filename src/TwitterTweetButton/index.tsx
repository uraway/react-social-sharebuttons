import { FC, useEffect } from 'react';

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
  useEffect(() => {
    let script: HTMLScriptElement;

    if (typeof twttr === 'undefined') {
      script = document.createElement('script');
      script.src = '//platform.twitter.com/widgets.js';
      script.async = true;
      script.id = 'twitter-wjs';
      document.getElementsByTagName('head')[0]?.appendChild(script);
    } else {
      twttr.widgets.load();
    }
  }, []);

  const { url, text, user, hashtags } = props;
  return (
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
  );
};

TwitterTweetButton.defaultProps = {
  url: typeof window !== 'undefined' ? window.location.href : '',
  text: '',
  hashtags: '',
  user: '',
};

export default TwitterTweetButton;
