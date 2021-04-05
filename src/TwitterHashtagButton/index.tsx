import { FC, useEffect } from 'react';

declare let twttr: {
  widgets: {
    load: () => void;
  };
};

export type TwitterHashtagButtonProps = {
  hashtag: string;
  text?: string;
};

const TwitterHashtagButton: FC<TwitterHashtagButtonProps> = (props) => {
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

    return () => script?.remove();
  }, []);
  const { hashtag, text } = props;
  return (
    <a
      href={`https://twitter.com/intent/tweet?button_hashtag=${hashtag}&text=${text || ''}`}
      className="twitter-hashtag-button"
    >
      Tweet {hashtag}
    </a>
  );
};

export default TwitterHashtagButton;
