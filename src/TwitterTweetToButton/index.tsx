import { FC, useEffect } from 'react';

declare let twttr: {
  widgets: {
    load: () => void;
  };
};

export type TwitterTweetToButtonProps = {
  user: string;
  text?: string;
};

const TwitterTweetToButton: FC<TwitterTweetToButtonProps> = (props) => {
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

  const { user, text } = props;
  return (
    <a
      href={`https://twitter.com/intent/tweet?screen_name=${user}&text=${text || ''}`}
      className="twitter-mention-button"
    >
      Tweet to {user}
    </a>
  );
};

export default TwitterTweetToButton;
